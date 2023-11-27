"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background: linear-gradient(45deg, #ec5242 50%, #2e3192 50%);\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.to-do-container {\n  width: 45%;\n  color: #777272;\n  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);\n  border-radius: 15px;\n  background-color: white;\n  padding: 10px 0;\n}\n\n.to-do-inner {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 17px 17px 3px;\n  border-bottom: 1px solid #dfd6d6;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.fa-arrows-rotate {\n  animation: rotate 2s linear infinite;\n}\n\n.fa-arrows-rotate:hover {\n  animation: none;\n}\n\n.error-msg {\n  display: none;\n  margin: 0 auto;\n  width: max-content;\n  font-weight: 600;\n  color: #d8000c;\n  background-color: #ffbaba;\n  border-radius: 8px;\n  border: 1px solid;\n  padding: 10px;\n}\n\n.list-container-inner {\n  padding: 17px;\n  border-bottom: 1px solid #dfd6d6;\n  font-weight: 600;\n}\n\n.list-container-inner:first-child {\n  padding-top: 0;\n}\n\n.list-container-inner:last-child {\n  border: none;\n}\n\n.list-container-inner span {\n  padding-left: 15px;\n}\n\n.remove-task-btn {\n  float: right;\n}\n\n@keyframes jiggle {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  25% {\n    transform: translateX(-2px);\n  }\n\n  50% {\n    transform: translateX(2px);\n  }\n\n  75% {\n    transform: translateX(-2px);\n  }\n}\n\n.remove-task-btn:hover {\n  animation: jiggle 0.5s ease-in-out 1;\n}\n\n.add-task-container {\n  display: flex;\n  align-items: center;\n  padding: 7px 17px;\n}\n\ninput {\n  flex: 1;\n  font-style: italic;\n  border: none;\n  border-bottom: 1px solid #dfd6d6;\n  padding: 7px 0;\n}\n\ninput:focus {\n  outline: none;\n  border-color: #dfd6d6;\n}\n\n.add-task-btn {\n  border: none;\n  font-size: 18px;\n  border-bottom: 1px solid #dfd6d6;\n  background-color: white;\n  padding: 7px 0;\n}\n\n.clear-task-btn {\n  display: block;\n  margin: 0 auto;\n  padding: 15px;\n  color: #fff;\n  background-color: #ec5242;\n  font-size: 14px;\n  font-weight: 700;\n  border: none;\n  border-radius: 18px;\n  transition: background-color 1s, color 1s, text-decoration 1s, border 1s;\n}\n\n.clear-task-btn:hover {\n  color: #ec5242;\n  background-color: #fff;\n  border: 1px solid #ec5242;\n}\n\n@media (width <= 768px) {\n  .to-do-container {\n    width: 75%;\n  }\n}\n\n@media (width <= 600px) {\n  .to-do-container {\n    width: 85%;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_addRemoveTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addRemoveTask.js */ \"./src/modules/addRemoveTask.js\");\n/* harmony import */ var _modules_renderEditTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderEditTask.js */ \"./src/modules/renderEditTask.js\");\n/* harmony import */ var _modules_taskStatus_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/taskStatus.js */ \"./src/modules/taskStatus.js\");\n/* harmony import */ var _modules_clearTasks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/clearTasks.js */ \"./src/modules/clearTasks.js\");\n\n\n\n\n\n\n(0,_modules_addRemoveTask_js__WEBPACK_IMPORTED_MODULE_1__.handleRemoveTask)();\n(0,_modules_addRemoveTask_js__WEBPACK_IMPORTED_MODULE_1__.handleAddTask)();\n\n(0,_modules_renderEditTask_js__WEBPACK_IMPORTED_MODULE_2__.handleEditTask)();\n(0,_modules_renderEditTask_js__WEBPACK_IMPORTED_MODULE_2__.handleWindowLoad)();\n\n(0,_modules_taskStatus_js__WEBPACK_IMPORTED_MODULE_3__.handletaskStatus)();\n(0,_modules_taskStatus_js__WEBPACK_IMPORTED_MODULE_3__.handleTaskDefaultStatus)();\n\n(0,_modules_clearTasks_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/modules/addRemoveTask.js":
/*!**************************************!*\
  !*** ./src/modules/addRemoveTask.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleAddTask: () => (/* binding */ handleAddTask),\n/* harmony export */   handleRemoveTask: () => (/* binding */ handleRemoveTask),\n/* harmony export */   updateIndex: () => (/* binding */ updateIndex)\n/* harmony export */ });\n/* harmony import */ var _renderEditTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderEditTask.js */ \"./src/modules/renderEditTask.js\");\n/* harmony import */ var _updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateLocalStorage.js */ \"./src/modules/updateLocalStorage.js\");\n/* harmony import */ var _taskObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskObject.js */ \"./src/modules/taskObject.js\");\n\n\n\n\nconst listContainer = document.getElementById('list-container');\nconst addTaskValue = document.querySelector('#add-task');\nconst errorMsg = document.querySelector('.error-msg');\n\nconst showErrorMessage = () => {\n  errorMsg.style.display = 'block';\n};\n\nconst hideErrorMessage = () => {\n  errorMsg.style.display = 'none';\n};\n\nconst addTaskToList = () => {\n  if (!addTaskValue.value.trim()) {\n    showErrorMessage();\n    return;\n  }\n\n  const newTask = {\n    description: addTaskValue.value,\n    completed: false,\n    index: _taskObject_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].length + 1,\n  };\n\n  _taskObject_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].push(newTask);\n  (0,_updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_renderEditTask_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();\n  addTaskValue.value = '';\n};\n\naddTaskValue.addEventListener('focus', hideErrorMessage);\n\naddTaskValue.addEventListener('input', hideErrorMessage);\n\nconst updateIndex = () => {\n  _taskObject_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach((task, i) => {\n    task.index = i + 1;\n  });\n};\n\nconst removeTaskFromList = (id) => {\n  _taskObject_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].splice(id, 1);\n  updateIndex();\n  (0,_updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_renderEditTask_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();\n};\n\n/** ********  Events  ************ */\n\nconst handleRemoveTask = () => {\n  listContainer.addEventListener('click', (event) => {\n    if (event.target.classList.contains('remove-task-btn')) {\n      const taskId = event.target.parentNode.id;\n      removeTaskFromList(taskId);\n    }\n  });\n};\n\nconst handleAddTask = () => {\n  const addTaskBtn = document.querySelector('.add-task-btn');\n  const taskInput = document.querySelector('#add-task');\n\n  addTaskBtn.addEventListener('click', () => {\n    addTaskToList();\n  });\n\n  taskInput.addEventListener('keydown', (event) => {\n    if (event.key === 'Enter') {\n      addTaskToList();\n    }\n  });\n};\n\n\n//# sourceURL=webpack://todolist/./src/modules/addRemoveTask.js?");

