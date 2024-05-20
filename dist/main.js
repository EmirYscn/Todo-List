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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* General Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Verdana", Geneva, Tahoma, sans-serif;
  height: 100vh;
  background-color: #f7f9fc;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
}

/* Content Layout */
.content {
  display: grid;
  grid-template-columns: auto 1fr;
  width: 90%;
  max-width: 1200px;
  height: 90%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

/* Sidebar */
.sidebar {
  width: 300px;
  padding: 2em;
  background-color: #3498db;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  overflow-y: auto;
}

.user {
  text-align: center;
}

.projects-container {
  width: 100%;
}

.projects-container h1 {
  font-size: 1.5em;
  margin-bottom: 1em;
}

.projects-container ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
}

.projects-container li {
  padding: 10px;
  margin: 4px 0;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  position: relative;
}

.projects-container li:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.projects-container li button {
  background-color: #e74c3c;
  padding: 8px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 10px;
}
.projects-container li button:hover {
  background-color: #c0392b;
}

.btn {
  appearance: button;
  background-color: #2ecc71;
  border: none;
  border-radius: 16px;
  padding: 10px 20px;
  color: white;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.2s;
}

.btn:hover {
  background-color: #27ae60;
}

/* Main Content */
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  background-color: white;
  overflow-y: auto;
}

.header {
  font-size: 2em;
  margin-bottom: 1em;
  color: #3498db;
}

.todos {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
}

.todo {
  width: 80%;
  padding: 1em;
  display: grid;
  grid-template-columns: auto auto 1fr auto auto;
  gap: 10px;
  background-color: #ecf0f1;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.todo-btn {
  padding: 10px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
}

.delete-todo-btn {
  background-color: #e74c3c;
  color: white;
}

.delete-todo-btn:hover {
  background-color: #c0392b;
}

.done-todo-btn {
  background-color: #2ecc71;
  color: white;
}

.done-todo-btn:hover {
  background-color: #27ae60;
}

.create-todo-btn {
  position: absolute;
  right: 20px;
  bottom: 20px;
  background-color: #3498db;
  color: white;
  padding: 5px;
  border: none;
  font-size: 31px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
}

.create-todo-btn:hover {
  background-color: #2980b9;
}

/* Popups */
.create-project-popup,
.create-todo-popup {
  display: none; /* Initially hidden */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
  width: 90%;
  max-width: 400px;
}

.create-project-popup.active,
.create-todo-popup.active {
  display: block;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 24px;
  color: #888;
}

.form h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #3498db;
}

.form-element {
  margin-bottom: 15px;
}

.form-element label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
}

.form-element input,
.form-element select,
.form-element button {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #dcdcdc;
}

.form-element button {
  background-color: #2ecc71;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.form-element button:hover {
  background-color: #27ae60;
}
.darkmode-toggle-btn {
  position: absolute;
  right: 20px;
  top: 10px;
}
label[for="darkmode-toggle"] {
  width: 80px;
  height: 32px;
  position: relative;
  display: block;
  background: #ebebeb;
  border-radius: 200px;
  box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),
    inset 0px -5px 15px rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: 0.5s;
}
label[for="darkmode-toggle"]:after {
  content: "";
  width: 22px;
  height: 22px;
  position: absolute;
  top: 6px;
  left: 6px;
  background: linear-gradient(180deg, #ffcc89, #d8860b);
  border-radius: 180px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}

input[id="darkmode-toggle"] {
  width: 0;
  height: 0;
  visibility: hidden;
}
input[id="darkmode-toggle"]:checked + label {
  background: #242424;
}
input[id="darkmode-toggle"]:checked + label:after {
  left: 72px;
  transform: translateX(-100%);
  background: linear-gradient(180deg, #777, #3a3a3a);
}
label[for="darkmode-toggle"]:active:after {
  width: 40px;
}

body.darkmode {
  background-color: #212020;
}
.main.darkmode {
  background-color: #3a3a3a;
}
.todo.darkmode {
  background-color: #262525;
  color: white;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* General Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Verdana\", Geneva, Tahoma, sans-serif;\n  height: 100vh;\n  background-color: #f7f9fc;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #333;\n}\n\n/* Content Layout */\n.content {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  width: 90%;\n  max-width: 1200px;\n  height: 90%;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n/* Sidebar */\n.sidebar {\n  width: 300px;\n  padding: 2em;\n  background-color: #3498db;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2em;\n  overflow-y: auto;\n}\n\n.user {\n  text-align: center;\n}\n\n.projects-container {\n  width: 100%;\n}\n\n.projects-container h1 {\n  font-size: 1.5em;\n  margin-bottom: 1em;\n}\n\n.projects-container ul {\n  list-style-type: none;\n  padding: 0;\n  width: 100%;\n}\n\n.projects-container li {\n  padding: 10px;\n  margin: 4px 0;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  position: relative;\n}\n\n.projects-container li:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.projects-container li button {\n  background-color: #e74c3c;\n  padding: 8px;\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n}\n.projects-container li button:hover {\n  background-color: #c0392b;\n}\n\n.btn {\n  appearance: button;\n  background-color: #2ecc71;\n  border: none;\n  border-radius: 16px;\n  padding: 10px 20px;\n  color: white;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  text-transform: uppercase;\n  transition: background-color 0.2s;\n}\n\n.btn:hover {\n  background-color: #27ae60;\n}\n\n/* Main Content */\n.main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2em;\n  background-color: white;\n  overflow-y: auto;\n}\n\n.header {\n  font-size: 2em;\n  margin-bottom: 1em;\n  color: #3498db;\n}\n\n.todos {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1em;\n}\n\n.todo {\n  width: 80%;\n  padding: 1em;\n  display: grid;\n  grid-template-columns: auto auto 1fr auto auto;\n  gap: 10px;\n  background-color: #ecf0f1;\n  border-radius: 10px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.todo-btn {\n  padding: 10px;\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n}\n\n.delete-todo-btn {\n  background-color: #e74c3c;\n  color: white;\n}\n\n.delete-todo-btn:hover {\n  background-color: #c0392b;\n}\n\n.done-todo-btn {\n  background-color: #2ecc71;\n  color: white;\n}\n\n.done-todo-btn:hover {\n  background-color: #27ae60;\n}\n\n.create-todo-btn {\n  position: absolute;\n  right: 20px;\n  bottom: 20px;\n  background-color: #3498db;\n  color: white;\n  padding: 5px;\n  border: none;\n  font-size: 31px;\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  transition: all 0.2s ease;\n}\n\n.create-todo-btn:hover {\n  background-color: #2980b9;\n}\n\n/* Popups */\n.create-project-popup,\n.create-todo-popup {\n  display: none; /* Initially hidden */\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  z-index: 10;\n  width: 90%;\n  max-width: 400px;\n}\n\n.create-project-popup.active,\n.create-todo-popup.active {\n  display: block;\n}\n\n.close-btn {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n  font-size: 24px;\n  color: #888;\n}\n\n.form h2 {\n  text-align: center;\n  margin-bottom: 20px;\n  font-size: 24px;\n  color: #3498db;\n}\n\n.form-element {\n  margin-bottom: 15px;\n}\n\n.form-element label {\n  display: block;\n  margin-bottom: 5px;\n  font-size: 14px;\n  color: #333;\n}\n\n.form-element input,\n.form-element select,\n.form-element button {\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #dcdcdc;\n}\n\n.form-element button {\n  background-color: #2ecc71;\n  color: white;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n.form-element button:hover {\n  background-color: #27ae60;\n}\n.darkmode-toggle-btn {\n  position: absolute;\n  right: 20px;\n  top: 10px;\n}\nlabel[for=\"darkmode-toggle\"] {\n  width: 80px;\n  height: 32px;\n  position: relative;\n  display: block;\n  background: #ebebeb;\n  border-radius: 200px;\n  box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),\n    inset 0px -5px 15px rgba(255, 255, 255, 0.4);\n  cursor: pointer;\n  transition: 0.5s;\n}\nlabel[for=\"darkmode-toggle\"]:after {\n  content: \"\";\n  width: 22px;\n  height: 22px;\n  position: absolute;\n  top: 6px;\n  left: 6px;\n  background: linear-gradient(180deg, #ffcc89, #d8860b);\n  border-radius: 180px;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);\n  transition: 0.5s;\n}\n\ninput[id=\"darkmode-toggle\"] {\n  width: 0;\n  height: 0;\n  visibility: hidden;\n}\ninput[id=\"darkmode-toggle\"]:checked + label {\n  background: #242424;\n}\ninput[id=\"darkmode-toggle\"]:checked + label:after {\n  left: 72px;\n  transform: translateX(-100%);\n  background: linear-gradient(180deg, #777, #3a3a3a);\n}\nlabel[for=\"darkmode-toggle\"]:active:after {\n  width: 40px;\n}\n\nbody.darkmode {\n  background-color: #212020;\n}\n.main.darkmode {\n  background-color: #3a3a3a;\n}\n.todo.darkmode {\n  background-color: #262525;\n  color: white;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/create-project.js":
/*!*******************************!*\
  !*** ./src/create-project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   checkProject: () => (/* binding */ checkProject),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   getProject: () => (/* binding */ getProject)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


class Project {
  constructor(projectTitle) {
    this.projectTitle = projectTitle;
    this.todoItems = [];
  }

  addTodoItem(todoItem) {
    this.todoItems.push(todoItem);
  }
  deleteTodoItem(todoItem) {
    let index = this.todoItems.indexOf(todoItem);
    this.todoItems.splice(index, 1);
  }
  getTodos() {
    return this.todoItems;
  }
}

function getProject(projectName) {
  let project = ___WEBPACK_IMPORTED_MODULE_0__.todoDependencies.projects.find(
    (project) => project.projectTitle == projectName
  );
  return project;
}

function checkProject(projectName) {
  return ___WEBPACK_IMPORTED_MODULE_0__.todoDependencies.projects.some(
    (project) => project.projectTitle === projectName
  );
}

function createProject(name) {
  ___WEBPACK_IMPORTED_MODULE_0__.todoDependencies.projects.push(new Project(name));
}
function deleteProject(projectName) {
  let project = ___WEBPACK_IMPORTED_MODULE_0__.todoDependencies.projects.find(
    (project) => project.projectTitle == projectName
  );
  let projectIndex = ___WEBPACK_IMPORTED_MODULE_0__.todoDependencies.projects.findIndex(
    (x) => x.projectTitle === project.projectTitle
  );
  ___WEBPACK_IMPORTED_MODULE_0__.todoDependencies.projects.splice(projectIndex, 1);
}




/***/ }),

