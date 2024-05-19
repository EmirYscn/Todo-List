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
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  height: 100vh;
}
.content {
  display: grid;
  grid-template-columns: auto 1fr;
}
ul {
  list-style-type: none;
}
.sidebar {
  width: 300px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4em;
  background-color: #1899d6;
  height: 100vh;
}
.user {
  text-align: center;
  color: white;
}
.projects-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  font-size: 1.2em;
  color: white;
}
ul li {
  margin: 4px;
}

.btn {
  appearance: button;
  background-color: #1899d6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 13px 19px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter 0.2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}

.btn:after {
  background-clip: padding-box;
  background-color: #1cb0f6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  bottom: -4px;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}

.btn:main,
.btn:focus {
  user-select: auto;
}

.btn:hover:not(:disabled) {
  filter: brightness(1.1);
}

.btn:disabled {
  cursor: auto;
}

.btn:active:after {
  border-width: 0 0 0px;
}

.btn:active {
  padding-bottom: 10px;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3em;
  background: linear-gradient(90deg, #0f6dba, #141413);
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
  background-color: rgb(0, 183, 255);
  border-radius: 16px;
}
.todo-btn {
  padding: 10px;
  border-radius: 50%;
  border: none;
}
.delete-todo-btn {
  background-color: red;
}
.delete-todo-btn:hover {
  background-color: rgb(232, 95, 95);
}
.done-todo-btn {
  background-color: green;
}
.done-todo-btn:hover {
  background-color: rgb(9, 214, 9);
}
.header {
  color: white;
  margin-top: 1em;
}
.popup {
  position: absolute;
  top: -150%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%) scale(1);
  width: 380px;
  padding: 20px 30px;
  background: #fff;
  box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  transition: top 0ms ease-in-out 200ms, opacity 200ms ease-in-out 0ms,
    transform 20ms ease-in-out 0ms;
}
.popup.active {
  top: 50%;
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
  transition: top 0ms ease-in-out 0ms, opacity 200ms ease-in-out 0ms,
    transform 20ms ease-in-out 0ms;
}
.popup .close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 15px;
  height: 15px;
  background: #888;
  color: #eee;
  text-align: center;
  line-height: 15px;
  border-radius: 15px;
  cursor: pointer;
}
.popup .form h2 {
  text-align: center;
  color: #222;
  margin: 10px 0px 20px;
  font-size: 25px;
}
.popup .form .form-element {
  margin: 15px 0px;
}
.popup .form .form-element label {
  font-size: 14px;
  color: #222;
}
.popup .form .form-element input[type="text"] {
  margin-top: 5px;
  display: block;
  width: 100%;
  padding: 10px;
  outline: none;
  border: 1px solid #aaa;
  border-radius: 5px;
}
.popup .form .form-element button {
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  font-size: 15px;
  background: #175e98;
  color: #f5f5f5;
  border-radius: 8px;
  cursor: pointer;
}
.create-todo-btn {
  position: absolute;
  right: 20px;
  bottom: 20px;
  background-color: #48abe0;
  color: #f5f5f5;
  padding: 5px;
  border: none;
  font-size: 31px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 4px #000;
  transition: all 0.2 ease;
}
.create-todo-btn:hover {
  background-color: #65b9e6;
}
.create-todo-btn:active {
  box-shadow: 0 0 2px darkslategray;
  transform: translateY(2px);
}

.popup-2 {
  position: absolute;
  top: -150%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%) scale(1);
  width: 380px;
  padding: 20px 30px;
  background: #fff;
  box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  transition: top 0ms ease-in-out 200ms, opacity 200ms ease-in-out 0ms,
    transform 20ms ease-in-out 0ms;
}
.popup-2.active {
  top: 50%;
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
  transition: top 0ms ease-in-out 0ms, opacity 200ms ease-in-out 0ms,
    transform 20ms ease-in-out 0ms;
}
.popup-2 .close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 15px;
  height: 15px;
  background: #888;
  color: #eee;
  text-align: center;
  line-height: 15px;
  border-radius: 15px;
  cursor: pointer;
}
.popup-2 .form h2 {
  text-align: center;
  color: #222;
  margin: 10px 0px 20px;
  font-size: 25px;
}
.popup-2 .form .form-element {
  margin: 15px 0px;
}
.popup-2 .form .form-element label {
  font-size: 14px;
  color: #222;
}
.popup-2 .form .form-element input[type="text"] {
  margin-top: 5px;
  display: block;
  width: 100%;
  padding: 10px;
  outline: none;
  border: 1px solid #aaa;
  border-radius: 5px;
}
.popup-2 .form .form-element button {
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  font-size: 15px;
  background: #175e98;
  color: #f5f5f5;
  border-radius: 8px;
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,gDAAgD;EAChD,aAAa;AACf;AACA;EACE,aAAa;EACb,+BAA+B;AACjC;AACA;EACE,qBAAqB;AACvB;AACA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;EACR,yBAAyB;EACzB,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;EACR,gBAAgB;EAChB,YAAY;AACd;AACA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,yBAAyB;EACzB,mBAAmB;EACnB,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,eAAe;EACf,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,qBAAqB;EACrB,iBAAiB;EACjB,SAAS;EACT,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;EACzB,0BAA0B;EAC1B,wBAAwB;EACxB,uBAAuB;EACvB,iBAAiB;EACjB,yBAAyB;EACzB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,4BAA4B;EAC5B,yBAAyB;EACzB,yBAAyB;EACzB,mBAAmB;EACnB,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,OAAO;EACP,kBAAkB;EAClB,QAAQ;EACR,MAAM;EACN,WAAW;AACb;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;EACR,oDAAoD;AACtD;AACA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;AACV;AACA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,8CAA8C;EAC9C,SAAS;EACT,kCAAkC;EAClC,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,qBAAqB;AACvB;AACA;EACE,kCAAkC;AACpC;AACA;EACE,uBAAuB;AACzB;AACA;EACE,gCAAgC;AAClC;AACA;EACE,YAAY;EACZ,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,UAAU;EACV,yCAAyC;EACzC,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,+CAA+C;EAC/C,mBAAmB;EACnB;kCACgC;AAClC;AACA;EACE,QAAQ;EACR,UAAU;EACV,yCAAyC;EACzC;kCACgC;AAClC;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,qBAAqB;EACrB,eAAe;AACjB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,WAAW;AACb;AACA;EACE,eAAe;EACf,cAAc;EACd,WAAW;EACX,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,cAAc;EACd,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,0BAA0B;EAC1B,wBAAwB;AAC1B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,iCAAiC;EACjC,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,UAAU;EACV,yCAAyC;EACzC,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,+CAA+C;EAC/C,mBAAmB;EACnB;kCACgC;AAClC;AACA;EACE,QAAQ;EACR,UAAU;EACV,yCAAyC;EACzC;kCACgC;AAClC;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,qBAAqB;EACrB,eAAe;AACjB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,WAAW;AACb;AACA;EACE,eAAe;EACf,cAAc;EACd,WAAW;EACX,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,cAAc;EACd,kBAAkB;EAClB,eAAe;AACjB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  height: 100vh;\n}\n.content {\n  display: grid;\n  grid-template-columns: auto 1fr;\n}\nul {\n  list-style-type: none;\n}\n.sidebar {\n  width: 300px;\n  padding: 1em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4em;\n  background-color: #1899d6;\n  height: 100vh;\n}\n.user {\n  text-align: center;\n  color: white;\n}\n.projects-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2em;\n  font-size: 1.2em;\n  color: white;\n}\nul li {\n  margin: 4px;\n}\n\n.btn {\n  appearance: button;\n  background-color: #1899d6;\n  border: solid transparent;\n  border-radius: 16px;\n  border-width: 0 0 4px;\n  box-sizing: border-box;\n  color: #ffffff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 15px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  line-height: 20px;\n  margin: 0;\n  outline: none;\n  overflow: visible;\n  padding: 13px 19px;\n  text-align: center;\n  text-transform: uppercase;\n  touch-action: manipulation;\n  transform: translateZ(0);\n  transition: filter 0.2s;\n  user-select: none;\n  -webkit-user-select: none;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n\n.btn:after {\n  background-clip: padding-box;\n  background-color: #1cb0f6;\n  border: solid transparent;\n  border-radius: 16px;\n  border-width: 0 0 4px;\n  bottom: -4px;\n  content: \"\";\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: -1;\n}\n\n.btn:main,\n.btn:focus {\n  user-select: auto;\n}\n\n.btn:hover:not(:disabled) {\n  filter: brightness(1.1);\n}\n\n.btn:disabled {\n  cursor: auto;\n}\n\n.btn:active:after {\n  border-width: 0 0 0px;\n}\n\n.btn:active {\n  padding-bottom: 10px;\n}\n.main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3em;\n  background: linear-gradient(90deg, #0f6dba, #141413);\n}\n.todos {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1em;\n}\n.todo {\n  width: 80%;\n  padding: 1em;\n  display: grid;\n  grid-template-columns: auto auto 1fr auto auto;\n  gap: 10px;\n  background-color: rgb(0, 183, 255);\n  border-radius: 16px;\n}\n.todo-btn {\n  padding: 10px;\n  border-radius: 50%;\n  border: none;\n}\n.delete-todo-btn {\n  background-color: red;\n}\n.delete-todo-btn:hover {\n  background-color: rgb(232, 95, 95);\n}\n.done-todo-btn {\n  background-color: green;\n}\n.done-todo-btn:hover {\n  background-color: rgb(9, 214, 9);\n}\n.header {\n  color: white;\n  margin-top: 1em;\n}\n.popup {\n  position: absolute;\n  top: -150%;\n  left: 50%;\n  opacity: 0;\n  transform: translate(-50%, -50%) scale(1);\n  width: 380px;\n  padding: 20px 30px;\n  background: #fff;\n  box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.15);\n  border-radius: 10px;\n  transition: top 0ms ease-in-out 200ms, opacity 200ms ease-in-out 0ms,\n    transform 20ms ease-in-out 0ms;\n}\n.popup.active {\n  top: 50%;\n  opacity: 1;\n  transform: translate(-50%, -50%) scale(1);\n  transition: top 0ms ease-in-out 0ms, opacity 200ms ease-in-out 0ms,\n    transform 20ms ease-in-out 0ms;\n}\n.popup .close-btn {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 15px;\n  height: 15px;\n  background: #888;\n  color: #eee;\n  text-align: center;\n  line-height: 15px;\n  border-radius: 15px;\n  cursor: pointer;\n}\n.popup .form h2 {\n  text-align: center;\n  color: #222;\n  margin: 10px 0px 20px;\n  font-size: 25px;\n}\n.popup .form .form-element {\n  margin: 15px 0px;\n}\n.popup .form .form-element label {\n  font-size: 14px;\n  color: #222;\n}\n.popup .form .form-element input[type=\"text\"] {\n  margin-top: 5px;\n  display: block;\n  width: 100%;\n  padding: 10px;\n  outline: none;\n  border: 1px solid #aaa;\n  border-radius: 5px;\n}\n.popup .form .form-element button {\n  width: 100%;\n  height: 40px;\n  border: none;\n  outline: none;\n  font-size: 15px;\n  background: #175e98;\n  color: #f5f5f5;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.create-todo-btn {\n  position: absolute;\n  right: 20px;\n  bottom: 20px;\n  background-color: #48abe0;\n  color: #f5f5f5;\n  padding: 5px;\n  border: none;\n  font-size: 31px;\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: 0 2px 4px #000;\n  transition: all 0.2 ease;\n}\n.create-todo-btn:hover {\n  background-color: #65b9e6;\n}\n.create-todo-btn:active {\n  box-shadow: 0 0 2px darkslategray;\n  transform: translateY(2px);\n}\n\n.popup-2 {\n  position: absolute;\n  top: -150%;\n  left: 50%;\n  opacity: 0;\n  transform: translate(-50%, -50%) scale(1);\n  width: 380px;\n  padding: 20px 30px;\n  background: #fff;\n  box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.15);\n  border-radius: 10px;\n  transition: top 0ms ease-in-out 200ms, opacity 200ms ease-in-out 0ms,\n    transform 20ms ease-in-out 0ms;\n}\n.popup-2.active {\n  top: 50%;\n  opacity: 1;\n  transform: translate(-50%, -50%) scale(1);\n  transition: top 0ms ease-in-out 0ms, opacity 200ms ease-in-out 0ms,\n    transform 20ms ease-in-out 0ms;\n}\n.popup-2 .close-btn {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 15px;\n  height: 15px;\n  background: #888;\n  color: #eee;\n  text-align: center;\n  line-height: 15px;\n  border-radius: 15px;\n  cursor: pointer;\n}\n.popup-2 .form h2 {\n  text-align: center;\n  color: #222;\n  margin: 10px 0px 20px;\n  font-size: 25px;\n}\n.popup-2 .form .form-element {\n  margin: 15px 0px;\n}\n.popup-2 .form .form-element label {\n  font-size: 14px;\n  color: #222;\n}\n.popup-2 .form .form-element input[type=\"text\"] {\n  margin-top: 5px;\n  display: block;\n  width: 100%;\n  padding: 10px;\n  outline: none;\n  border: 1px solid #aaa;\n  border-radius: 5px;\n}\n.popup-2 .form .form-element button {\n  width: 100%;\n  height: 40px;\n  border: none;\n  outline: none;\n  font-size: 15px;\n  background: #175e98;\n  color: #f5f5f5;\n  border-radius: 8px;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/blank-project-load.js":
/*!***********************************!*\
  !*** ./src/blank-project-load.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsLoad: () => (/* binding */ ProjectsLoad)
