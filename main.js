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
/* harmony export */   projectsLoad: () => (/* binding */ projectsLoad),
/* harmony export */   renderProjectTodos: () => (/* binding */ renderProjectTodos),
/* harmony export */   renderProjects: () => (/* binding */ renderProjects)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-project */ "./src/create-project.js");
/* harmony import */ var _manage_popups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-popups */ "./src/manage-popups.js");




function projectsLoad(projectName = "Default") {
  const projectsDiv = document.querySelector(".projects-container");
  projectsDiv.innerHTML = "";

  const heading = document.createElement("h2");
  heading.textContent = "My list";
  projectsDiv.appendChild(heading);

  renderProjectTodos(projectName);
  renderProjects();
}

function renderProjects() {
  // create unordered list for project names
  const projectsDiv = document.querySelector(".projects-container");
  const ul = document.createElement("ul");
  projectsDiv.appendChild(ul);

  // for each project create list element and add event listener
  ___WEBPACK_IMPORTED_MODULE_0__.todoDependencies.projects.forEach((project) => {
    const projectName = project.projectTitle;
    const listItem = document.createElement("li");
    listItem.textContent = projectName;
    ul.appendChild(listItem);

    listItem.addEventListener("click", () => {
      // when clicked show the project's todos and change the current project to that project
      ___WEBPACK_IMPORTED_MODULE_0__.todoDependencies.setCurrentProject(projectName);
      changeProjectHeader(projectName);
      renderProjectTodos(projectName);
    });
  });
}

function changeProjectHeader(projectTitle) {
  const projectHeader = document.querySelector(".header");
  projectHeader.textContent = projectTitle;
}

function renderProjectTodos(projectName = "Default") {
  // get the specifed project object
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

    const deleteButton = createButton("todo-btn delete-todo-btn");
    const doneButton = createButton("todo-btn done-todo-btn");
    const titleSpan = createSpan(todo.title);
    const dueDateSpan = createSpan(todo.dueDate);
    const prioritySpan = createSpan(todo.priority);

    // const deleteButton = document.createElement("button");
    // deleteButton.classList.add("todo-btn", "delete-todo-btn");
    // const doneButton = document.createElement("button");
    // doneButton.classList.add("todo-btn", "done-todo-btn");
    // const titleSpan = document.createElement("span");
    // titleSpan.textContent = todo.title;
    // const dueDateSpan = document.createElement("span");
    // dueDateSpan.textContent = todo.dueDate;
    // const prioritySpan = document.createElement("span");
    // prioritySpan.textContent = todo.priority;

    todoDiv.append(
      deleteButton,
      doneButton,
      titleSpan,
      dueDateSpan,
      prioritySpan
    );
    todosDiv.appendChild(todoDiv);

    // div.appendChild(deleteButton);
    // div.appendChild(doneButton);
    // div.appendChild(titleSpan);
    // div.appendChild(dueDateSpan);
    // div.appendChild(prioritySpan);

    deleteButton.addEventListener("click", () => {
      project.deleteTodoItem(todo);
      renderProjectTodos(projectName);
    });
  });
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  return button;
}

function createSpan(text) {
  const span = document.createElement("span");
  span.textContent = text;
  return span;
}




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
  closeBtn: document.querySelector(".popup .close-btn"),
  doneBtn: document.querySelector("#done-btn"),
  popup: document.querySelector(".popup"),
  projectNameInput: document.querySelector("#project-name"),
};

function togglePopup(popup, action) {
  popup.classList[action]("active");
}