/***/ }),

/***/ "./src/modules/clearTasks.js":
/*!***********************************!*\
  !*** ./src/modules/clearTasks.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderEditTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderEditTask.js */ \"./src/modules/renderEditTask.js\");\n/* harmony import */ var _addRemoveTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRemoveTask.js */ \"./src/modules/addRemoveTask.js\");\n/* harmony import */ var _updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateLocalStorage.js */ \"./src/modules/updateLocalStorage.js\");\n/* harmony import */ var _taskObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskObject.js */ \"./src/modules/taskObject.js\");\n\n\n\n\n\n\nconst clearCompleteTasks = () => {\n  const completedTaskIndices = [];\n\n  _taskObject_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].forEach((task, index) => {\n    if (task.completed === true) {\n      completedTaskIndices.push(index);\n    }\n  });\n\n  for (let i = completedTaskIndices.length - 1; i >= 0; i -= 1) {\n    _taskObject_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].splice(completedTaskIndices[i], 1);\n  }\n\n  (0,_addRemoveTask_js__WEBPACK_IMPORTED_MODULE_1__.updateIndex)();\n  (0,_updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_renderEditTask_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();\n};\n\nconst handleClearTask = () => {\n  const clearTaskBtn = document.querySelector('.clear-task-btn');\n  clearTaskBtn.addEventListener('click', () => {\n    clearCompleteTasks();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleClearTask);\n\n\n//# sourceURL=webpack://todolist/./src/modules/clearTasks.js?");

/***/ }),