/* harmony export */ });
/* harmony import */ var _dom_manip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manip */ "./src/dom-manip.js");


function ProjectsLoad(projectName = "Default") {
  const projectsDiv = document.querySelector(".projects-container");
  projectsDiv.innerHTML = "";
  const heading = document.createElement("h2");
  heading.textContent = "My list";
  projectsDiv.appendChild(heading);
  (0,_dom_manip__WEBPACK_IMPORTED_MODULE_0__.renderProjectTodos)(projectName);
  (0,_dom_manip__WEBPACK_IMPORTED_MODULE_0__.projectsDivSetup)();
}




/***/ }),

/***/ "./src/create-project.js":
/*!*******************************!*\
  !*** ./src/create-project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   getProject: () => (/* binding */ getProject),
/* harmony export */   showProjects: () => (/* binding */ showProjects)
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

  showTodos() {
    console.log(this.todoItems);
  }
  getTodos() {
    return this.todoItems;
  }
}

function showProjects() {
  console.log(___WEBPACK_IMPORTED_MODULE_0__.todoDependencies.projects);
}
function getProject(projectName) {
  let project = ___WEBPACK_IMPORTED_MODULE_0__.todoDependencies.projects.find(
    (project) => project.projectTitle == projectName
  );
  return project;
}

function createProject(name) {
  ___WEBPACK_IMPORTED_MODULE_0__.todoDependencies.projects.push(new Project(name));
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
  let todo = new Todo(title, description, dueDate, priority);
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
  let todo = new Todo(title, description, dueDate, priority, projectToInsert);
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
/* harmony export */   projectsDivSetup: () => (/* binding */ projectsDivSetup),
/* harmony export */   renderProjectTodos: () => (/* binding */ renderProjectTodos)
/* harmony export */ });
/* harmony import */ var _blank_project_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blank-project-load */ "./src/blank-project-load.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-project */ "./src/create-project.js");
/* harmony import */ var _manage_popups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-popups */ "./src/manage-popups.js");