function manageProjectPopup() {
  projectPopupElements.createBtn.addEventListener("click", () =>
    togglePopup(projectPopupElements.popup, "add")
  );
  projectPopupElements.closeBtn.addEventListener("click", () =>
    togglePopup(projectPopupElements.popup, "remove")
  );
  projectPopupElements.doneBtn.addEventListener("click", () => {
    const projectName = projectPopupElements.projectNameInput.value;
    if (!(0,_create_project__WEBPACK_IMPORTED_MODULE_0__.checkProject)(projectName)) {
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
  closeBtn: document.querySelector(".popup-2 .close-btn"),
  doneBtn: document.querySelector("#todo-done-btn"),
  popup: document.querySelector(".popup-2"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLE9BQU8sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUs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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDZEQUFZO0FBQ3JCLE1BQU0sOERBQWE7QUFDbkIsTUFBTSwrQ0FBZ0I7QUFDdEIsTUFBTSx3REFBWSxDQUFDLCtDQUFnQjtBQUNuQztBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLHdEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLCtDQUFnQjtBQUN0Qjs7QUFFQSxJQUFJLDhEQUFrQixDQUFDLCtDQUFnQjtBQUN2QztBQUNBLEdBQUc7QUFDSDs7QUFFK0M7Ozs7Ozs7VUN0Ri9DO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGUtdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLW1hbmlwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5pdGlhbC1wcm9qZWN0cy1sb2FkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tYW5hZ2UtcG9wdXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmJvZHkge1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMTAwdmg7XG59XG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG59XG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5zaWRlYmFyIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBwYWRkaW5nOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg5OWQ2O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLnVzZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5wcm9qZWN0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJlbTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxudWwgbGkge1xuICBtYXJnaW46IDRweDtcbn1cblxuLmJ0biB7XG4gIGFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4OTlkNjtcbiAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgcGFkZGluZzogMTNweCAxOXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zaXRpb246IGZpbHRlciAwLjJzO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmJ0bjphZnRlciB7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxY2IwZjY7XG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJvcmRlci13aWR0aDogMCAwIDRweDtcbiAgYm90dG9tOiAtNHB4O1xuICBjb250ZW50OiBcIlwiO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uYnRuOm1haW4sXG4uYnRuOmZvY3VzIHtcbiAgdXNlci1zZWxlY3Q6IGF1dG87XG59XG5cbi5idG46aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcbn1cblxuLmJ0bjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogYXV0bztcbn1cblxuLmJ0bjphY3RpdmU6YWZ0ZXIge1xuICBib3JkZXItd2lkdGg6IDAgMCAwcHg7XG59XG5cbi5idG46YWN0aXZlIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4ubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogM2VtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwZjZkYmEsICMxNDE0MTMpO1xufVxuLnRvZG9zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMWVtO1xufVxuLnRvZG8ge1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAxZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIDFmciBhdXRvIGF1dG87XG4gIGdhcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE4MywgMjU1KTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cbi50b2RvLWJ0biB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiBub25lO1xufVxuLmRlbGV0ZS10b2RvLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbi5kZWxldGUtdG9kby1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMyLCA5NSwgOTUpO1xufVxuLmRvbmUtdG9kby1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cbi5kb25lLXRvZG8tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDksIDIxNCwgOSk7XG59XG4uaGVhZGVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG4ucG9wdXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTE1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG4gIHdpZHRoOiAzODBweDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAycHggMnB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdHJhbnNpdGlvbjogdG9wIDBtcyBlYXNlLWluLW91dCAyMDBtcywgb3BhY2l0eSAyMDBtcyBlYXNlLWluLW91dCAwbXMsXG4gICAgdHJhbnNmb3JtIDIwbXMgZWFzZS1pbi1vdXQgMG1zO1xufVxuLnBvcHVwLmFjdGl2ZSB7XG4gIHRvcDogNTAlO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogdG9wIDBtcyBlYXNlLWluLW91dCAwbXMsIG9wYWNpdHkgMjAwbXMgZWFzZS1pbi1vdXQgMG1zLFxuICAgIHRyYW5zZm9ybSAyMG1zIGVhc2UtaW4tb3V0IDBtcztcbn1cbi5wb3B1cCAuY2xvc2UtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjODg4O1xuICBjb2xvcjogI2VlZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBvcHVwIC5mb3JtIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzIyMjtcbiAgbWFyZ2luOiAxMHB4IDBweCAyMHB4O1xuICBmb250LXNpemU6IDI1cHg7XG59XG4ucG9wdXAgLmZvcm0gLmZvcm0tZWxlbWVudCB7XG4gIG1hcmdpbjogMTVweCAwcHg7XG59XG4ucG9wdXAgLmZvcm0gLmZvcm0tZWxlbWVudCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMyMjI7XG59XG4ucG9wdXAgLmZvcm0gLmZvcm0tZWxlbWVudCBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucG9wdXAgLmZvcm0gLmZvcm0tZWxlbWVudCBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYmFja2dyb3VuZDogIzE3NWU5ODtcbiAgY29sb3I6ICNmNWY1ZjU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNyZWF0ZS10b2RvLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4YWJlMDtcbiAgY29sb3I6ICNmNWY1ZjU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDMxcHg7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggIzAwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMiBlYXNlO1xufVxuLmNyZWF0ZS10b2RvLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NWI5ZTY7XG59XG4uY3JlYXRlLXRvZG8tYnRuOmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggZGFya3NsYXRlZ3JheTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XG59XG5cbi5wb3B1cC0yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICB3aWR0aDogMzgwcHg7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRyYW5zaXRpb246IHRvcCAwbXMgZWFzZS1pbi1vdXQgMjAwbXMsIG9wYWNpdHkgMjAwbXMgZWFzZS1pbi1vdXQgMG1zLFxuICAgIHRyYW5zZm9ybSAyMG1zIGVhc2UtaW4tb3V0IDBtcztcbn1cbi5wb3B1cC0yLmFjdGl2ZSB7XG4gIHRvcDogNTAlO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogdG9wIDBtcyBlYXNlLWluLW91dCAwbXMsIG9wYWNpdHkgMjAwbXMgZWFzZS1pbi1vdXQgMG1zLFxuICAgIHRyYW5zZm9ybSAyMG1zIGVhc2UtaW4tb3V0IDBtcztcbn1cbi5wb3B1cC0yIC5jbG9zZS1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG4gIGNvbG9yOiAjZWVlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucG9wdXAtMiAuZm9ybSBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyMjI7XG4gIG1hcmdpbjogMTBweCAwcHggMjBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLnBvcHVwLTIgLmZvcm0gLmZvcm0tZWxlbWVudCB7XG4gIG1hcmdpbjogMTVweCAwcHg7XG59XG4ucG9wdXAtMiAuZm9ybSAuZm9ybS1lbGVtZW50IGxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzIyMjtcbn1cbi5wb3B1cC0yIC5mb3JtIC5mb3JtLWVsZW1lbnQgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnBvcHVwLTIgLmZvcm0gLmZvcm0tZWxlbWVudCBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYmFja2dyb3VuZDogIzE3NWU5ODtcbiAgY29sb3I6ICNmNWY1ZjU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxnREFBZ0Q7RUFDaEQsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7QUFDQTtFQUNF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RUFDekIsY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGlDQUFpQztFQUNqQywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxVQUFVO0VBQ1YseUNBQXlDO0VBQ3pDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLCtDQUErQztFQUMvQyxtQkFBbUI7RUFDbkI7a0NBQ2dDO0FBQ2xDO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsVUFBVTtFQUNWLHlDQUF5QztFQUN6QztrQ0FDZ0M7QUFDbEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxufVxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuLnNpZGViYXIge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgcGFkZGluZzogMWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg5OWQ2O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuLnVzZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMmVtO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxudWwgbGkge1xcbiAgbWFyZ2luOiA0cHg7XFxufVxcblxcbi5idG4ge1xcbiAgYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4OTlkNjtcXG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwIDAgNHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjhweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgcGFkZGluZzogMTNweCAxOXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMnM7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmJ0bjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjYjBmNjtcXG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwIDAgNHB4O1xcbiAgYm90dG9tOiAtNHB4O1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBsZWZ0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmJ0bjptYWluLFxcbi5idG46Zm9jdXMge1xcbiAgdXNlci1zZWxlY3Q6IGF1dG87XFxufVxcblxcbi5idG46aG92ZXI6bm90KDpkaXNhYmxlZCkge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7XFxufVxcblxcbi5idG46ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBhdXRvO1xcbn1cXG5cXG4uYnRuOmFjdGl2ZTphZnRlciB7XFxuICBib3JkZXItd2lkdGg6IDAgMCAwcHg7XFxufVxcblxcbi5idG46YWN0aXZlIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNlbTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzBmNmRiYSwgIzE0MTQxMyk7XFxufVxcbi50b2RvcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMWVtO1xcbn1cXG4udG9kbyB7XFxuICB3aWR0aDogODAlO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIDFmciBhdXRvIGF1dG87XFxuICBnYXA6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTgzLCAyNTUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG59XFxuLnRvZG8tYnRuIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi5kZWxldGUtdG9kby1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG4uZGVsZXRlLXRvZG8tYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzIsIDk1LCA5NSk7XFxufVxcbi5kb25lLXRvZG8tYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG4uZG9uZS10b2RvLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOSwgMjE0LCA5KTtcXG59XFxuLmhlYWRlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxufVxcbi5wb3B1cCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbiAgd2lkdGg6IDM4MHB4O1xcbiAgcGFkZGluZzogMjBweCAzMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zaXRpb246IHRvcCAwbXMgZWFzZS1pbi1vdXQgMjAwbXMsIG9wYWNpdHkgMjAwbXMgZWFzZS1pbi1vdXQgMG1zLFxcbiAgICB0cmFuc2Zvcm0gMjBtcyBlYXNlLWluLW91dCAwbXM7XFxufVxcbi5wb3B1cC5hY3RpdmUge1xcbiAgdG9wOiA1MCU7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiB0b3AgMG1zIGVhc2UtaW4tb3V0IDBtcywgb3BhY2l0eSAyMDBtcyBlYXNlLWluLW91dCAwbXMsXFxuICAgIHRyYW5zZm9ybSAyMG1zIGVhc2UtaW4tb3V0IDBtcztcXG59XFxuLnBvcHVwIC5jbG9zZS1idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMHB4O1xcbiAgcmlnaHQ6IDEwcHg7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGJhY2tncm91bmQ6ICM4ODg7XFxuICBjb2xvcjogI2VlZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnBvcHVwIC5mb3JtIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjMjIyO1xcbiAgbWFyZ2luOiAxMHB4IDBweCAyMHB4O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG4ucG9wdXAgLmZvcm0gLmZvcm0tZWxlbWVudCB7XFxuICBtYXJnaW46IDE1cHggMHB4O1xcbn1cXG4ucG9wdXAgLmZvcm0gLmZvcm0tZWxlbWVudCBsYWJlbCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzIyMjtcXG59XFxuLnBvcHVwIC5mb3JtIC5mb3JtLWVsZW1lbnQgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5wb3B1cCAuZm9ybSAuZm9ybS1lbGVtZW50IGJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBiYWNrZ3JvdW5kOiAjMTc1ZTk4O1xcbiAgY29sb3I6ICNmNWY1ZjU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jcmVhdGUtdG9kby1idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBib3R0b206IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDhhYmUwO1xcbiAgY29sb3I6ICNmNWY1ZjU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDMxcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICB3aWR0aDogNjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjMDAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMiBlYXNlO1xcbn1cXG4uY3JlYXRlLXRvZG8tYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NWI5ZTY7XFxufVxcbi5jcmVhdGUtdG9kby1idG46YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggZGFya3NsYXRlZ3JheTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcbn1cXG5cXG4ucG9wdXAtMiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbiAgd2lkdGg6IDM4MHB4O1xcbiAgcGFkZGluZzogMjBweCAzMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zaXRpb246IHRvcCAwbXMgZWFzZS1pbi1vdXQgMjAwbXMsIG9wYWNpdHkgMjAwbXMgZWFzZS1pbi1vdXQgMG1zLFxcbiAgICB0cmFuc2Zvcm0gMjBtcyBlYXNlLWluLW91dCAwbXM7XFxufVxcbi5wb3B1cC0yLmFjdGl2ZSB7XFxuICB0b3A6IDUwJTtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IHRvcCAwbXMgZWFzZS1pbi1vdXQgMG1zLCBvcGFjaXR5IDIwMG1zIGVhc2UtaW4tb3V0IDBtcyxcXG4gICAgdHJhbnNmb3JtIDIwbXMgZWFzZS1pbi1vdXQgMG1zO1xcbn1cXG4ucG9wdXAtMiAuY2xvc2UtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBiYWNrZ3JvdW5kOiAjODg4O1xcbiAgY29sb3I6ICNlZWU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wb3B1cC0yIC5mb3JtIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjMjIyO1xcbiAgbWFyZ2luOiAxMHB4IDBweCAyMHB4O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG4ucG9wdXAtMiAuZm9ybSAuZm9ybS1lbGVtZW50IHtcXG4gIG1hcmdpbjogMTVweCAwcHg7XFxufVxcbi5wb3B1cC0yIC5mb3JtIC5mb3JtLWVsZW1lbnQgbGFiZWwge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6ICMyMjI7XFxufVxcbi5wb3B1cC0yIC5mb3JtIC5mb3JtLWVsZW1lbnQgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5wb3B1cC0yIC5mb3JtIC5mb3JtLWVsZW1lbnQgYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGJhY2tncm91bmQ6ICMxNzVlOTg7XFxuICBjb2xvcjogI2Y1ZjVmNTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHRvZG9EZXBlbmRlbmNpZXMgfSBmcm9tIFwiLlwiO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IocHJvamVjdFRpdGxlKSB7XG4gICAgdGhpcy5wcm9qZWN0VGl0bGUgPSBwcm9qZWN0VGl0bGU7XG4gICAgdGhpcy50b2RvSXRlbXMgPSBbXTtcbiAgfVxuXG4gIGFkZFRvZG9JdGVtKHRvZG9JdGVtKSB7XG4gICAgdGhpcy50b2RvSXRlbXMucHVzaCh0b2RvSXRlbSk7XG4gIH1cbiAgZGVsZXRlVG9kb0l0ZW0odG9kb0l0ZW0pIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLnRvZG9JdGVtcy5pbmRleE9mKHRvZG9JdGVtKTtcbiAgICB0aGlzLnRvZG9JdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG4gIGdldFRvZG9zKCkge1xuICAgIHJldHVybiB0aGlzLnRvZG9JdGVtcztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gIGxldCBwcm9qZWN0ID0gdG9kb0RlcGVuZGVuY2llcy5wcm9qZWN0cy5maW5kKFxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LnByb2plY3RUaXRsZSA9PSBwcm9qZWN0TmFtZVxuICApO1xuICByZXR1cm4gcHJvamVjdDtcbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gIHJldHVybiB0b2RvRGVwZW5kZW5jaWVzLnByb2plY3RzLnNvbWUoXG4gICAgKHByb2plY3QpID0+IHByb2plY3QucHJvamVjdFRpdGxlID09PSBwcm9qZWN0TmFtZVxuICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgdG9kb0RlcGVuZGVuY2llcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KG5hbWUpKTtcbn1cblxuZXhwb3J0IHsgUHJvamVjdCwgY3JlYXRlUHJvamVjdCwgZ2V0UHJvamVjdCwgY2hlY2tQcm9qZWN0IH07XG4iLCJpbXBvcnQgeyB0b2RvRGVwZW5kZW5jaWVzIH0gZnJvbSBcIi5cIjtcblxuY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG8oXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgcHJpb3JpdHksXG4gIHByb2plY3RUb0luc2VydCA9IFwiXCJcbikge1xuICBsZXQgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICBpZiAocHJvamVjdFRvSW5zZXJ0ID09PSBcIlwiKSB7XG4gICAgdG9kb0RlcGVuZGVuY2llcy5kZWZhdWx0UHJvamVjdC5hZGRUb2RvSXRlbSh0b2RvKTtcbiAgfVxuICB0b2RvRGVwZW5kZW5jaWVzLnByb2plY3RzLmZvckVhY2goKGN1cnJlbnRQcm9qZWN0KSA9PiB7XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0LnByb2plY3RUaXRsZSA9PT0gcHJvamVjdFRvSW5zZXJ0KSB7XG4gICAgICBjdXJyZW50UHJvamVjdC5hZGRUb2RvSXRlbSh0b2RvKTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlVG9kbzIoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGR1ZURhdGUsXG4gIHByaW9yaXR5LFxuICBwcm9qZWN0VG9JbnNlcnQsXG59KSB7XG4gIGxldCB0b2RvID0gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdFRvSW5zZXJ0KTtcbiAgaWYgKHByb2plY3RUb0luc2VydCA9PT0gXCJcIikge1xuICAgIHRvZG9EZXBlbmRlbmNpZXMuZGVmYXVsdFByb2plY3QuYWRkVG9kb0l0ZW0odG9kbyk7XG4gIH1cbiAgdG9kb0RlcGVuZGVuY2llcy5wcm9qZWN0cy5mb3JFYWNoKChjdXJyZW50UHJvamVjdCkgPT4ge1xuICAgIGlmIChjdXJyZW50UHJvamVjdC5wcm9qZWN0VGl0bGUgPT09IHByb2plY3RUb0luc2VydCkge1xuICAgICAgY3VycmVudFByb2plY3QuYWRkVG9kb0l0ZW0odG9kbyk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IHsgVG9kbywgY3JlYXRlVG9kbywgY3JlYXRlVG9kbzIgfTtcbiIsImltcG9ydCB7IHRvZG9EZXBlbmRlbmNpZXMgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdCwgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0XCI7XG5pbXBvcnQgeyBtYW5hZ2VQcm9qZWN0UG9wdXAsIG1hbmFnZVRvZG9Qb3B1cCB9IGZyb20gXCIuL21hbmFnZS1wb3B1cHNcIjtcblxuZnVuY3Rpb24gcHJvamVjdHNMb2FkKHByb2plY3ROYW1lID0gXCJEZWZhdWx0XCIpIHtcbiAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWNvbnRhaW5lclwiKTtcbiAgcHJvamVjdHNEaXYuaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJNeSBsaXN0XCI7XG4gIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gIHJlbmRlclByb2plY3RUb2Rvcyhwcm9qZWN0TmFtZSk7XG4gIHJlbmRlclByb2plY3RzKCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCkge1xuICAvLyBjcmVhdGUgdW5vcmRlcmVkIGxpc3QgZm9yIHByb2plY3QgbmFtZXNcbiAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHVsKTtcblxuICAvLyBmb3IgZWFjaCBwcm9qZWN0IGNyZWF0ZSBsaXN0IGVsZW1lbnQgYW5kIGFkZCBldmVudCBsaXN0ZW5lclxuICB0b2RvRGVwZW5kZW5jaWVzLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3QucHJvamVjdFRpdGxlO1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXG4gICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vIHdoZW4gY2xpY2tlZCBzaG93IHRoZSBwcm9qZWN0J3MgdG9kb3MgYW5kIGNoYW5nZSB0aGUgY3VycmVudCBwcm9qZWN0IHRvIHRoYXQgcHJvamVjdFxuICAgICAgdG9kb0RlcGVuZGVuY2llcy5zZXRDdXJyZW50UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICBjaGFuZ2VQcm9qZWN0SGVhZGVyKHByb2plY3ROYW1lKTtcbiAgICAgIHJlbmRlclByb2plY3RUb2Rvcyhwcm9qZWN0TmFtZSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VQcm9qZWN0SGVhZGVyKHByb2plY3RUaXRsZSkge1xuICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XG4gIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0VGl0bGU7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RUb2Rvcyhwcm9qZWN0TmFtZSA9IFwiRGVmYXVsdFwiKSB7XG4gIC8vIGdldCB0aGUgc3BlY2lmZWQgcHJvamVjdCBvYmplY3RcbiAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QocHJvamVjdE5hbWUpO1xuICAvLyBnZXQgdGhlIHByb2plY3Qgb2JqZWN0J3MgdG9kbyBhcnJheVxuICBjb25zdCBwcm9qZWN0VG9kb3MgPSBwcm9qZWN0LmdldFRvZG9zKCk7XG5cbiAgY2hhbmdlUHJvamVjdEhlYWRlcihwcm9qZWN0LnByb2plY3RUaXRsZSk7XG5cbiAgY29uc3QgdG9kb3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zXCIpO1xuICB0b2Rvc0Rpdi5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIC8vIGZvciBlYWNoIHRvZG8gaW4gdG9kbyBhcnJheSwgY3JlYXRlIGRpdiB3aXRoIHRvZG8ncyBpbmZvc1xuICBwcm9qZWN0VG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG5cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBjcmVhdGVCdXR0b24oXCJ0b2RvLWJ0biBkZWxldGUtdG9kby1idG5cIik7XG4gICAgY29uc3QgZG9uZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihcInRvZG8tYnRuIGRvbmUtdG9kby1idG5cIik7XG4gICAgY29uc3QgdGl0bGVTcGFuID0gY3JlYXRlU3Bhbih0b2RvLnRpdGxlKTtcbiAgICBjb25zdCBkdWVEYXRlU3BhbiA9IGNyZWF0ZVNwYW4odG9kby5kdWVEYXRlKTtcbiAgICBjb25zdCBwcmlvcml0eVNwYW4gPSBjcmVhdGVTcGFuKHRvZG8ucHJpb3JpdHkpO1xuXG4gICAgLy8gY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAvLyBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcInRvZG8tYnRuXCIsIFwiZGVsZXRlLXRvZG8tYnRuXCIpO1xuICAgIC8vIGNvbnN0IGRvbmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIC8vIGRvbmVCdXR0b24uY2xhc3NMaXN0LmFkZChcInRvZG8tYnRuXCIsIFwiZG9uZS10b2RvLWJ0blwiKTtcbiAgICAvLyBjb25zdCB0aXRsZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAvLyB0aXRsZVNwYW4udGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgIC8vIGNvbnN0IGR1ZURhdGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgLy8gZHVlRGF0ZVNwYW4udGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG4gICAgLy8gY29uc3QgcHJpb3JpdHlTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgLy8gcHJpb3JpdHlTcGFuLnRleHRDb250ZW50ID0gdG9kby5wcmlvcml0eTtcblxuICAgIHRvZG9EaXYuYXBwZW5kKFxuICAgICAgZGVsZXRlQnV0dG9uLFxuICAgICAgZG9uZUJ1dHRvbixcbiAgICAgIHRpdGxlU3BhbixcbiAgICAgIGR1ZURhdGVTcGFuLFxuICAgICAgcHJpb3JpdHlTcGFuXG4gICAgKTtcbiAgICB0b2Rvc0Rpdi5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcblxuICAgIC8vIGRpdi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIC8vIGRpdi5hcHBlbmRDaGlsZChkb25lQnV0dG9uKTtcbiAgICAvLyBkaXYuYXBwZW5kQ2hpbGQodGl0bGVTcGFuKTtcbiAgICAvLyBkaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZVNwYW4pO1xuICAgIC8vIGRpdi5hcHBlbmRDaGlsZChwcmlvcml0eVNwYW4pO1xuXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBwcm9qZWN0LmRlbGV0ZVRvZG9JdGVtKHRvZG8pO1xuICAgICAgcmVuZGVyUHJvamVjdFRvZG9zKHByb2plY3ROYW1lKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihjbGFzc2VzKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5jbGFzc05hbWUgPSBjbGFzc2VzO1xuICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTcGFuKHRleHQpIHtcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIHNwYW47XG59XG5cbmV4cG9ydCB7IHJlbmRlclByb2plY3RzLCByZW5kZXJQcm9qZWN0VG9kb3MsIHByb2plY3RzTG9hZCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlVG9kbywgY3JlYXRlVG9kbzIgfSBmcm9tIFwiLi9jcmVhdGUtdG9kb1wiO1xuaW1wb3J0IHsgUHJvamVjdCwgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0XCI7XG5pbXBvcnQgeyBpbml0aWFsaXplRG9tIH0gZnJvbSBcIi4vaW5pdGlhbC1wcm9qZWN0cy1sb2FkXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxubGV0IHRvZG9EZXBlbmRlbmNpZXMgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcIkRlZmF1bHRcIik7XG4gIGxldCBwcm9qZWN0cyA9IFtkZWZhdWx0UHJvamVjdF07XG4gIGxldCBjdXJyZW50UHJvamVjdCA9IFwiRGVmYXVsdFwiO1xuXG4gIGxldCBzZXRDdXJyZW50UHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuICB9O1xuICBsZXQgZ2V0Q3VycmVudFByb2plY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xuICB9O1xuICByZXR1cm4ge1xuICAgIHByb2plY3RzLFxuICAgIGRlZmF1bHRQcm9qZWN0LFxuICAgIHNldEN1cnJlbnRQcm9qZWN0LFxuICAgIGdldEN1cnJlbnRQcm9qZWN0LFxuICB9O1xufSkoKTtcblxuLy8gaW5pdGlhbERvbVNldHVwKCk7XG5cbi8vIGNyZWF0ZSBwcm9qZWN0XG5jcmVhdGVQcm9qZWN0KFwiR3JvY2VyeVwiKTtcbi8vIGNyZWF0ZSBwcm9qZWN0XG5jcmVhdGVQcm9qZWN0KFwiU2Nob29sXCIpO1xuXG4vLyBjcmVhdGUgdG9kbyAtPiBhZGRlZCB0byBkZWZhdWx0IHByb2plY3RcbmNyZWF0ZVRvZG8oXCJKdWljZVwiLCBcIk5lZWQganVpY2VcIiwgXCI1LzIwLzIwMjRcIiwgXCJsb3dcIik7XG5cbi8vIGNyZWF0ZSB0b2RvIC0+IGFkZGVkIHRvIEdyb2NlcnkgcHJvamVjdFxuY3JlYXRlVG9kbyhcIkZydWl0c1wiLCBcImJ1eSBmcnVpdHNcIiwgXCI1LzIyLzIwMjRcIiwgXCJsb3dcIiwgXCJHcm9jZXJ5XCIpO1xuXG4vLyBjcmVhdGUgdG9kbyAtPiBhZGRlZCB0byBkZWZhdWx0IHByb2plY3RcbmNyZWF0ZVRvZG8oXCJGb29kXCIsIFwibmVlZCBmb29kXCIsIFwiNS8yMy8yMDI0XCIsIFwiaGlnaFwiKTtcbmNyZWF0ZVRvZG8oXCJGb29kMlwiLCBcIm5lZWQgZm9vZFwiLCBcIjUvMjMvMjAyNFwiLCBcImhpZ2hcIik7XG5jcmVhdGVUb2RvKFwiRm9vZDNcIiwgXCJuZWVkIGZvb2RcIiwgXCI1LzIzLzIwMjRcIiwgXCJoaWdoXCIpO1xuXG5jcmVhdGVUb2RvMih7XG4gIHRpdGxlOiBcIkZvb2Q0XCIsXG4gIGRlc2NyaXB0aW9uOiBcIm5lZWQgZm9vZFwiLFxuICBkdWVEYXRlOiBcIjUvMjMvMjAyNFwiLFxuICBwcmlvcml0eTogXCJoaWdoXCIsXG4gIHByb2plY3RUb0luc2VydDogXCJcIixcbn0pO1xuY3JlYXRlVG9kbzIoe1xuICB0aXRsZTogXCJGb29kNVwiLFxuICBkZXNjcmlwdGlvbjogXCJuZWVkIGZvb2RcIixcbiAgZHVlRGF0ZTogXCI1LzIzLzIwMjRcIixcbiAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICBwcm9qZWN0VG9JbnNlcnQ6IFwiR3JvY2VyeVwiLFxufSk7XG5cbmluaXRpYWxpemVEb20oKTtcblxuZXhwb3J0IHsgdG9kb0RlcGVuZGVuY2llcyB9O1xuIiwiaW1wb3J0IHsgcHJvamVjdHNMb2FkIH0gZnJvbSBcIi4vZG9tLW1hbmlwXCI7XG5pbXBvcnQgeyBtYW5hZ2VQcm9qZWN0UG9wdXAsIG1hbmFnZVRvZG9Qb3B1cCB9IGZyb20gXCIuL21hbmFnZS1wb3B1cHNcIjtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZURvbSgpIHtcbiAgcHJvamVjdHNMb2FkKCk7XG4gIG1hbmFnZVByb2plY3RQb3B1cCgpO1xuICBtYW5hZ2VUb2RvUG9wdXAoKTtcbn1cblxuZXhwb3J0IHsgaW5pdGlhbGl6ZURvbSB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgY2hlY2tQcm9qZWN0IH0gZnJvbSBcIi4vY3JlYXRlLXByb2plY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVRvZG8gfSBmcm9tIFwiLi9jcmVhdGUtdG9kb1wiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdFRvZG9zLCBwcm9qZWN0c0xvYWQgfSBmcm9tIFwiLi9kb20tbWFuaXBcIjtcbmltcG9ydCB7IHRvZG9EZXBlbmRlbmNpZXMgfSBmcm9tIFwiLlwiO1xuXG4vLyBDcmVhdGUgUHJvamVjdCBQb3B1cFxuXG5jb25zdCBwcm9qZWN0UG9wdXBFbGVtZW50cyA9IHtcbiAgY3JlYXRlQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS1wcm9qZWN0LWJ0blwiKSxcbiAgY2xvc2VCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAgLmNsb3NlLWJ0blwiKSxcbiAgZG9uZUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkb25lLWJ0blwiKSxcbiAgcG9wdXA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIiksXG4gIHByb2plY3ROYW1lSW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uYW1lXCIpLFxufTtcblxuZnVuY3Rpb24gdG9nZ2xlUG9wdXAocG9wdXAsIGFjdGlvbikge1xuICBwb3B1cC5jbGFzc0xpc3RbYWN0aW9uXShcImFjdGl2ZVwiKTtcbn1cblxuZnVuY3Rpb24gbWFuYWdlUHJvamVjdFBvcHVwKCkge1xuICBwcm9qZWN0UG9wdXBFbGVtZW50cy5jcmVhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gICAgdG9nZ2xlUG9wdXAocHJvamVjdFBvcHVwRWxlbWVudHMucG9wdXAsIFwiYWRkXCIpXG4gICk7XG4gIHByb2plY3RQb3B1cEVsZW1lbnRzLmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICAgIHRvZ2dsZVBvcHVwKHByb2plY3RQb3B1cEVsZW1lbnRzLnBvcHVwLCBcInJlbW92ZVwiKVxuICApO1xuICBwcm9qZWN0UG9wdXBFbGVtZW50cy5kb25lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0UG9wdXBFbGVtZW50cy5wcm9qZWN0TmFtZUlucHV0LnZhbHVlO1xuICAgIGlmICghY2hlY2tQcm9qZWN0KHByb2plY3ROYW1lKSkge1xuICAgICAgY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICB0b2RvRGVwZW5kZW5jaWVzLnNldEN1cnJlbnRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgIHByb2plY3RzTG9hZCh0b2RvRGVwZW5kZW5jaWVzLmdldEN1cnJlbnRQcm9qZWN0KCkpO1xuICAgIH1cbiAgICB0b2dnbGVQb3B1cChwcm9qZWN0UG9wdXBFbGVtZW50cy5wb3B1cCwgXCJyZW1vdmVcIik7XG4gIH0pO1xufVxuXG4vLyBDcmVhdGUgVG9kbyBQb3B1cFxuXG5jb25zdCB0b2RvUG9wdXBFbGVtZW50cyA9IHtcbiAgY3JlYXRlQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NyZWF0ZS10b2RvLWJ0blwiKSxcbiAgY2xvc2VCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtMiAuY2xvc2UtYnRuXCIpLFxuICBkb25lQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZG9uZS1idG5cIiksXG4gIHBvcHVwOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLTJcIiksXG4gIG5hbWVJbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLW5hbWVcIiksXG4gIGRlc2NyaXB0aW9uSW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kZXNjcmlwdGlvblwiKSxcbiAgZHVlRGF0ZUlucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZS1kYXRlXCIpLFxuICBwcmlvcml0eUlucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpLFxufTtcblxuZnVuY3Rpb24gcmVzZXRUb2RvRm9ybSgpIHtcbiAgdG9kb1BvcHVwRWxlbWVudHMubmFtZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgdG9kb1BvcHVwRWxlbWVudHMuZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IFwiXCI7XG4gIHRvZG9Qb3B1cEVsZW1lbnRzLmR1ZURhdGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIHRvZG9Qb3B1cEVsZW1lbnRzLnByaW9yaXR5SW5wdXQudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBtYW5hZ2VUb2RvUG9wdXAoKSB7XG4gIHRvZG9Qb3B1cEVsZW1lbnRzLmNyZWF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlc2V0VG9kb0Zvcm0oKTtcbiAgICB0b2dnbGVQb3B1cCh0b2RvUG9wdXBFbGVtZW50cy5wb3B1cCwgXCJhZGRcIik7XG4gIH0pO1xuICB0b2RvUG9wdXBFbGVtZW50cy5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICB0b2dnbGVQb3B1cCh0b2RvUG9wdXBFbGVtZW50cy5wb3B1cCwgXCJyZW1vdmVcIilcbiAgKTtcbiAgdG9kb1BvcHVwRWxlbWVudHMuZG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9EZXRhaWxzID0ge1xuICAgICAgbmFtZTogdG9kb1BvcHVwRWxlbWVudHMubmFtZUlucHV0LnZhbHVlLFxuICAgICAgZGVzY3JpcHRpb246IHRvZG9Qb3B1cEVsZW1lbnRzLmRlc2NyaXB0aW9uSW5wdXQudmFsdWUsXG4gICAgICBkdWVEYXRlOiB0b2RvUG9wdXBFbGVtZW50cy5kdWVEYXRlSW5wdXQudmFsdWUsXG4gICAgICBwcmlvcml0eTogdG9kb1BvcHVwRWxlbWVudHMucHJpb3JpdHlJbnB1dC52YWx1ZSxcbiAgICB9O1xuXG4gICAgY3JlYXRlVG9kbyhcbiAgICAgIHRvZG9EZXRhaWxzLm5hbWUsXG4gICAgICB0b2RvRGV0YWlscy5kZXNjcmlwdGlvbixcbiAgICAgIHRvZG9EZXRhaWxzLmR1ZURhdGUsXG4gICAgICB0b2RvRGV0YWlscy5wcmlvcml0eSxcbiAgICAgIHRvZG9EZXBlbmRlbmNpZXMuZ2V0Q3VycmVudFByb2plY3QoKVxuICAgICk7XG5cbiAgICByZW5kZXJQcm9qZWN0VG9kb3ModG9kb0RlcGVuZGVuY2llcy5nZXRDdXJyZW50UHJvamVjdCgpKTtcbiAgICB0b2dnbGVQb3B1cCh0b2RvUG9wdXBFbGVtZW50cy5wb3B1cCwgXCJyZW1vdmVcIik7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBtYW5hZ2VQcm9qZWN0UG9wdXAsIG1hbmFnZVRvZG9Qb3B1cCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=