/***/ "./src/modules/renderEditTask.js":
/*!***************************************!*\
  !*** ./src/modules/renderEditTask.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleEditTask: () => (/* binding */ handleEditTask),\n/* harmony export */   handleWindowLoad: () => (/* binding */ handleWindowLoad),\n/* harmony export */   renderTasks: () => (/* binding */ renderTasks)\n/* harmony export */ });\n/* harmony import */ var _taskObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskObject.js */ \"./src/modules/taskObject.js\");\n/* harmony import */ var _updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateLocalStorage.js */ \"./src/modules/updateLocalStorage.js\");\n\n\n\nconst listContainer = document.getElementById('list-container');\n\nconst renderTasks = () => {\n  listContainer.innerHTML = '';\n  _taskObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((task, index) => {\n    listContainer.innerHTML += ` <div id=\"${index}\" class=\"list-container-inner\">\n      <input class=\"check-box\" type=\"checkbox\">\n      <span class=\"task-description\">${task.description}</span>\n      <i class=\"fa-solid fa-trash remove-task-btn\"></i>\n    </div>`;\n  });\n};\n\nconst editTask = (taskSpan, taskId) => {\n  const taskDescription = taskSpan.textContent;\n  taskSpan.innerHTML = `<input type=\"text\" class=\"edit-task-input\" value=\"${taskDescription}\" />`;\n\n  const editInput = taskSpan.querySelector('.edit-task-input');\n  editInput.focus();\n\n  editInput.addEventListener('blur', () => {\n    _taskObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][taskId].description = editInput.value;\n    (0,_updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    renderTasks();\n  });\n};\n\n/** ********  Events  ************ */\n\nconst handleEditTask = () => {\n  listContainer.addEventListener('click', (event) => {\n    const { target } = event;\n\n    if (target.classList.contains('task-description')) {\n      const taskId = target.parentNode.id;\n      const taskSpan = target;\n\n      editTask(taskSpan, taskId);\n    }\n  });\n};\n\nconst handleWindowLoad = () => {\n  window.addEventListener('load', () => {\n    renderTasks();\n  });\n};\n\n\n//# sourceURL=webpack://todolist/./src/modules/renderEditTask.js?");

/***/ }),

/***/ "./src/modules/taskObject.js":
/*!***********************************!*\
  !*** ./src/modules/taskObject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tasks = JSON.parse(localStorage.getItem('Tasks')) || [];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasks);\n\n\n//# sourceURL=webpack://todolist/./src/modules/taskObject.js?");

/***/ }),

/***/ "./src/modules/taskStatus.js":
/*!***********************************!*\
  !*** ./src/modules/taskStatus.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleTaskDefaultStatus: () => (/* binding */ handleTaskDefaultStatus),\n/* harmony export */   handletaskStatus: () => (/* binding */ handletaskStatus)\n/* harmony export */ });\n/* harmony import */ var _taskObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskObject.js */ \"./src/modules/taskObject.js\");\n/* harmony import */ var _updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateLocalStorage.js */ \"./src/modules/updateLocalStorage.js\");\n\n\n\nconst listContainer = document.getElementById('list-container');\n\nconst taskStatusUpdate = (id, checked) => {\n  const task = _taskObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][id];\n  if (checked) {\n    task.completed = true;\n  } else {\n    task.completed = false;\n  }\n  (0,_updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\nconst handletaskStatus = () => {\n  listContainer.addEventListener('change', (event) => {\n    const { target } = event;\n    if (target.classList.contains('check-box')) {\n      taskStatusUpdate(target.parentNode.id, target.checked);\n    }\n  });\n};\n\nconst taskDefaultStatus = () => {\n  _taskObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((task) => {\n    task.completed = false;\n  });\n  (0,_updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\nconst handleTaskDefaultStatus = () => {\n  window.addEventListener('load', () => {\n    taskDefaultStatus();\n  });\n};\n\n\n//# sourceURL=webpack://todolist/./src/modules/taskStatus.js?");

/***/ }),

/***/ "./src/modules/updateLocalStorage.js":
/*!*******************************************!*\
  !*** ./src/modules/updateLocalStorage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _taskObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskObject.js */ \"./src/modules/taskObject.js\");\n\n\nconst updateLocalStorage = () => {\n  localStorage.setItem('Tasks', JSON.stringify(_taskObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateLocalStorage);\n\n\n//# sourceURL=webpack://todolist/./src/modules/updateLocalStorage.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);