(0,_manage_popups__WEBPACK_IMPORTED_MODULE_3__.manageProjectPopup)();
(0,_manage_popups__WEBPACK_IMPORTED_MODULE_3__.manageTodoPopup)();

function projectsDivSetup() {
  renderProjects();
}
function renderProjects() {
  // create unordered list for project names
  const projectsDiv = document.querySelector(".projects-container");
  const ul = document.createElement("ul");
  projectsDiv.appendChild(ul);

  // for each project create list element and add event listener
  ___WEBPACK_IMPORTED_MODULE_1__.todoDependencies.projects.forEach((project) => {
    const listItem = document.createElement("li");
    listItem.textContent = project.projectTitle;
    ul.appendChild(listItem);
    listItem.addEventListener("click", () => {
      // when clicked show the project's todos
      ___WEBPACK_IMPORTED_MODULE_1__.todoDependencies.setCurrentProject(project.projectTitle);
      renderProjectTodos(project.projectTitle);
      changeProjectHeader(project);
    });
  });
}
function changeProjectHeader(project) {
  const projectHeader = document.querySelector(".header");
  projectHeader.textContent = project.projectTitle;
}
function renderProjectTodos(projectName = "Default") {
  // get the specifed project object
  let project = (0,_create_project__WEBPACK_IMPORTED_MODULE_2__.getProject)(projectName);
  changeProjectHeader(project);
  // get the project object's todo array
  let projectTodos = project.getTodos();

  const todosDiv = document.querySelector(".todos");
  todosDiv.innerHTML = "";

  // for each todo in todo array, create div with todo's infos
  projectTodos.forEach((todo) => {
    const div = document.createElement("div");
    div.classList.add("todo");
    todosDiv.appendChild(div);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("todo-btn", "delete-todo-btn");
    const doneButton = document.createElement("button");
    doneButton.classList.add("todo-btn", "done-todo-btn");
    const titleSpan = document.createElement("span");
    titleSpan.textContent = todo.title;
    const dueDateSpan = document.createElement("span");
    dueDateSpan.textContent = todo.dueDate;
    const prioritySpan = document.createElement("span");
    prioritySpan.textContent = todo.priority;

    div.appendChild(deleteButton);
    div.appendChild(doneButton);
    div.appendChild(titleSpan);
    div.appendChild(dueDateSpan);
    div.appendChild(prioritySpan);

    deleteButton.addEventListener("click", () => {
      project.deleteTodoItem(todo);
      renderProjectTodos(projectName);
    });
  });
}
// function loadProjectTodos(projectName) {
//   let project = getProject(projectName);
//   let projectTodos = project.getTodos();
//   const todosDiv = document.querySelector(".todos");
//   todosDiv.innerHTML = "";
//   projectTodos.forEach((todo) => {
//     const div = document.createElement("div");
//     div.classList.add("todo");
//     todosDiv.appendChild(div);

//     const deleteButton = document.createElement("button");
//     deleteButton.classList.add("todo-btn", "delete-todo-btn");
//     const doneButton = document.createElement("button");
//     doneButton.classList.add("todo-btn", "done-todo-btn");
//     const titleSpan = document.createElement("span");
//     titleSpan.textContent = todo.title;
//     const dueDateSpan = document.createElement("span");
//     dueDateSpan.textContent = todo.dueDate;
//     const prioritySpan = document.createElement("span");
//     prioritySpan.textContent = todo.priority;

//     div.appendChild(deleteButton);
//     div.appendChild(doneButton);
//     div.appendChild(titleSpan);
//     div.appendChild(dueDateSpan);
//     div.appendChild(prioritySpan);

//     deleteButton.addEventListener("click", () => {
//       project.deleteTodoItem(todo);
//     });
//   });
// }




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
/* harmony import */ var _blank_project_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blank-project-load */ "./src/blank-project-load.js");
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
(0,_blank_project_load__WEBPACK_IMPORTED_MODULE_2__.ProjectsLoad)();
(0,_create_project__WEBPACK_IMPORTED_MODULE_1__.showProjects)();



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
/* harmony import */ var _blank_project_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blank-project-load */ "./src/blank-project-load.js");
/* harmony import */ var _create_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-todo */ "./src/create-todo.js");
/* harmony import */ var _dom_manip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-manip */ "./src/dom-manip.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./src/index.js");






// Create Project Popup

const createProjectPopupBtn = document.querySelector(".create-project-btn");
const createProjectPopupCloseBtn = document.querySelector(".popup .close-btn");
const createProjectDoneBtn = document.querySelector("#done-btn");

function closeProjectPopup() {
  const popup = document.querySelector(".popup");
  popup.classList.remove("active");
}
function showProjectPopup() {
  const popup = document.querySelector(".popup");
  popup.classList.add("active");
}

function manageProjectPopup() {
  createProjectPopupBtn.addEventListener("click", showProjectPopup);
  createProjectPopupCloseBtn.addEventListener("click", closeProjectPopup);
  createProjectDoneBtn.addEventListener("click", () => {
    const projectName = document.querySelector("#project-name").value;
    (0,_create_project__WEBPACK_IMPORTED_MODULE_0__.createProject)(projectName);
    ___WEBPACK_IMPORTED_MODULE_4__.todoDependencies.setCurrentProject(projectName);
    (0,_blank_project_load__WEBPACK_IMPORTED_MODULE_1__.ProjectsLoad)(___WEBPACK_IMPORTED_MODULE_4__.todoDependencies.getCurrentProject());
    closeProjectPopup();
  });
}