/***/ "./src/create-todo.js":
/*!****************************!*\
  !*** ./src/create-todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo),
/* harmony export */   createTodo: () => (/* binding */ createTodo),
/* harmony export */   createTodo2: () => (/* binding */ createTodo2)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

function createTodo(
  title,
  description,
  dueDate,
  priority,
  projectToInsert = ""
) {
  const todo = new Todo(title, description, dueDate, priority);
  if (projectToInsert === "") {
    ___WEBPACK_IMPORTED_MODULE_0__.todoDependencies.defaultProject.addTodoItem(todo);
  }
  ___WEBPACK_IMPORTED_MODULE_0__.todoDependencies.projects.forEach((currentProject) => {
    if (currentProject.projectTitle === projectToInsert) {
      currentProject.addTodoItem(todo);
    }
  });
}
function createTodo2({
  title,
  description,
  dueDate,
  priority,
  projectToInsert,
}) {
  const todo = new Todo(title, description, dueDate, priority, projectToInsert);
  if (projectToInsert === "") {
    ___WEBPACK_IMPORTED_MODULE_0__.todoDependencies.defaultProject.addTodoItem(todo);
  }
  ___WEBPACK_IMPORTED_MODULE_0__.todoDependencies.projects.forEach((currentProject) => {
    if (currentProject.projectTitle === projectToInsert) {
      currentProject.addTodoItem(todo);
    }
  });
}




/***/ }),

/***/ "./src/dom-manip.js":
/*!**************************!*\
  !*** ./src/dom-manip.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectsLoad: () => (/* binding */ projectsLoad),
/* harmony export */   renderProjectTodos: () => (/* binding */ renderProjectTodos),
/* harmony export */   renderProjects: () => (/* binding */ renderProjects)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-project */ "./src/create-project.js");



function projectsLoad(projectName = "Default") {
  const projectsDiv = document.querySelector(".projects-container");
  projectsDiv.innerHTML = "";

  const heading = document.createElement("h2");
  heading.textContent = "Projects";
  projectsDiv.appendChild(heading);

  renderProjectTodos(projectName);
  renderProjects();
}

function renderProjects() {
  // create unordered list for project names
  const projectsDiv = document.querySelector(".projects-container");
  projectsDiv.innerHTML = "";
  const ul = document.createElement("ul");
  projectsDiv.appendChild(ul);

  // for each project create list element and add event listener
  ___WEBPACK_IMPORTED_MODULE_0__.todoDependencies.projects.forEach((project) => {
    const projectName = project.projectTitle;
    const listItem = document.createElement("li");
    const deleteButton = createButton();
    listItem.textContent = projectName;
    listItem.appendChild(deleteButton);
    ul.appendChild(listItem);

    listItem.addEventListener("click", () => {
      // when clicked show the project's todos and change the current project to that project
      ___WEBPACK_IMPORTED_MODULE_0__.todoDependencies.setCurrentProject(projectName);
      changeProjectHeader(projectName);
      renderProjectTodos(projectName);
    });
    deleteButton.addEventListener("click", (e) => {
      e.stopPropagation();
      (0,_create_project__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(projectName);
      renderProjects();
      renderProjectTodos(___WEBPACK_IMPORTED_MODULE_0__.todoDependencies.projects[0].projectTitle);
    });
  });
}

function changeProjectHeader(projectTitle) {
  const projectHeader = document.querySelector(".header");
  projectHeader.textContent = projectTitle;
}

function renderProjectTodos(projectName = "Default") {
  const project = (0,_create_project__WEBPACK_IMPORTED_MODULE_1__.getProject)(projectName);

  // get the project object's todo array
  const projectTodos = project.getTodos();

  changeProjectHeader(project.projectTitle);

  const todosDiv = document.querySelector(".todos");
  todosDiv.innerHTML = "";

  // for each todo in todo array, create div with todo's infos
  projectTodos.forEach((todo) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    if (darkmodeToggleButton.checked) todoDiv.classList.add("darkmode");

    const deleteButton = createButton("todo-btn delete-todo-btn");
    const doneButton = createButton("todo-btn done-todo-btn");
    const titleSpan = createSpan(todo.title);
    const dueDateSpan = createSpan(todo.dueDate);
    const prioritySpan = createSpan(todo.priority);

    todoDiv.append(
      deleteButton,
      doneButton,
      titleSpan,
      dueDateSpan,
      prioritySpan
    );
    todosDiv.appendChild(todoDiv);

    deleteButton.addEventListener("click", () => {
      project.deleteTodoItem(todo);
      renderProjectTodos(projectName);
    });
  });
}

function createButton(classes) {
  const button = document.createElement("button");
  if (classes) {
    button.className = classes;
  }
  return button;
}

function createSpan(text) {
  const span = document.createElement("span");
  span.textContent = text;
  return span;
}

const darkmodeToggleButton = document.querySelector("#darkmode-toggle");
darkmodeToggleButton.addEventListener("click", () => {
  const body = document.querySelector("body");
  const main = document.querySelector(".main");
  const todos = document.querySelectorAll(".todo");
  if (darkmodeToggleButton.checked) {
    body.classList.add("darkmode");
    main.classList.add("darkmode");
    todos.forEach((todo) => {
      todo.classList.add("darkmode");
    });
  } else {
    body.classList.remove("darkmode");
    main.classList.remove("darkmode");
    todos.forEach((todo) => {
      todo.classList.remove("darkmode");
    });
  }
});



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todoDependencies: () => (/* binding */ todoDependencies)
/* harmony export */ });
/* harmony import */ var _create_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-todo */ "./src/create-todo.js");
/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-project */ "./src/create-project.js");
/* harmony import */ var _initial_projects_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initial-projects-load */ "./src/initial-projects-load.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");





let todoDependencies = (function () {
  let defaultProject = new _create_project__WEBPACK_IMPORTED_MODULE_1__.Project("Default");
  let projects = [defaultProject];
  let currentProject = "Default";

  let setCurrentProject = function (project) {
    currentProject = project;
  };
  let getCurrentProject = function () {
    return currentProject;
  };
  return {
    projects,
    defaultProject,
    setCurrentProject,
    getCurrentProject,
  };
})();

// initialDomSetup();

// create project
(0,_create_project__WEBPACK_IMPORTED_MODULE_1__.createProject)("Grocery");
// create project
(0,_create_project__WEBPACK_IMPORTED_MODULE_1__.createProject)("School");

// create todo -> added to default project
(0,_create_todo__WEBPACK_IMPORTED_MODULE_0__.createTodo)("Juice", "Need juice", "5/20/2024", "low");

// create todo -> added to Grocery project
(0,_create_todo__WEBPACK_IMPORTED_MODULE_0__.createTodo)("Fruits", "buy fruits", "5/22/2024", "low", "Grocery");

// create todo -> added to default project
(0,_create_todo__WEBPACK_IMPORTED_MODULE_0__.createTodo)("Food", "need food", "5/23/2024", "high");
(0,_create_todo__WEBPACK_IMPORTED_MODULE_0__.createTodo)("Food2", "need food", "5/23/2024", "high");
(0,_create_todo__WEBPACK_IMPORTED_MODULE_0__.createTodo)("Food3", "need food", "5/23/2024", "high");

(0,_create_todo__WEBPACK_IMPORTED_MODULE_0__.createTodo2)({
  title: "Food4",
  description: "need food",
  dueDate: "5/23/2024",
  priority: "high",
  projectToInsert: "",
});
(0,_create_todo__WEBPACK_IMPORTED_MODULE_0__.createTodo2)({
  title: "Food5",
  description: "need food",
  dueDate: "5/23/2024",
  priority: "high",
  projectToInsert: "Grocery",
});

(0,_initial_projects_load__WEBPACK_IMPORTED_MODULE_2__.initializeDom)();




/***/ }),

/***/ "./src/initial-projects-load.js":
/*!**************************************!*\
  !*** ./src/initial-projects-load.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeDom: () => (/* binding */ initializeDom)
/* harmony export */ });
/* harmony import */ var _dom_manip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manip */ "./src/dom-manip.js");
/* harmony import */ var _manage_popups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-popups */ "./src/manage-popups.js");



function initializeDom() {
  (0,_dom_manip__WEBPACK_IMPORTED_MODULE_0__.projectsLoad)();
  (0,_manage_popups__WEBPACK_IMPORTED_MODULE_1__.manageProjectPopup)();
  (0,_manage_popups__WEBPACK_IMPORTED_MODULE_1__.manageTodoPopup)();
}




/***/ }),

/***/ "./src/manage-popups.js":
/*!******************************!*\
  !*** ./src/manage-popups.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   manageProjectPopup: () => (/* binding */ manageProjectPopup),
/* harmony export */   manageTodoPopup: () => (/* binding */ manageTodoPopup)
/* harmony export */ });
/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-project */ "./src/create-project.js");
/* harmony import */ var _create_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-todo */ "./src/create-todo.js");
/* harmony import */ var _dom_manip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-manip */ "./src/dom-manip.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/index.js");





// Create Project Popup

const projectPopupElements = {
  createBtn: document.querySelector(".create-project-btn"),
  closeBtn: document.querySelector(".create-project-popup .close-btn"),
  doneBtn: document.querySelector("#done-btn"),
  popup: document.querySelector(".create-project-popup"),
  projectNameInput: document.querySelector("#project-name"),
};

function togglePopup(popup, action) {
  popup.classList[action]("active");
}

function resetProjectForm() {
  projectPopupElements.projectNameInput.value = "";
}

function manageProjectPopup() {
  projectPopupElements.createBtn.addEventListener("click", () => {
    resetProjectForm();
    togglePopup(projectPopupElements.popup, "add");
  });
  projectPopupElements.closeBtn.addEventListener("click", () =>
    togglePopup(projectPopupElements.popup, "remove")
  );
  projectPopupElements.doneBtn.addEventListener("click", () => {
    const projectName = projectPopupElements.projectNameInput.value;
    if (projectName !== "" && !(0,_create_project__WEBPACK_IMPORTED_MODULE_0__.checkProject)(projectName)) {
      (0,_create_project__WEBPACK_IMPORTED_MODULE_0__.createProject)(projectName);
      ___WEBPACK_IMPORTED_MODULE_3__.todoDependencies.setCurrentProject(projectName);
      (0,_dom_manip__WEBPACK_IMPORTED_MODULE_2__.projectsLoad)(___WEBPACK_IMPORTED_MODULE_3__.todoDependencies.getCurrentProject());
    }
    togglePopup(projectPopupElements.popup, "remove");
  });
}