// Create Todo Popup
const createTodoPopupBtn = document.querySelector("#create-todo-btn");
const createTodoPopupCloseBtn = document.querySelector(".popup-2 .close-btn");
const createTodoDoneBtn = document.querySelector("#todo-done-btn");

function closeTodoPopup() {
  const popup = document.querySelector(".popup-2");
  popup.classList.remove("active");
}
function showTodoPopup() {
  document.querySelector("#todo-name").value = "";
  document.querySelector("#todo-description").value = "";
  document.querySelector("#due-date").value = "";
  document.querySelector("#priority").value = "";
  const popup = document.querySelector(".popup-2");
  popup.classList.add("active");
}

function manageTodoPopup() {
  createTodoPopupBtn.addEventListener("click", showTodoPopup);
  createTodoPopupCloseBtn.addEventListener("click", closeTodoPopup);

  createTodoDoneBtn.addEventListener("click", () => {
    const todoName = document.querySelector("#todo-name").value;
    const todoDescription = document.querySelector("#todo-description").value;
    const todoDueDate = document.querySelector("#due-date").value;
    const todoPriority = document.querySelector("#priority").value;

    (0,_create_todo__WEBPACK_IMPORTED_MODULE_2__.createTodo)(
      todoName,
      todoDescription,
      todoDueDate,
      todoPriority,
      ___WEBPACK_IMPORTED_MODULE_4__.todoDependencies.getCurrentProject()
    );
    (0,_dom_manip__WEBPACK_IMPORTED_MODULE_3__.renderProjectTodos)(___WEBPACK_IMPORTED_MODULE_4__.todoDependencies.getCurrentProject());
    closeTodoPopup();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLE9BQU8sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUs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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBYTtBQUNqQixJQUFJLCtDQUFnQjtBQUNwQixJQUFJLGlFQUFZLENBQUMsK0NBQWdCO0FBQ2pDO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLHdEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLCtDQUFnQjtBQUN0QjtBQUNBLElBQUksOERBQWtCLENBQUMsK0NBQWdCO0FBQ3ZDO0FBQ0EsR0FBRztBQUNIOztBQUUrQzs7Ozs7OztVQ3pFL0M7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYmxhbmstcHJvamVjdC1sb2FkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGUtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlLXRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS1tYW5pcC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21hbmFnZS1wb3B1cHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbn1cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLnNpZGViYXIge1xuICB3aWR0aDogMzAwcHg7XG4gIHBhZGRpbmc6IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODk5ZDY7XG4gIGhlaWdodDogMTAwdmg7XG59XG4udXNlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnByb2plY3RzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMmVtO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG51bCBsaSB7XG4gIG1hcmdpbjogNHB4O1xufVxuXG4uYnRuIHtcbiAgYXBwZWFyYW5jZTogYnV0dG9uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg5OWQ2O1xuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3JkZXItd2lkdGg6IDAgMCA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBwYWRkaW5nOiAxM3B4IDE5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMnM7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYnRuOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjYjBmNjtcbiAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgNHB4O1xuICBib3R0b206IC00cHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5idG46bWFpbixcbi5idG46Zm9jdXMge1xuICB1c2VyLXNlbGVjdDogYXV0bztcbn1cblxuLmJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xufVxuXG4uYnRuOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBhdXRvO1xufVxuXG4uYnRuOmFjdGl2ZTphZnRlciB7XG4gIGJvcmRlci13aWR0aDogMCAwIDBweDtcbn1cblxuLmJ0bjphY3RpdmUge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAzZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzBmNmRiYSwgIzE0MTQxMyk7XG59XG4udG9kb3Mge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxZW07XG59XG4udG9kbyB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDFlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gMWZyIGF1dG8gYXV0bztcbiAgZ2FwOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTgzLCAyNTUpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuLnRvZG8tYnRuIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IG5vbmU7XG59XG4uZGVsZXRlLXRvZG8tYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuLmRlbGV0ZS10b2RvLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzIsIDk1LCA5NSk7XG59XG4uZG9uZS10b2RvLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuLmRvbmUtdG9kby1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOSwgMjE0LCA5KTtcbn1cbi5oZWFkZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cbi5wb3B1cCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTUwJTtcbiAgbGVmdDogNTAlO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbiAgd2lkdGg6IDM4MHB4O1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2l0aW9uOiB0b3AgMG1zIGVhc2UtaW4tb3V0IDIwMG1zLCBvcGFjaXR5IDIwMG1zIGVhc2UtaW4tb3V0IDBtcyxcbiAgICB0cmFuc2Zvcm0gMjBtcyBlYXNlLWluLW91dCAwbXM7XG59XG4ucG9wdXAuYWN0aXZlIHtcbiAgdG9wOiA1MCU7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiB0b3AgMG1zIGVhc2UtaW4tb3V0IDBtcywgb3BhY2l0eSAyMDBtcyBlYXNlLWluLW91dCAwbXMsXG4gICAgdHJhbnNmb3JtIDIwbXMgZWFzZS1pbi1vdXQgMG1zO1xufVxuLnBvcHVwIC5jbG9zZS1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG4gIGNvbG9yOiAjZWVlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucG9wdXAgLmZvcm0gaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMjIyO1xuICBtYXJnaW46IDEwcHggMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbi5wb3B1cCAuZm9ybSAuZm9ybS1lbGVtZW50IHtcbiAgbWFyZ2luOiAxNXB4IDBweDtcbn1cbi5wb3B1cCAuZm9ybSAuZm9ybS1lbGVtZW50IGxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzIyMjtcbn1cbi5wb3B1cCAuZm9ybSAuZm9ybS1lbGVtZW50IGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5wb3B1cCAuZm9ybSAuZm9ybS1lbGVtZW50IGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjMTc1ZTk4O1xuICBjb2xvcjogI2Y1ZjVmNTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY3JlYXRlLXRvZG8tYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDhhYmUwO1xuICBjb2xvcjogI2Y1ZjVmNTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMzFweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjMDAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yIGVhc2U7XG59XG4uY3JlYXRlLXRvZG8tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY1YjllNjtcbn1cbi5jcmVhdGUtdG9kby1idG46YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMCAwIDJweCBkYXJrc2xhdGVncmF5O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcbn1cblxuLnBvcHVwLTIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTE1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG4gIHdpZHRoOiAzODBweDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAycHggMnB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdHJhbnNpdGlvbjogdG9wIDBtcyBlYXNlLWluLW91dCAyMDBtcywgb3BhY2l0eSAyMDBtcyBlYXNlLWluLW91dCAwbXMsXG4gICAgdHJhbnNmb3JtIDIwbXMgZWFzZS1pbi1vdXQgMG1zO1xufVxuLnBvcHVwLTIuYWN0aXZlIHtcbiAgdG9wOiA1MCU7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiB0b3AgMG1zIGVhc2UtaW4tb3V0IDBtcywgb3BhY2l0eSAyMDBtcyBlYXNlLWluLW91dCAwbXMsXG4gICAgdHJhbnNmb3JtIDIwbXMgZWFzZS1pbi1vdXQgMG1zO1xufVxuLnBvcHVwLTIgLmNsb3NlLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYmFja2dyb3VuZDogIzg4ODtcbiAgY29sb3I6ICNlZWU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wb3B1cC0yIC5mb3JtIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzIyMjtcbiAgbWFyZ2luOiAxMHB4IDBweCAyMHB4O1xuICBmb250LXNpemU6IDI1cHg7XG59XG4ucG9wdXAtMiAuZm9ybSAuZm9ybS1lbGVtZW50IHtcbiAgbWFyZ2luOiAxNXB4IDBweDtcbn1cbi5wb3B1cC0yIC5mb3JtIC5mb3JtLWVsZW1lbnQgbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjIyO1xufVxuLnBvcHVwLTIgLmZvcm0gLmZvcm0tZWxlbWVudCBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucG9wdXAtMiAuZm9ybSAuZm9ybS1lbGVtZW50IGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjMTc1ZTk4O1xuICBjb2xvcjogI2Y1ZjVmNTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGdEQUFnRDtFQUNoRCxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VB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RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFVBQVU7RUFDVix5Q0FBeUM7RUFDekMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsK0NBQStDO0VBQy9DLG1CQUFtQjtFQUNuQjtrQ0FDZ0M7QUFDbEM7QUFDQTtFQUNFLFFBQVE7RUFDUixVQUFVO0VBQ1YseUNBQXlDO0VBQ3pDO2tDQUNnQztBQUNsQztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG59XFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG4uc2lkZWJhciB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nOiAxZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODk5ZDY7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4udXNlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG51bCBsaSB7XFxuICBtYXJnaW46IDRweDtcXG59XFxuXFxuLmJ0biB7XFxuICBhcHBlYXJhbmNlOiBidXR0b247XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg5OWQ2O1xcbiAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBib3JkZXItd2lkdGg6IDAgMCA0cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBtYXJnaW46IDA7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBwYWRkaW5nOiAxM3B4IDE5cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4ycztcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uYnRuOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWNiMGY2O1xcbiAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBib3JkZXItd2lkdGg6IDAgMCA0cHg7XFxuICBib3R0b206IC00cHg7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGxlZnQ6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4uYnRuOm1haW4sXFxuLmJ0bjpmb2N1cyB7XFxuICB1c2VyLXNlbGVjdDogYXV0bztcXG59XFxuXFxuLmJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcXG59XFxuXFxuLmJ0bjpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGF1dG87XFxufVxcblxcbi5idG46YWN0aXZlOmFmdGVyIHtcXG4gIGJvcmRlci13aWR0aDogMCAwIDBweDtcXG59XFxuXFxuLmJ0bjphY3RpdmUge1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM2VtO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMGY2ZGJhLCAjMTQxNDEzKTtcXG59XFxuLnRvZG9zIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxZW07XFxufVxcbi50b2RvIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBwYWRkaW5nOiAxZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gMWZyIGF1dG8gYXV0bztcXG4gIGdhcDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxODMsIDI1NSk7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbn1cXG4udG9kby1idG4ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLmRlbGV0ZS10b2RvLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbi5kZWxldGUtdG9kby1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMiwgOTUsIDk1KTtcXG59XFxuLmRvbmUtdG9kby1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcbi5kb25lLXRvZG8tYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5LCAyMTQsIDkpO1xcbn1cXG4uaGVhZGVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG59XFxuLnBvcHVwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTE1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxuICB3aWR0aDogMzgwcHg7XFxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogdG9wIDBtcyBlYXNlLWluLW91dCAyMDBtcywgb3BhY2l0eSAyMDBtcyBlYXNlLWluLW91dCAwbXMsXFxuICAgIHRyYW5zZm9ybSAyMG1zIGVhc2UtaW4tb3V0IDBtcztcXG59XFxuLnBvcHVwLmFjdGl2ZSB7XFxuICB0b3A6IDUwJTtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IHRvcCAwbXMgZWFzZS1pbi1vdXQgMG1zLCBvcGFjaXR5IDIwMG1zIGVhc2UtaW4tb3V0IDBtcyxcXG4gICAgdHJhbnNmb3JtIDIwbXMgZWFzZS1pbi1vdXQgMG1zO1xcbn1cXG4ucG9wdXAgLmNsb3NlLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwcHg7XFxuICByaWdodDogMTBweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgYmFja2dyb3VuZDogIzg4ODtcXG4gIGNvbG9yOiAjZWVlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucG9wdXAgLmZvcm0gaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICMyMjI7XFxuICBtYXJnaW46IDEwcHggMHB4IDIwcHg7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcbi5wb3B1cCAuZm9ybSAuZm9ybS1lbGVtZW50IHtcXG4gIG1hcmdpbjogMTVweCAwcHg7XFxufVxcbi5wb3B1cCAuZm9ybSAuZm9ybS1lbGVtZW50IGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjMjIyO1xcbn1cXG4ucG9wdXAgLmZvcm0gLmZvcm0tZWxlbWVudCBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnBvcHVwIC5mb3JtIC5mb3JtLWVsZW1lbnQgYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGJhY2tncm91bmQ6ICMxNzVlOTg7XFxuICBjb2xvcjogI2Y1ZjVmNTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNyZWF0ZS10b2RvLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMjBweDtcXG4gIGJvdHRvbTogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OGFiZTA7XFxuICBjb2xvcjogI2Y1ZjVmNTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMzFweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4ICMwMDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4yIGVhc2U7XFxufVxcbi5jcmVhdGUtdG9kby1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY1YjllNjtcXG59XFxuLmNyZWF0ZS10b2RvLWJ0bjphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogMCAwIDJweCBkYXJrc2xhdGVncmF5O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxufVxcblxcbi5wb3B1cC0yIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTE1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxuICB3aWR0aDogMzgwcHg7XFxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogdG9wIDBtcyBlYXNlLWluLW91dCAyMDBtcywgb3BhY2l0eSAyMDBtcyBlYXNlLWluLW91dCAwbXMsXFxuICAgIHRyYW5zZm9ybSAyMG1zIGVhc2UtaW4tb3V0IDBtcztcXG59XFxuLnBvcHVwLTIuYWN0aXZlIHtcXG4gIHRvcDogNTAlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbiAgdHJhbnNpdGlvbjogdG9wIDBtcyBlYXNlLWluLW91dCAwbXMsIG9wYWNpdHkgMjAwbXMgZWFzZS1pbi1vdXQgMG1zLFxcbiAgICB0cmFuc2Zvcm0gMjBtcyBlYXNlLWluLW91dCAwbXM7XFxufVxcbi5wb3B1cC0yIC5jbG9zZS1idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMHB4O1xcbiAgcmlnaHQ6IDEwcHg7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGJhY2tncm91bmQ6ICM4ODg7XFxuICBjb2xvcjogI2VlZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnBvcHVwLTIgLmZvcm0gaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICMyMjI7XFxuICBtYXJnaW46IDEwcHggMHB4IDIwcHg7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcbi5wb3B1cC0yIC5mb3JtIC5mb3JtLWVsZW1lbnQge1xcbiAgbWFyZ2luOiAxNXB4IDBweDtcXG59XFxuLnBvcHVwLTIgLmZvcm0gLmZvcm0tZWxlbWVudCBsYWJlbCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzIyMjtcXG59XFxuLnBvcHVwLTIgLmZvcm0gLmZvcm0tZWxlbWVudCBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnBvcHVwLTIgLmZvcm0gLmZvcm0tZWxlbWVudCBidXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgYmFja2dyb3VuZDogIzE3NWU5ODtcXG4gIGNvbG9yOiAjZjVmNWY1O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdHNEaXZTZXR1cCwgcmVuZGVyUHJvamVjdFRvZG9zIH0gZnJvbSBcIi4vZG9tLW1hbmlwXCI7XG5cbmZ1bmN0aW9uIFByb2plY3RzTG9hZChwcm9qZWN0TmFtZSA9IFwiRGVmYXVsdFwiKSB7XG4gIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1jb250YWluZXJcIik7XG4gIHByb2plY3RzRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIk15IGxpc3RcIjtcbiAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIHJlbmRlclByb2plY3RUb2Rvcyhwcm9qZWN0TmFtZSk7XG4gIHByb2plY3RzRGl2U2V0dXAoKTtcbn1cblxuZXhwb3J0IHsgUHJvamVjdHNMb2FkIH07XG4iLCJpbXBvcnQgeyB0b2RvRGVwZW5kZW5jaWVzIH0gZnJvbSBcIi5cIjtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3RUaXRsZSkge1xuICAgIHRoaXMucHJvamVjdFRpdGxlID0gcHJvamVjdFRpdGxlO1xuICAgIHRoaXMudG9kb0l0ZW1zID0gW107XG4gIH1cblxuICBhZGRUb2RvSXRlbSh0b2RvSXRlbSkge1xuICAgIHRoaXMudG9kb0l0ZW1zLnB1c2godG9kb0l0ZW0pO1xuICB9XG4gIGRlbGV0ZVRvZG9JdGVtKHRvZG9JdGVtKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy50b2RvSXRlbXMuaW5kZXhPZih0b2RvSXRlbSk7XG4gICAgdGhpcy50b2RvSXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIHNob3dUb2RvcygpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRvZG9JdGVtcyk7XG4gIH1cbiAgZ2V0VG9kb3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9kb0l0ZW1zO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0cygpIHtcbiAgY29uc29sZS5sb2codG9kb0RlcGVuZGVuY2llcy5wcm9qZWN0cyk7XG59XG5mdW5jdGlvbiBnZXRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gIGxldCBwcm9qZWN0ID0gdG9kb0RlcGVuZGVuY2llcy5wcm9qZWN0cy5maW5kKFxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LnByb2plY3RUaXRsZSA9PSBwcm9qZWN0TmFtZVxuICApO1xuICByZXR1cm4gcHJvamVjdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gIHRvZG9EZXBlbmRlbmNpZXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChuYW1lKSk7XG59XG5cbmV4cG9ydCB7IFByb2plY3QsIGNyZWF0ZVByb2plY3QsIHNob3dQcm9qZWN0cywgZ2V0UHJvamVjdCB9O1xuIiwiaW1wb3J0IHsgdG9kb0RlcGVuZGVuY2llcyB9IGZyb20gXCIuXCI7XG5cbmNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvKFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGR1ZURhdGUsXG4gIHByaW9yaXR5LFxuICBwcm9qZWN0VG9JbnNlcnQgPSBcIlwiXG4pIHtcbiAgbGV0IHRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgaWYgKHByb2plY3RUb0luc2VydCA9PT0gXCJcIikge1xuICAgIHRvZG9EZXBlbmRlbmNpZXMuZGVmYXVsdFByb2plY3QuYWRkVG9kb0l0ZW0odG9kbyk7XG4gIH1cbiAgdG9kb0RlcGVuZGVuY2llcy5wcm9qZWN0cy5mb3JFYWNoKChjdXJyZW50UHJvamVjdCkgPT4ge1xuICAgIGlmIChjdXJyZW50UHJvamVjdC5wcm9qZWN0VGl0bGUgPT09IHByb2plY3RUb0luc2VydCkge1xuICAgICAgY3VycmVudFByb2plY3QuYWRkVG9kb0l0ZW0odG9kbyk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVRvZG8yKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBkdWVEYXRlLFxuICBwcmlvcml0eSxcbiAgcHJvamVjdFRvSW5zZXJ0LFxufSkge1xuICBsZXQgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3RUb0luc2VydCk7XG4gIGlmIChwcm9qZWN0VG9JbnNlcnQgPT09IFwiXCIpIHtcbiAgICB0b2RvRGVwZW5kZW5jaWVzLmRlZmF1bHRQcm9qZWN0LmFkZFRvZG9JdGVtKHRvZG8pO1xuICB9XG4gIHRvZG9EZXBlbmRlbmNpZXMucHJvamVjdHMuZm9yRWFjaCgoY3VycmVudFByb2plY3QpID0+IHtcbiAgICBpZiAoY3VycmVudFByb2plY3QucHJvamVjdFRpdGxlID09PSBwcm9qZWN0VG9JbnNlcnQpIHtcbiAgICAgIGN1cnJlbnRQcm9qZWN0LmFkZFRvZG9JdGVtKHRvZG8pO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB7IFRvZG8sIGNyZWF0ZVRvZG8sIGNyZWF0ZVRvZG8yIH07XG4iLCJpbXBvcnQgeyBQcm9qZWN0c0xvYWQgfSBmcm9tIFwiLi9ibGFuay1wcm9qZWN0LWxvYWRcIjtcbmltcG9ydCB7IHRvZG9EZXBlbmRlbmNpZXMgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdCwgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0XCI7XG5pbXBvcnQgeyBtYW5hZ2VQcm9qZWN0UG9wdXAsIG1hbmFnZVRvZG9Qb3B1cCB9IGZyb20gXCIuL21hbmFnZS1wb3B1cHNcIjtcblxubWFuYWdlUHJvamVjdFBvcHVwKCk7XG5tYW5hZ2VUb2RvUG9wdXAoKTtcblxuZnVuY3Rpb24gcHJvamVjdHNEaXZTZXR1cCgpIHtcbiAgcmVuZGVyUHJvamVjdHMoKTtcbn1cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCkge1xuICAvLyBjcmVhdGUgdW5vcmRlcmVkIGxpc3QgZm9yIHByb2plY3QgbmFtZXNcbiAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHVsKTtcblxuICAvLyBmb3IgZWFjaCBwcm9qZWN0IGNyZWF0ZSBsaXN0IGVsZW1lbnQgYW5kIGFkZCBldmVudCBsaXN0ZW5lclxuICB0b2RvRGVwZW5kZW5jaWVzLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IHByb2plY3QucHJvamVjdFRpdGxlO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy8gd2hlbiBjbGlja2VkIHNob3cgdGhlIHByb2plY3QncyB0b2Rvc1xuICAgICAgdG9kb0RlcGVuZGVuY2llcy5zZXRDdXJyZW50UHJvamVjdChwcm9qZWN0LnByb2plY3RUaXRsZSk7XG4gICAgICByZW5kZXJQcm9qZWN0VG9kb3MocHJvamVjdC5wcm9qZWN0VGl0bGUpO1xuICAgICAgY2hhbmdlUHJvamVjdEhlYWRlcihwcm9qZWN0KTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBjaGFuZ2VQcm9qZWN0SGVhZGVyKHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xuICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdC5wcm9qZWN0VGl0bGU7XG59XG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0VG9kb3MocHJvamVjdE5hbWUgPSBcIkRlZmF1bHRcIikge1xuICAvLyBnZXQgdGhlIHNwZWNpZmVkIHByb2plY3Qgb2JqZWN0XG4gIGxldCBwcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gIGNoYW5nZVByb2plY3RIZWFkZXIocHJvamVjdCk7XG4gIC8vIGdldCB0aGUgcHJvamVjdCBvYmplY3QncyB0b2RvIGFycmF5XG4gIGxldCBwcm9qZWN0VG9kb3MgPSBwcm9qZWN0LmdldFRvZG9zKCk7XG5cbiAgY29uc3QgdG9kb3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zXCIpO1xuICB0b2Rvc0Rpdi5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIC8vIGZvciBlYWNoIHRvZG8gaW4gdG9kbyBhcnJheSwgY3JlYXRlIGRpdiB3aXRoIHRvZG8ncyBpbmZvc1xuICBwcm9qZWN0VG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgIHRvZG9zRGl2LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidG9kby1idG5cIiwgXCJkZWxldGUtdG9kby1idG5cIik7XG4gICAgY29uc3QgZG9uZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZG9uZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidG9kby1idG5cIiwgXCJkb25lLXRvZG8tYnRuXCIpO1xuICAgIGNvbnN0IHRpdGxlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRpdGxlU3Bhbi50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgY29uc3QgZHVlRGF0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBkdWVEYXRlU3Bhbi50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcbiAgICBjb25zdCBwcmlvcml0eVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBwcmlvcml0eVNwYW4udGV4dENvbnRlbnQgPSB0b2RvLnByaW9yaXR5O1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRvbmVCdXR0b24pO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0aXRsZVNwYW4pO1xuICAgIGRpdi5hcHBlbmRDaGlsZChkdWVEYXRlU3Bhbik7XG4gICAgZGl2LmFwcGVuZENoaWxkKHByaW9yaXR5U3Bhbik7XG5cbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHByb2plY3QuZGVsZXRlVG9kb0l0ZW0odG9kbyk7XG4gICAgICByZW5kZXJQcm9qZWN0VG9kb3MocHJvamVjdE5hbWUpO1xuICAgIH0pO1xuICB9KTtcbn1cbi8vIGZ1bmN0aW9uIGxvYWRQcm9qZWN0VG9kb3MocHJvamVjdE5hbWUpIHtcbi8vICAgbGV0IHByb2plY3QgPSBnZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcbi8vICAgbGV0IHByb2plY3RUb2RvcyA9IHByb2plY3QuZ2V0VG9kb3MoKTtcbi8vICAgY29uc3QgdG9kb3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zXCIpO1xuLy8gICB0b2Rvc0Rpdi5pbm5lckhUTUwgPSBcIlwiO1xuLy8gICBwcm9qZWN0VG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuLy8gICAgIHRvZG9zRGl2LmFwcGVuZENoaWxkKGRpdik7XG5cbi8vICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuLy8gICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidG9kby1idG5cIiwgXCJkZWxldGUtdG9kby1idG5cIik7XG4vLyAgICAgY29uc3QgZG9uZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4vLyAgICAgZG9uZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidG9kby1idG5cIiwgXCJkb25lLXRvZG8tYnRuXCIpO1xuLy8gICAgIGNvbnN0IHRpdGxlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuLy8gICAgIHRpdGxlU3Bhbi50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4vLyAgICAgY29uc3QgZHVlRGF0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbi8vICAgICBkdWVEYXRlU3Bhbi50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcbi8vICAgICBjb25zdCBwcmlvcml0eVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbi8vICAgICBwcmlvcml0eVNwYW4udGV4dENvbnRlbnQgPSB0b2RvLnByaW9yaXR5O1xuXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGRvbmVCdXR0b24pO1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZCh0aXRsZVNwYW4pO1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChkdWVEYXRlU3Bhbik7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKHByaW9yaXR5U3Bhbik7XG5cbi8vICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgICAgIHByb2plY3QuZGVsZXRlVG9kb0l0ZW0odG9kbyk7XG4vLyAgICAgfSk7XG4vLyAgIH0pO1xuLy8gfVxuXG5leHBvcnQgeyBwcm9qZWN0c0RpdlNldHVwLCByZW5kZXJQcm9qZWN0VG9kb3MgfTtcbiIsImltcG9ydCB7IGNyZWF0ZVRvZG8sIGNyZWF0ZVRvZG8yIH0gZnJvbSBcIi4vY3JlYXRlLXRvZG9cIjtcbmltcG9ydCB7XG4gIFByb2plY3QsXG4gIGNyZWF0ZVByb2plY3QsXG4gIHNob3dQcm9qZWN0cyxcbiAgZ2V0UHJvamVjdFRvZG9zLFxufSBmcm9tIFwiLi9jcmVhdGUtcHJvamVjdFwiO1xuaW1wb3J0IHsgUHJvamVjdHNMb2FkIH0gZnJvbSBcIi4vYmxhbmstcHJvamVjdC1sb2FkXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxubGV0IHRvZG9EZXBlbmRlbmNpZXMgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcIkRlZmF1bHRcIik7XG4gIGxldCBwcm9qZWN0cyA9IFtkZWZhdWx0UHJvamVjdF07XG4gIGxldCBjdXJyZW50UHJvamVjdCA9IFwiRGVmYXVsdFwiO1xuXG4gIGxldCBzZXRDdXJyZW50UHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuICB9O1xuICBsZXQgZ2V0Q3VycmVudFByb2plY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xuICB9O1xuICByZXR1cm4ge1xuICAgIHByb2plY3RzLFxuICAgIGRlZmF1bHRQcm9qZWN0LFxuICAgIHNldEN1cnJlbnRQcm9qZWN0LFxuICAgIGdldEN1cnJlbnRQcm9qZWN0LFxuICB9O1xufSkoKTtcblxuLy8gaW5pdGlhbERvbVNldHVwKCk7XG5cbi8vIGNyZWF0ZSBwcm9qZWN0XG5jcmVhdGVQcm9qZWN0KFwiR3JvY2VyeVwiKTtcbi8vIGNyZWF0ZSBwcm9qZWN0XG5jcmVhdGVQcm9qZWN0KFwiU2Nob29sXCIpO1xuXG4vLyBjcmVhdGUgdG9kbyAtPiBhZGRlZCB0byBkZWZhdWx0IHByb2plY3RcbmNyZWF0ZVRvZG8oXCJKdWljZVwiLCBcIk5lZWQganVpY2VcIiwgXCI1LzIwLzIwMjRcIiwgXCJsb3dcIik7XG5cbi8vIGNyZWF0ZSB0b2RvIC0+IGFkZGVkIHRvIEdyb2NlcnkgcHJvamVjdFxuY3JlYXRlVG9kbyhcIkZydWl0c1wiLCBcImJ1eSBmcnVpdHNcIiwgXCI1LzIyLzIwMjRcIiwgXCJsb3dcIiwgXCJHcm9jZXJ5XCIpO1xuXG4vLyBjcmVhdGUgdG9kbyAtPiBhZGRlZCB0byBkZWZhdWx0IHByb2plY3RcbmNyZWF0ZVRvZG8oXCJGb29kXCIsIFwibmVlZCBmb29kXCIsIFwiNS8yMy8yMDI0XCIsIFwiaGlnaFwiKTtcbmNyZWF0ZVRvZG8oXCJGb29kMlwiLCBcIm5lZWQgZm9vZFwiLCBcIjUvMjMvMjAyNFwiLCBcImhpZ2hcIik7XG5jcmVhdGVUb2RvKFwiRm9vZDNcIiwgXCJuZWVkIGZvb2RcIiwgXCI1LzIzLzIwMjRcIiwgXCJoaWdoXCIpO1xuXG5jcmVhdGVUb2RvMih7XG4gIHRpdGxlOiBcIkZvb2Q0XCIsXG4gIGRlc2NyaXB0aW9uOiBcIm5lZWQgZm9vZFwiLFxuICBkdWVEYXRlOiBcIjUvMjMvMjAyNFwiLFxuICBwcmlvcml0eTogXCJoaWdoXCIsXG4gIHByb2plY3RUb0luc2VydDogXCJcIixcbn0pO1xuY3JlYXRlVG9kbzIoe1xuICB0aXRsZTogXCJGb29kNVwiLFxuICBkZXNjcmlwdGlvbjogXCJuZWVkIGZvb2RcIixcbiAgZHVlRGF0ZTogXCI1LzIzLzIwMjRcIixcbiAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICBwcm9qZWN0VG9JbnNlcnQ6IFwiR3JvY2VyeVwiLFxufSk7XG5Qcm9qZWN0c0xvYWQoKTtcbnNob3dQcm9qZWN0cygpO1xuZXhwb3J0IHsgdG9kb0RlcGVuZGVuY2llcyB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0XCI7XG5pbXBvcnQgeyBQcm9qZWN0c0xvYWQgfSBmcm9tIFwiLi9ibGFuay1wcm9qZWN0LWxvYWRcIjtcbmltcG9ydCB7IGNyZWF0ZVRvZG8gfSBmcm9tIFwiLi9jcmVhdGUtdG9kb1wiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdFRvZG9zIH0gZnJvbSBcIi4vZG9tLW1hbmlwXCI7XG5pbXBvcnQgeyB0b2RvRGVwZW5kZW5jaWVzIH0gZnJvbSBcIi5cIjtcblxuLy8gQ3JlYXRlIFByb2plY3QgUG9wdXBcblxuY29uc3QgY3JlYXRlUHJvamVjdFBvcHVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtcHJvamVjdC1idG5cIik7XG5jb25zdCBjcmVhdGVQcm9qZWN0UG9wdXBDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAgLmNsb3NlLWJ0blwiKTtcbmNvbnN0IGNyZWF0ZVByb2plY3REb25lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkb25lLWJ0blwiKTtcblxuZnVuY3Rpb24gY2xvc2VQcm9qZWN0UG9wdXAoKSB7XG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKTtcbiAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbn1cbmZ1bmN0aW9uIHNob3dQcm9qZWN0UG9wdXAoKSB7XG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKTtcbiAgcG9wdXAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuZnVuY3Rpb24gbWFuYWdlUHJvamVjdFBvcHVwKCkge1xuICBjcmVhdGVQcm9qZWN0UG9wdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dQcm9qZWN0UG9wdXApO1xuICBjcmVhdGVQcm9qZWN0UG9wdXBDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VQcm9qZWN0UG9wdXApO1xuICBjcmVhdGVQcm9qZWN0RG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LW5hbWVcIikudmFsdWU7XG4gICAgY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgdG9kb0RlcGVuZGVuY2llcy5zZXRDdXJyZW50UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgUHJvamVjdHNMb2FkKHRvZG9EZXBlbmRlbmNpZXMuZ2V0Q3VycmVudFByb2plY3QoKSk7XG4gICAgY2xvc2VQcm9qZWN0UG9wdXAoKTtcbiAgfSk7XG59XG5cbi8vIENyZWF0ZSBUb2RvIFBvcHVwXG5jb25zdCBjcmVhdGVUb2RvUG9wdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NyZWF0ZS10b2RvLWJ0blwiKTtcbmNvbnN0IGNyZWF0ZVRvZG9Qb3B1cENsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC0yIC5jbG9zZS1idG5cIik7XG5jb25zdCBjcmVhdGVUb2RvRG9uZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kb25lLWJ0blwiKTtcblxuZnVuY3Rpb24gY2xvc2VUb2RvUG9wdXAoKSB7XG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC0yXCIpO1xuICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xufVxuZnVuY3Rpb24gc2hvd1RvZG9Qb3B1cCgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLW5hbWVcIikudmFsdWUgPSBcIlwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZGVzY3JpcHRpb25cIikudmFsdWUgPSBcIlwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZS1kYXRlXCIpLnZhbHVlID0gXCJcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKS52YWx1ZSA9IFwiXCI7XG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC0yXCIpO1xuICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5mdW5jdGlvbiBtYW5hZ2VUb2RvUG9wdXAoKSB7XG4gIGNyZWF0ZVRvZG9Qb3B1cEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1RvZG9Qb3B1cCk7XG4gIGNyZWF0ZVRvZG9Qb3B1cENsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVRvZG9Qb3B1cCk7XG5cbiAgY3JlYXRlVG9kb0RvbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1uYW1lXCIpLnZhbHVlO1xuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlLWRhdGVcIikudmFsdWU7XG4gICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKS52YWx1ZTtcblxuICAgIGNyZWF0ZVRvZG8oXG4gICAgICB0b2RvTmFtZSxcbiAgICAgIHRvZG9EZXNjcmlwdGlvbixcbiAgICAgIHRvZG9EdWVEYXRlLFxuICAgICAgdG9kb1ByaW9yaXR5LFxuICAgICAgdG9kb0RlcGVuZGVuY2llcy5nZXRDdXJyZW50UHJvamVjdCgpXG4gICAgKTtcbiAgICByZW5kZXJQcm9qZWN0VG9kb3ModG9kb0RlcGVuZGVuY2llcy5nZXRDdXJyZW50UHJvamVjdCgpKTtcbiAgICBjbG9zZVRvZG9Qb3B1cCgpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgbWFuYWdlUHJvamVjdFBvcHVwLCBtYW5hZ2VUb2RvUG9wdXAgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9