// Create Todo Popup

const todoPopupElements = {
  createBtn: document.querySelector("#create-todo-btn"),
  closeBtn: document.querySelector(".create-todo-popup .close-btn"),
  doneBtn: document.querySelector("#todo-done-btn"),
  popup: document.querySelector(".create-todo-popup"),
  nameInput: document.querySelector("#todo-name"),
  descriptionInput: document.querySelector("#todo-description"),
  dueDateInput: document.querySelector("#due-date"),
  priorityInput: document.querySelector("#priority"),
};

function resetTodoForm() {
  todoPopupElements.nameInput.value = "";
  todoPopupElements.descriptionInput.value = "";
  todoPopupElements.dueDateInput.value = "";
  todoPopupElements.priorityInput.value = "";
}

function manageTodoPopup() {
  todoPopupElements.createBtn.addEventListener("click", () => {
    resetTodoForm();
    togglePopup(todoPopupElements.popup, "add");
  });
  todoPopupElements.closeBtn.addEventListener("click", () =>
    togglePopup(todoPopupElements.popup, "remove")
  );
  todoPopupElements.doneBtn.addEventListener("click", () => {
    const todoDetails = {
      name: todoPopupElements.nameInput.value,
      description: todoPopupElements.descriptionInput.value,
      dueDate: todoPopupElements.dueDateInput.value,
      priority: todoPopupElements.priorityInput.value,
    };

    (0,_create_todo__WEBPACK_IMPORTED_MODULE_1__.createTodo)(
      todoDetails.name,
      todoDetails.description,
      todoDetails.dueDate,
      todoDetails.priority,
      ___WEBPACK_IMPORTED_MODULE_3__.todoDependencies.getCurrentProject()
    );

    (0,_dom_manip__WEBPACK_IMPORTED_MODULE_2__.renderProjectTodos)(___WEBPACK_IMPORTED_MODULE_3__.todoDependencies.getCurrentProject());
    togglePopup(todoPopupElements.popup, "remove");
  });
}




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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdGQUF3RixNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLE1BQU0sc0JBQXNCLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUs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QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSx3REFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrQ0FBZ0I7QUFDdEI7O0FBRUEsSUFBSSw4REFBa0IsQ0FBQywrQ0FBZ0I7QUFDdkM7QUFDQSxHQUFHO0FBQ0g7O0FBRStDOzs7Ozs7O1VDM0YvQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGUtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlLXRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS1tYW5pcC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luaXRpYWwtcHJvamVjdHMtbG9hZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWFuYWdlLXBvcHVwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEdlbmVyYWwgU3R5bGVzICovXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiVmVyZGFuYVwiLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjlmYztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4vKiBDb250ZW50IExheW91dCAqL1xuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgaGVpZ2h0OiA5MCU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIFNpZGViYXIgKi9cbi5zaWRlYmFyIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBwYWRkaW5nOiAyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyZW07XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi51c2VyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvamVjdHMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9qZWN0cy1jb250YWluZXIgaDEge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbi5wcm9qZWN0cy1jb250YWluZXIgdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvamVjdHMtY29udGFpbmVyIGxpIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiA0cHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9qZWN0cy1jb250YWluZXIgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG4ucHJvamVjdHMtY29udGFpbmVyIGxpIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbn1cbi5wcm9qZWN0cy1jb250YWluZXIgbGkgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYjtcbn1cblxuLmJ0biB7XG4gIGFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlY2M3MTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbn1cblxuLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyN2FlNjA7XG59XG5cbi8qIE1haW4gQ29udGVudCAqL1xuLm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgY29sb3I6ICMzNDk4ZGI7XG59XG5cbi50b2RvcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFlbTtcbn1cblxuLnRvZG8ge1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAxZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIDFmciBhdXRvIGF1dG87XG4gIGdhcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnRvZG8tYnRuIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRlbGV0ZS10b2RvLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRlbGV0ZS10b2RvLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMDM5MmI7XG59XG5cbi5kb25lLXRvZG8tYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlY2M3MTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZG9uZS10b2RvLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyN2FlNjA7XG59XG5cbi5jcmVhdGUtdG9kby1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMzFweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5jcmVhdGUtdG9kby1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MGI5O1xufVxuXG4vKiBQb3B1cHMgKi9cbi5jcmVhdGUtcHJvamVjdC1wb3B1cCxcbi5jcmVhdGUtdG9kby1wb3B1cCB7XG4gIGRpc3BsYXk6IG5vbmU7IC8qIEluaXRpYWxseSBoaWRkZW4gKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB6LWluZGV4OiAxMDtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLmNyZWF0ZS1wcm9qZWN0LXBvcHVwLmFjdGl2ZSxcbi5jcmVhdGUtdG9kby1wb3B1cC5hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNsb3NlLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjODg4O1xufVxuXG4uZm9ybSBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzM0OThkYjtcbn1cblxuLmZvcm0tZWxlbWVudCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5mb3JtLWVsZW1lbnQgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uZm9ybS1lbGVtZW50IGlucHV0LFxuLmZvcm0tZWxlbWVudCBzZWxlY3QsXG4uZm9ybS1lbGVtZW50IGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2RjZGM7XG59XG5cbi5mb3JtLWVsZW1lbnQgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlY2M3MTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZm9ybS1lbGVtZW50IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyN2FlNjA7XG59XG4uZGFya21vZGUtdG9nZ2xlLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMTBweDtcbn1cbmxhYmVsW2Zvcj1cImRhcmttb2RlLXRvZ2dsZVwiXSB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XG4gIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjQpLFxuICAgIGluc2V0IDBweCAtNXB4IDE1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5sYWJlbFtmb3I9XCJkYXJrbW9kZS10b2dnbGVcIl06YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNnB4O1xuICBsZWZ0OiA2cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmNjODksICNkODg2MGIpO1xuICBib3JkZXItcmFkaXVzOiAxODBweDtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuaW5wdXRbaWQ9XCJkYXJrbW9kZS10b2dnbGVcIl0ge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5pbnB1dFtpZD1cImRhcmttb2RlLXRvZ2dsZVwiXTpjaGVja2VkICsgbGFiZWwge1xuICBiYWNrZ3JvdW5kOiAjMjQyNDI0O1xufVxuaW5wdXRbaWQ9XCJkYXJrbW9kZS10b2dnbGVcIl06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgbGVmdDogNzJweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzc3NywgIzNhM2EzYSk7XG59XG5sYWJlbFtmb3I9XCJkYXJrbW9kZS10b2dnbGVcIl06YWN0aXZlOmFmdGVyIHtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbmJvZHkuZGFya21vZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMDIwO1xufVxuLm1haW4uZGFya21vZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2EzYTNhO1xufVxuLnRvZG8uZGFya21vZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNTI1O1xuICBjb2xvcjogd2hpdGU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1CQUFtQjtBQUNuQjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0RBQWtEO0VBQ2xELGFBQWE7RUFDYix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsd0NBQXdDO0VBQ3hDLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUEsWUFBWTtBQUNaO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsU0FBUztFQUNULHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysd0NBQXdDO0VBQ3hDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSxXQUFXO0FBQ1g7O0VBRUUsYUFBYSxFQUFFLHFCQUFxQjtFQUNwQyxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7OztFQUdFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7QUFDWDtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEI7Z0RBQzhDO0VBQzlDLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULHFEQUFxRDtFQUNyRCxvQkFBb0I7RUFDcEIsMkNBQTJDO0VBQzNDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFVBQVU7RUFDViw0QkFBNEI7RUFDNUIsa0RBQWtEO0FBQ3BEO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHZW5lcmFsIFN0eWxlcyAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJWZXJkYW5hXFxcIiwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjlmYztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogIzMzMztcXG59XFxuXFxuLyogQ29udGVudCBMYXlvdXQgKi9cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIGhlaWdodDogOTAlO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiBTaWRlYmFyICovXFxuLnNpZGViYXIge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgcGFkZGluZzogMmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMmVtO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnVzZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIgdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyIGxpIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDRweCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG59XFxuLnByb2plY3RzLWNvbnRhaW5lciBsaSBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbn1cXG4ucHJvamVjdHMtY29udGFpbmVyIGxpIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAzOTJiO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZWNjNzE7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3YWU2MDtcXG59XFxuXFxuLyogTWFpbiBDb250ZW50ICovXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgY29sb3I6ICMzNDk4ZGI7XFxufVxcblxcbi50b2RvcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMWVtO1xcbn1cXG5cXG4udG9kbyB7XFxuICB3aWR0aDogODAlO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIDFmciBhdXRvIGF1dG87XFxuICBnYXA6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYxO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi50b2RvLWJ0biB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVsZXRlLXRvZG8tYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5kZWxldGUtdG9kby1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYjtcXG59XFxuXFxuLmRvbmUtdG9kby1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlY2M3MTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmRvbmUtdG9kby1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3YWU2MDtcXG59XFxuXFxuLmNyZWF0ZS10b2RvLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMjBweDtcXG4gIGJvdHRvbTogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDMxcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICB3aWR0aDogNjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbn1cXG5cXG4uY3JlYXRlLXRvZG8tYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7XFxufVxcblxcbi8qIFBvcHVwcyAqL1xcbi5jcmVhdGUtcHJvamVjdC1wb3B1cCxcXG4uY3JlYXRlLXRvZG8tcG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTsgLyogSW5pdGlhbGx5IGhpZGRlbiAqL1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxufVxcblxcbi5jcmVhdGUtcHJvamVjdC1wb3B1cC5hY3RpdmUsXFxuLmNyZWF0ZS10b2RvLXBvcHVwLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmNsb3NlLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwcHg7XFxuICByaWdodDogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGNvbG9yOiAjODg4O1xcbn1cXG5cXG4uZm9ybSBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6ICMzNDk4ZGI7XFxufVxcblxcbi5mb3JtLWVsZW1lbnQge1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLmZvcm0tZWxlbWVudCBsYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG4uZm9ybS1lbGVtZW50IGlucHV0LFxcbi5mb3JtLWVsZW1lbnQgc2VsZWN0LFxcbi5mb3JtLWVsZW1lbnQgYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2RjZGM7XFxufVxcblxcbi5mb3JtLWVsZW1lbnQgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZWNjNzE7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5mb3JtLWVsZW1lbnQgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyN2FlNjA7XFxufVxcbi5kYXJrbW9kZS10b2dnbGUtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgdG9wOiAxMHB4O1xcbn1cXG5sYWJlbFtmb3I9XFxcImRhcmttb2RlLXRvZ2dsZVxcXCJdIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xcbiAgYm9yZGVyLXJhZGl1czogMjAwcHg7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjQpLFxcbiAgICBpbnNldCAwcHggLTVweCAxNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxufVxcbmxhYmVsW2Zvcj1cXFwiZGFya21vZGUtdG9nZ2xlXFxcIl06YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMjJweDtcXG4gIGhlaWdodDogMjJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNnB4O1xcbiAgbGVmdDogNnB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmY2M4OSwgI2Q4ODYwYik7XFxuICBib3JkZXItcmFkaXVzOiAxODBweDtcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG5pbnB1dFtpZD1cXFwiZGFya21vZGUtdG9nZ2xlXFxcIl0ge1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbmlucHV0W2lkPVxcXCJkYXJrbW9kZS10b2dnbGVcXFwiXTpjaGVja2VkICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZDogIzI0MjQyNDtcXG59XFxuaW5wdXRbaWQ9XFxcImRhcmttb2RlLXRvZ2dsZVxcXCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XFxuICBsZWZ0OiA3MnB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM3NzcsICMzYTNhM2EpO1xcbn1cXG5sYWJlbFtmb3I9XFxcImRhcmttb2RlLXRvZ2dsZVxcXCJdOmFjdGl2ZTphZnRlciB7XFxuICB3aWR0aDogNDBweDtcXG59XFxuXFxuYm9keS5kYXJrbW9kZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMDIwO1xcbn1cXG4ubWFpbi5kYXJrbW9kZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2EzYTNhO1xcbn1cXG4udG9kby5kYXJrbW9kZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNTI1O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgdG9kb0RlcGVuZGVuY2llcyB9IGZyb20gXCIuXCI7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0VGl0bGUpIHtcbiAgICB0aGlzLnByb2plY3RUaXRsZSA9IHByb2plY3RUaXRsZTtcbiAgICB0aGlzLnRvZG9JdGVtcyA9IFtdO1xuICB9XG5cbiAgYWRkVG9kb0l0ZW0odG9kb0l0ZW0pIHtcbiAgICB0aGlzLnRvZG9JdGVtcy5wdXNoKHRvZG9JdGVtKTtcbiAgfVxuICBkZWxldGVUb2RvSXRlbSh0b2RvSXRlbSkge1xuICAgIGxldCBpbmRleCA9IHRoaXMudG9kb0l0ZW1zLmluZGV4T2YodG9kb0l0ZW0pO1xuICAgIHRoaXMudG9kb0l0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbiAgZ2V0VG9kb3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9kb0l0ZW1zO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgbGV0IHByb2plY3QgPSB0b2RvRGVwZW5kZW5jaWVzLnByb2plY3RzLmZpbmQoXG4gICAgKHByb2plY3QpID0+IHByb2plY3QucHJvamVjdFRpdGxlID09IHByb2plY3ROYW1lXG4gICk7XG4gIHJldHVybiBwcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBjaGVja1Byb2plY3QocHJvamVjdE5hbWUpIHtcbiAgcmV0dXJuIHRvZG9EZXBlbmRlbmNpZXMucHJvamVjdHMuc29tZShcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5wcm9qZWN0VGl0bGUgPT09IHByb2plY3ROYW1lXG4gICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSkge1xuICB0b2RvRGVwZW5kZW5jaWVzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QobmFtZSkpO1xufVxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICBsZXQgcHJvamVjdCA9IHRvZG9EZXBlbmRlbmNpZXMucHJvamVjdHMuZmluZChcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5wcm9qZWN0VGl0bGUgPT0gcHJvamVjdE5hbWVcbiAgKTtcbiAgbGV0IHByb2plY3RJbmRleCA9IHRvZG9EZXBlbmRlbmNpZXMucHJvamVjdHMuZmluZEluZGV4KFxuICAgICh4KSA9PiB4LnByb2plY3RUaXRsZSA9PT0gcHJvamVjdC5wcm9qZWN0VGl0bGVcbiAgKTtcbiAgdG9kb0RlcGVuZGVuY2llcy5wcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbn1cblxuZXhwb3J0IHsgUHJvamVjdCwgY3JlYXRlUHJvamVjdCwgZ2V0UHJvamVjdCwgY2hlY2tQcm9qZWN0LCBkZWxldGVQcm9qZWN0IH07XG4iLCJpbXBvcnQgeyB0b2RvRGVwZW5kZW5jaWVzIH0gZnJvbSBcIi5cIjtcblxuY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG8oXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgcHJpb3JpdHksXG4gIHByb2plY3RUb0luc2VydCA9IFwiXCJcbikge1xuICBjb25zdCB0b2RvID0gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gIGlmIChwcm9qZWN0VG9JbnNlcnQgPT09IFwiXCIpIHtcbiAgICB0b2RvRGVwZW5kZW5jaWVzLmRlZmF1bHRQcm9qZWN0LmFkZFRvZG9JdGVtKHRvZG8pO1xuICB9XG4gIHRvZG9EZXBlbmRlbmNpZXMucHJvamVjdHMuZm9yRWFjaCgoY3VycmVudFByb2plY3QpID0+IHtcbiAgICBpZiAoY3VycmVudFByb2plY3QucHJvamVjdFRpdGxlID09PSBwcm9qZWN0VG9JbnNlcnQpIHtcbiAgICAgIGN1cnJlbnRQcm9qZWN0LmFkZFRvZG9JdGVtKHRvZG8pO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVUb2RvMih7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgcHJpb3JpdHksXG4gIHByb2plY3RUb0luc2VydCxcbn0pIHtcbiAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3RUb0luc2VydCk7XG4gIGlmIChwcm9qZWN0VG9JbnNlcnQgPT09IFwiXCIpIHtcbiAgICB0b2RvRGVwZW5kZW5jaWVzLmRlZmF1bHRQcm9qZWN0LmFkZFRvZG9JdGVtKHRvZG8pO1xuICB9XG4gIHRvZG9EZXBlbmRlbmNpZXMucHJvamVjdHMuZm9yRWFjaCgoY3VycmVudFByb2plY3QpID0+IHtcbiAgICBpZiAoY3VycmVudFByb2plY3QucHJvamVjdFRpdGxlID09PSBwcm9qZWN0VG9JbnNlcnQpIHtcbiAgICAgIGN1cnJlbnRQcm9qZWN0LmFkZFRvZG9JdGVtKHRvZG8pO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB7IFRvZG8sIGNyZWF0ZVRvZG8sIGNyZWF0ZVRvZG8yIH07XG4iLCJpbXBvcnQgeyB0b2RvRGVwZW5kZW5jaWVzIH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IGdldFByb2plY3QsIGRlbGV0ZVByb2plY3QgfSBmcm9tIFwiLi9jcmVhdGUtcHJvamVjdFwiO1xuXG5mdW5jdGlvbiBwcm9qZWN0c0xvYWQocHJvamVjdE5hbWUgPSBcIkRlZmF1bHRcIikge1xuICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29udGFpbmVyXCIpO1xuICBwcm9qZWN0c0Rpdi5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gIHJlbmRlclByb2plY3RUb2Rvcyhwcm9qZWN0TmFtZSk7XG4gIHJlbmRlclByb2plY3RzKCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCkge1xuICAvLyBjcmVhdGUgdW5vcmRlcmVkIGxpc3QgZm9yIHByb2plY3QgbmFtZXNcbiAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWNvbnRhaW5lclwiKTtcbiAgcHJvamVjdHNEaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHVsKTtcblxuICAvLyBmb3IgZWFjaCBwcm9qZWN0IGNyZWF0ZSBsaXN0IGVsZW1lbnQgYW5kIGFkZCBldmVudCBsaXN0ZW5lclxuICB0b2RvRGVwZW5kZW5jaWVzLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3QucHJvamVjdFRpdGxlO1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbigpO1xuICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG5cbiAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy8gd2hlbiBjbGlja2VkIHNob3cgdGhlIHByb2plY3QncyB0b2RvcyBhbmQgY2hhbmdlIHRoZSBjdXJyZW50IHByb2plY3QgdG8gdGhhdCBwcm9qZWN0XG4gICAgICB0b2RvRGVwZW5kZW5jaWVzLnNldEN1cnJlbnRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgIGNoYW5nZVByb2plY3RIZWFkZXIocHJvamVjdE5hbWUpO1xuICAgICAgcmVuZGVyUHJvamVjdFRvZG9zKHByb2plY3ROYW1lKTtcbiAgICB9KTtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgICAgcmVuZGVyUHJvamVjdFRvZG9zKHRvZG9EZXBlbmRlbmNpZXMucHJvamVjdHNbMF0ucHJvamVjdFRpdGxlKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVByb2plY3RIZWFkZXIocHJvamVjdFRpdGxlKSB7XG4gIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcbiAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFRvZG9zKHByb2plY3ROYW1lID0gXCJEZWZhdWx0XCIpIHtcbiAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QocHJvamVjdE5hbWUpO1xuXG4gIC8vIGdldCB0aGUgcHJvamVjdCBvYmplY3QncyB0b2RvIGFycmF5XG4gIGNvbnN0IHByb2plY3RUb2RvcyA9IHByb2plY3QuZ2V0VG9kb3MoKTtcblxuICBjaGFuZ2VQcm9qZWN0SGVhZGVyKHByb2plY3QucHJvamVjdFRpdGxlKTtcblxuICBjb25zdCB0b2Rvc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3NcIik7XG4gIHRvZG9zRGl2LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgLy8gZm9yIGVhY2ggdG9kbyBpbiB0b2RvIGFycmF5LCBjcmVhdGUgZGl2IHdpdGggdG9kbydzIGluZm9zXG4gIHByb2plY3RUb2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcbiAgICBpZiAoZGFya21vZGVUb2dnbGVCdXR0b24uY2hlY2tlZCkgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwiZGFya21vZGVcIik7XG5cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBjcmVhdGVCdXR0b24oXCJ0b2RvLWJ0biBkZWxldGUtdG9kby1idG5cIik7XG4gICAgY29uc3QgZG9uZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihcInRvZG8tYnRuIGRvbmUtdG9kby1idG5cIik7XG4gICAgY29uc3QgdGl0bGVTcGFuID0gY3JlYXRlU3Bhbih0b2RvLnRpdGxlKTtcbiAgICBjb25zdCBkdWVEYXRlU3BhbiA9IGNyZWF0ZVNwYW4odG9kby5kdWVEYXRlKTtcbiAgICBjb25zdCBwcmlvcml0eVNwYW4gPSBjcmVhdGVTcGFuKHRvZG8ucHJpb3JpdHkpO1xuXG4gICAgdG9kb0Rpdi5hcHBlbmQoXG4gICAgICBkZWxldGVCdXR0b24sXG4gICAgICBkb25lQnV0dG9uLFxuICAgICAgdGl0bGVTcGFuLFxuICAgICAgZHVlRGF0ZVNwYW4sXG4gICAgICBwcmlvcml0eVNwYW5cbiAgICApO1xuICAgIHRvZG9zRGl2LmFwcGVuZENoaWxkKHRvZG9EaXYpO1xuXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBwcm9qZWN0LmRlbGV0ZVRvZG9JdGVtKHRvZG8pO1xuICAgICAgcmVuZGVyUHJvamVjdFRvZG9zKHByb2plY3ROYW1lKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihjbGFzc2VzKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGlmIChjbGFzc2VzKSB7XG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9IGNsYXNzZXM7XG4gIH1cbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3Bhbih0ZXh0KSB7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBzcGFuO1xufVxuXG5jb25zdCBkYXJrbW9kZVRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGFya21vZGUtdG9nZ2xlXCIpO1xuZGFya21vZGVUb2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kb1wiKTtcbiAgaWYgKGRhcmttb2RlVG9nZ2xlQnV0dG9uLmNoZWNrZWQpIHtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJkYXJrbW9kZVwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJkYXJrbW9kZVwiKTtcbiAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoXCJkYXJrbW9kZVwiKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrbW9kZVwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrbW9kZVwiKTtcbiAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICB0b2RvLmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrbW9kZVwiKTtcbiAgICB9KTtcbiAgfVxufSk7XG5leHBvcnQgeyByZW5kZXJQcm9qZWN0cywgcmVuZGVyUHJvamVjdFRvZG9zLCBwcm9qZWN0c0xvYWQgfTtcbiIsImltcG9ydCB7IGNyZWF0ZVRvZG8sIGNyZWF0ZVRvZG8yIH0gZnJvbSBcIi4vY3JlYXRlLXRvZG9cIjtcbmltcG9ydCB7IFByb2plY3QsIGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9jcmVhdGUtcHJvamVjdFwiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZURvbSB9IGZyb20gXCIuL2luaXRpYWwtcHJvamVjdHMtbG9hZFwiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbmxldCB0b2RvRGVwZW5kZW5jaWVzID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJEZWZhdWx0XCIpO1xuICBsZXQgcHJvamVjdHMgPSBbZGVmYXVsdFByb2plY3RdO1xuICBsZXQgY3VycmVudFByb2plY3QgPSBcIkRlZmF1bHRcIjtcblxuICBsZXQgc2V0Q3VycmVudFByb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgfTtcbiAgbGV0IGdldEN1cnJlbnRQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjdXJyZW50UHJvamVjdDtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0cyxcbiAgICBkZWZhdWx0UHJvamVjdCxcbiAgICBzZXRDdXJyZW50UHJvamVjdCxcbiAgICBnZXRDdXJyZW50UHJvamVjdCxcbiAgfTtcbn0pKCk7XG5cbi8vIGluaXRpYWxEb21TZXR1cCgpO1xuXG4vLyBjcmVhdGUgcHJvamVjdFxuY3JlYXRlUHJvamVjdChcIkdyb2NlcnlcIik7XG4vLyBjcmVhdGUgcHJvamVjdFxuY3JlYXRlUHJvamVjdChcIlNjaG9vbFwiKTtcblxuLy8gY3JlYXRlIHRvZG8gLT4gYWRkZWQgdG8gZGVmYXVsdCBwcm9qZWN0XG5jcmVhdGVUb2RvKFwiSnVpY2VcIiwgXCJOZWVkIGp1aWNlXCIsIFwiNS8yMC8yMDI0XCIsIFwibG93XCIpO1xuXG4vLyBjcmVhdGUgdG9kbyAtPiBhZGRlZCB0byBHcm9jZXJ5IHByb2plY3RcbmNyZWF0ZVRvZG8oXCJGcnVpdHNcIiwgXCJidXkgZnJ1aXRzXCIsIFwiNS8yMi8yMDI0XCIsIFwibG93XCIsIFwiR3JvY2VyeVwiKTtcblxuLy8gY3JlYXRlIHRvZG8gLT4gYWRkZWQgdG8gZGVmYXVsdCBwcm9qZWN0XG5jcmVhdGVUb2RvKFwiRm9vZFwiLCBcIm5lZWQgZm9vZFwiLCBcIjUvMjMvMjAyNFwiLCBcImhpZ2hcIik7XG5jcmVhdGVUb2RvKFwiRm9vZDJcIiwgXCJuZWVkIGZvb2RcIiwgXCI1LzIzLzIwMjRcIiwgXCJoaWdoXCIpO1xuY3JlYXRlVG9kbyhcIkZvb2QzXCIsIFwibmVlZCBmb29kXCIsIFwiNS8yMy8yMDI0XCIsIFwiaGlnaFwiKTtcblxuY3JlYXRlVG9kbzIoe1xuICB0aXRsZTogXCJGb29kNFwiLFxuICBkZXNjcmlwdGlvbjogXCJuZWVkIGZvb2RcIixcbiAgZHVlRGF0ZTogXCI1LzIzLzIwMjRcIixcbiAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICBwcm9qZWN0VG9JbnNlcnQ6IFwiXCIsXG59KTtcbmNyZWF0ZVRvZG8yKHtcbiAgdGl0bGU6IFwiRm9vZDVcIixcbiAgZGVzY3JpcHRpb246IFwibmVlZCBmb29kXCIsXG4gIGR1ZURhdGU6IFwiNS8yMy8yMDI0XCIsXG4gIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgcHJvamVjdFRvSW5zZXJ0OiBcIkdyb2NlcnlcIixcbn0pO1xuXG5pbml0aWFsaXplRG9tKCk7XG5cbmV4cG9ydCB7IHRvZG9EZXBlbmRlbmNpZXMgfTtcbiIsImltcG9ydCB7IHByb2plY3RzTG9hZCB9IGZyb20gXCIuL2RvbS1tYW5pcFwiO1xuaW1wb3J0IHsgbWFuYWdlUHJvamVjdFBvcHVwLCBtYW5hZ2VUb2RvUG9wdXAgfSBmcm9tIFwiLi9tYW5hZ2UtcG9wdXBzXCI7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVEb20oKSB7XG4gIHByb2plY3RzTG9hZCgpO1xuICBtYW5hZ2VQcm9qZWN0UG9wdXAoKTtcbiAgbWFuYWdlVG9kb1BvcHVwKCk7XG59XG5cbmV4cG9ydCB7IGluaXRpYWxpemVEb20gfTtcbiIsImltcG9ydCB7IGNyZWF0ZVByb2plY3QsIGNoZWNrUHJvamVjdCB9IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSBcIi4vY3JlYXRlLXRvZG9cIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RUb2RvcywgcHJvamVjdHNMb2FkIH0gZnJvbSBcIi4vZG9tLW1hbmlwXCI7XG5pbXBvcnQgeyB0b2RvRGVwZW5kZW5jaWVzIH0gZnJvbSBcIi5cIjtcblxuLy8gQ3JlYXRlIFByb2plY3QgUG9wdXBcblxuY29uc3QgcHJvamVjdFBvcHVwRWxlbWVudHMgPSB7XG4gIGNyZWF0ZUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtcHJvamVjdC1idG5cIiksXG4gIGNsb3NlQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS1wcm9qZWN0LXBvcHVwIC5jbG9zZS1idG5cIiksXG4gIGRvbmVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZG9uZS1idG5cIiksXG4gIHBvcHVwOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS1wcm9qZWN0LXBvcHVwXCIpLFxuICBwcm9qZWN0TmFtZUlucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbmFtZVwiKSxcbn07XG5cbmZ1bmN0aW9uIHRvZ2dsZVBvcHVwKHBvcHVwLCBhY3Rpb24pIHtcbiAgcG9wdXAuY2xhc3NMaXN0W2FjdGlvbl0oXCJhY3RpdmVcIik7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UHJvamVjdEZvcm0oKSB7XG4gIHByb2plY3RQb3B1cEVsZW1lbnRzLnByb2plY3ROYW1lSW5wdXQudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBtYW5hZ2VQcm9qZWN0UG9wdXAoKSB7XG4gIHByb2plY3RQb3B1cEVsZW1lbnRzLmNyZWF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlc2V0UHJvamVjdEZvcm0oKTtcbiAgICB0b2dnbGVQb3B1cChwcm9qZWN0UG9wdXBFbGVtZW50cy5wb3B1cCwgXCJhZGRcIik7XG4gIH0pO1xuICBwcm9qZWN0UG9wdXBFbGVtZW50cy5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICB0b2dnbGVQb3B1cChwcm9qZWN0UG9wdXBFbGVtZW50cy5wb3B1cCwgXCJyZW1vdmVcIilcbiAgKTtcbiAgcHJvamVjdFBvcHVwRWxlbWVudHMuZG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdFBvcHVwRWxlbWVudHMucHJvamVjdE5hbWVJbnB1dC52YWx1ZTtcbiAgICBpZiAocHJvamVjdE5hbWUgIT09IFwiXCIgJiYgIWNoZWNrUHJvamVjdChwcm9qZWN0TmFtZSkpIHtcbiAgICAgIGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgdG9kb0RlcGVuZGVuY2llcy5zZXRDdXJyZW50UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICBwcm9qZWN0c0xvYWQodG9kb0RlcGVuZGVuY2llcy5nZXRDdXJyZW50UHJvamVjdCgpKTtcbiAgICB9XG4gICAgdG9nZ2xlUG9wdXAocHJvamVjdFBvcHVwRWxlbWVudHMucG9wdXAsIFwicmVtb3ZlXCIpO1xuICB9KTtcbn1cblxuLy8gQ3JlYXRlIFRvZG8gUG9wdXBcblxuY29uc3QgdG9kb1BvcHVwRWxlbWVudHMgPSB7XG4gIGNyZWF0ZUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGUtdG9kby1idG5cIiksXG4gIGNsb3NlQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS10b2RvLXBvcHVwIC5jbG9zZS1idG5cIiksXG4gIGRvbmVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kb25lLWJ0blwiKSxcbiAgcG9wdXA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXRvZG8tcG9wdXBcIiksXG4gIG5hbWVJbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLW5hbWVcIiksXG4gIGRlc2NyaXB0aW9uSW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kZXNjcmlwdGlvblwiKSxcbiAgZHVlRGF0ZUlucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZS1kYXRlXCIpLFxuICBwcmlvcml0eUlucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpLFxufTtcblxuZnVuY3Rpb24gcmVzZXRUb2RvRm9ybSgpIHtcbiAgdG9kb1BvcHVwRWxlbWVudHMubmFtZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgdG9kb1BvcHVwRWxlbWVudHMuZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IFwiXCI7XG4gIHRvZG9Qb3B1cEVsZW1lbnRzLmR1ZURhdGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIHRvZG9Qb3B1cEVsZW1lbnRzLnByaW9yaXR5SW5wdXQudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBtYW5hZ2VUb2RvUG9wdXAoKSB7XG4gIHRvZG9Qb3B1cEVsZW1lbnRzLmNyZWF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlc2V0VG9kb0Zvcm0oKTtcbiAgICB0b2dnbGVQb3B1cCh0b2RvUG9wdXBFbGVtZW50cy5wb3B1cCwgXCJhZGRcIik7XG4gIH0pO1xuICB0b2RvUG9wdXBFbGVtZW50cy5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICB0b2dnbGVQb3B1cCh0b2RvUG9wdXBFbGVtZW50cy5wb3B1cCwgXCJyZW1vdmVcIilcbiAgKTtcbiAgdG9kb1BvcHVwRWxlbWVudHMuZG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9EZXRhaWxzID0ge1xuICAgICAgbmFtZTogdG9kb1BvcHVwRWxlbWVudHMubmFtZUlucHV0LnZhbHVlLFxuICAgICAgZGVzY3JpcHRpb246IHRvZG9Qb3B1cEVsZW1lbnRzLmRlc2NyaXB0aW9uSW5wdXQudmFsdWUsXG4gICAgICBkdWVEYXRlOiB0b2RvUG9wdXBFbGVtZW50cy5kdWVEYXRlSW5wdXQudmFsdWUsXG4gICAgICBwcmlvcml0eTogdG9kb1BvcHVwRWxlbWVudHMucHJpb3JpdHlJbnB1dC52YWx1ZSxcbiAgICB9O1xuXG4gICAgY3JlYXRlVG9kbyhcbiAgICAgIHRvZG9EZXRhaWxzLm5hbWUsXG4gICAgICB0b2RvRGV0YWlscy5kZXNjcmlwdGlvbixcbiAgICAgIHRvZG9EZXRhaWxzLmR1ZURhdGUsXG4gICAgICB0b2RvRGV0YWlscy5wcmlvcml0eSxcbiAgICAgIHRvZG9EZXBlbmRlbmNpZXMuZ2V0Q3VycmVudFByb2plY3QoKVxuICAgICk7XG5cbiAgICByZW5kZXJQcm9qZWN0VG9kb3ModG9kb0RlcGVuZGVuY2llcy5nZXRDdXJyZW50UHJvamVjdCgpKTtcbiAgICB0b2dnbGVQb3B1cCh0b2RvUG9wdXBFbGVtZW50cy5wb3B1cCwgXCJyZW1vdmVcIik7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBtYW5hZ2VQcm9qZWN0UG9wdXAsIG1hbmFnZVRvZG9Qb3B1cCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=