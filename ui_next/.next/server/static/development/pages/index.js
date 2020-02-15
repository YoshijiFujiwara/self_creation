module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/antd/lib/icon/style/index.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/icon/style/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/input/style/index.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/input/style/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/layout/style/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/layout/style/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/menu/style/index.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/menu/style/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/DnDBox.tsx":
/*!***********************************!*\
  !*** ./src/components/DnDBox.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dnd */ "react-dnd");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_dndItemTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/data/dndItemTypes */ "./src/data/dndItemTypes.ts");
/* harmony import */ var _components_dnd_box_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/dnd_box.less */ "./src/components/dnd_box.less");
/* harmony import */ var _components_dnd_box_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_dnd_box_less__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/yoshiji/webdev/javascript/self_creation/ui_next/src/components/DnDBox.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const DndBox = ({
  id,
  left,
  top,
  hideSourceOnDrag,
  children,
  onClick
}) => {
  const [{
    isDragging
  }, drag] = Object(react_dnd__WEBPACK_IMPORTED_MODULE_1__["useDrag"])({
    item: {
      id,
      left,
      top,
      type: _data_dndItemTypes__WEBPACK_IMPORTED_MODULE_2__["default"].BOX
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  if (isDragging && hideSourceOnDrag) {
    return __jsx("div", {
      ref: drag,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    });
  }

  return __jsx("div", {
    ref: drag,
    className: "dnd_box",
    style: {
      left,
      top
    },
    onClick: () => {
      onClick();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (DndBox);

/***/ }),

/***/ "./src/components/DnDContainer.tsx":
/*!*****************************************!*\
  !*** ./src/components/DnDContainer.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ "react-dnd");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_DnDBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/DnDBox */ "./src/components/DnDBox.tsx");
/* harmony import */ var _components_dnd_container_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/dnd_container.less */ "./src/components/dnd_container.less");
/* harmony import */ var _components_dnd_container_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_dnd_container_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_dndItemTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/data/dndItemTypes */ "./src/data/dndItemTypes.ts");

var _jsxFileName = "/Users/yoshiji/webdev/javascript/self_creation/ui_next/src/components/DnDContainer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







const DndContainer = ({
  hideSourceOnDrag,
  boxes,
  setBoxes
}) => {
  const moveBox = (id, left, top) => {
    setBoxes(immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(boxes, {
      [id]: {
        $merge: {
          left,
          top
        }
      }
    }));
  };

  const [, drop] = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__["useDrop"])({
    accept: _data_dndItemTypes__WEBPACK_IMPORTED_MODULE_6__["default"].BOX,

    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      moveBox(item.id, left, top);
      return undefined;
    }

  });
  return __jsx("div", {
    ref: drop,
    className: "dnd_container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(boxes).map(key => {
    const {
      left,
      top,
      jsx,
      onClick
    } = boxes[key];
    return __jsx(_components_DnDBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: key,
      id: key,
      left: left,
      top: top,
      hideSourceOnDrag: hideSourceOnDrag,
      onClick: onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: undefined
    }, jsx);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DndContainer);

/***/ }),

/***/ "./src/components/LeftSider.tsx":
/*!**************************************!*\
  !*** ./src/components/LeftSider.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon/style */ "./node_modules/antd/lib/icon/style/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/layout/style */ "./node_modules/antd/lib/layout/style/index.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/menu/style */ "./node_modules/antd/lib/menu/style/index.js");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






var _jsxFileName = "/Users/yoshiji/webdev/javascript/self_creation/ui_next/src/components/LeftSider.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6__["createElement"];

const {
  SubMenu
} = antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a;
const {
  Sider
} = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a;

const LeftSider = ({
  subMenus,
  selectMenu
}) => {
  return __jsx(Sider, {
    width: 200,
    style: {
      background: "#fff"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a, {
    mode: "inline",
    defaultSelectedKeys: ["1"],
    defaultOpenKeys: ["sub1"],
    style: {
      height: "100%",
      borderRight: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, subMenus.map((subMenu, subMenuIndex) => __jsx(SubMenu, {
    key: subMenuIndex,
    title: __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: undefined
    }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
      type: subMenu.iconType,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: undefined
    }), subMenu.title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, subMenu.components.map((item, itemIndex) => __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    key: `${subMenuIndex}-${itemIndex}`,
    onClick: () => {
      selectMenu(item.jsx);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, item.title))))));
};

/* harmony default export */ __webpack_exports__["default"] = (LeftSider);

/***/ }),

/***/ "./src/components/RightSider.tsx":
/*!***************************************!*\
  !*** ./src/components/RightSider.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon/style */ "./node_modules/antd/lib/icon/style/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/layout/style */ "./node_modules/antd/lib/layout/style/index.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/menu/style */ "./node_modules/antd/lib/menu/style/index.js");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);









var _jsxFileName = "/Users/yoshiji/webdev/javascript/self_creation/ui_next/src/components/RightSider.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9__["createElement"];

const {
  SubMenu
} = antd_lib_menu__WEBPACK_IMPORTED_MODULE_8___default.a;
const {
  Sider
} = antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default.a;

const RightSider = ({
  menuItems,
  onChange
}) => {
  return __jsx(Sider, {
    width: 200,
    style: {
      background: "#fff"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_8___default.a, {
    mode: "inline",
    defaultSelectedKeys: ["1"],
    defaultOpenKeys: ["sub1"],
    style: {
      height: "100%",
      borderRight: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(SubMenu, {
    key: "hogehoge" // TODO 直す
    ,
    title: __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default.a, {
      type: "user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }), "\u30D7\u30ED\u30D1\u30C6\u30A3"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(menuItems).map((propName, index) => __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a, {
    placeholder: propName,
    value: menuItems[propName],
    onChange: e => {
      onChange(propName, e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (RightSider);

/***/ }),

/***/ "./src/components/dnd_box.less":
/*!*************************************!*\
  !*** ./src/components/dnd_box.less ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/dnd_container.less":
/*!*******************************************!*\
  !*** ./src/components/dnd_container.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/data/dndItemTypes.ts":
/*!**********************************!*\
  !*** ./src/data/dndItemTypes.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  BOX: "box"
});

/***/ }),

/***/ "./src/data/ui_frameworks/material_ui/component_groups/Data_Display/index.ts":
/*!***********************************************************************************!*\
  !*** ./src/data/ui_frameworks/material_ui/component_groups/Data_Display/index.ts ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interfaces_material_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/interfaces/material_components */ "./src/interfaces/material_components.ts");

const {
  DATA_DISPLAY
} = _interfaces_material_components__WEBPACK_IMPORTED_MODULE_0__["EComponentGroupTitle"];
const {
  AVATAR,
  BADGE,
  CHIP,
  DIVIDER,
  ICONS,
  MATERIAL_ICONS,
  LIST,
  TABLE,
  TOOLTIP,
  TYPOGRAPHY
} = _interfaces_material_components__WEBPACK_IMPORTED_MODULE_0__["EComponentTitle"];
const componentGroup = {
  iconType: "user",
  title: DATA_DISPLAY,
  components: [{
    title: AVATAR,
    props: []
  }, {
    title: BADGE,
    props: []
  }, {
    title: CHIP,
    props: []
  }, {
    title: DIVIDER,
    props: []
  }, {
    title: ICONS,
    props: []
  }, {
    title: MATERIAL_ICONS,
    props: []
  }, {
    title: LIST,
    props: []
  }, {
    title: TABLE,
    props: []
  }, {
    title: TOOLTIP,
    props: []
  }, {
    title: TYPOGRAPHY,
    props: []
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (componentGroup);

/***/ }),

/***/ "./src/data/ui_frameworks/material_ui/component_groups/Feedback/index.ts":
/*!*******************************************************************************!*\
  !*** ./src/data/ui_frameworks/material_ui/component_groups/Feedback/index.ts ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interfaces_material_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/interfaces/material_components */ "./src/interfaces/material_components.ts");

const {
  FEEDBACK
} = _interfaces_material_components__WEBPACK_IMPORTED_MODULE_0__["EComponentGroupTitle"];
const {
  PROGRESS,
  DIALOG,
  SNACKBAR,
  BACKDROP
} = _interfaces_material_components__WEBPACK_IMPORTED_MODULE_0__["EComponentTitle"];
const componentGroup = {
  iconType: "user",
  title: FEEDBACK,
  components: [{
    title: PROGRESS,
    props: []
  }, {
    title: DIALOG,
    props: []
  }, {
    title: SNACKBAR,
    props: []
  }, {
    title: BACKDROP,
    props: []
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (componentGroup);

/***/ }),

/***/ "./src/data/ui_frameworks/material_ui/component_groups/Inputs/index.ts":
/*!*****************************************************************************!*\
  !*** ./src/data/ui_frameworks/material_ui/component_groups/Inputs/index.ts ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_ui_frameworks_material_ui_components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/data/ui_frameworks/material_ui/components/Button */ "./src/data/ui_frameworks/material_ui/components/Button/index.ts");
/* harmony import */ var _interfaces_material_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/interfaces/material_components */ "./src/interfaces/material_components.ts");


const {
  INPUTS
} = _interfaces_material_components__WEBPACK_IMPORTED_MODULE_1__["EComponentGroupTitle"];
const {
  CHECKBOX,
  DATE_TIME,
  RADIO,
  SELECT,
  SLIDER,
  SWITCH,
  TEXT_FIELD,
  TRANSFER_LIST
} = _interfaces_material_components__WEBPACK_IMPORTED_MODULE_1__["EComponentTitle"];
const componentGroup = {
  iconType: "user",
  title: INPUTS,
  components: [_data_ui_frameworks_material_ui_components_Button__WEBPACK_IMPORTED_MODULE_0__["component"], {
    title: CHECKBOX,
    props: []
  }, {
    title: DATE_TIME,
    props: []
  }, {
    title: RADIO,
    props: []
  }, {
    title: SELECT,
    props: []
  }, {
    title: SLIDER,
    props: []
  }, {
    title: SWITCH,
    props: []
  }, {
    title: TEXT_FIELD,
    props: []
  }, {
    title: TRANSFER_LIST,
    props: []
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (componentGroup);

/***/ }),

/***/ "./src/data/ui_frameworks/material_ui/component_groups/Layouts/index.ts":
/*!******************************************************************************!*\
  !*** ./src/data/ui_frameworks/material_ui/component_groups/Layouts/index.ts ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interfaces_material_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/interfaces/material_components */ "./src/interfaces/material_components.ts");

const {
  LAYOUT
} = _interfaces_material_components__WEBPACK_IMPORTED_MODULE_0__["EComponentGroupTitle"];
const {
  BOX,
  GRID,
  CONTAINER
} = _interfaces_material_components__WEBPACK_IMPORTED_MODULE_0__["EComponentTitle"];
const componentGroup = {
  iconType: "user",
  title: LAYOUT,
  components: [{
    title: BOX,
    props: []
  }, {
    title: CONTAINER,
    props: []
  }, {
    title: GRID,
    props: []
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (componentGroup);

/***/ }),

/***/ "./src/data/ui_frameworks/material_ui/component_groups/Navigation/index.ts":
/*!*********************************************************************************!*\
  !*** ./src/data/ui_frameworks/material_ui/component_groups/Navigation/index.ts ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interfaces_material_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/interfaces/material_components */ "./src/interfaces/material_components.ts");

const {
  NAVIGATION
} = _interfaces_material_components__WEBPACK_IMPORTED_MODULE_0__["EComponentGroupTitle"];
const {
  BOTTOM_NAVIGATION,
  BREADCRUMBS,
  DRAWER,
  LINK,
  MENU,
  STEPPER,
  TABS
} = _interfaces_material_components__WEBPACK_IMPORTED_MODULE_0__["EComponentTitle"];
const componentGroup = {
  iconType: "user",
  title: NAVIGATION,
  components: [{
    title: BOTTOM_NAVIGATION,
    props: []
  }, {
    title: BREADCRUMBS,
    props: []
  }, {
    title: DRAWER,
    props: []
  }, {
    title: LINK,
    props: []
  }, {
    title: MENU,
    props: []
  }, {
    title: STEPPER,
    props: []
  }, {
    title: TABS,
    props: []
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (componentGroup);

/***/ }),

/***/ "./src/data/ui_frameworks/material_ui/component_groups/Surfaces/index.ts":
/*!*******************************************************************************!*\
  !*** ./src/data/ui_frameworks/material_ui/component_groups/Surfaces/index.ts ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interfaces_material_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/interfaces/material_components */ "./src/interfaces/material_components.ts");

const {
  SURFACES
} = _interfaces_material_components__WEBPACK_IMPORTED_MODULE_0__["EComponentGroupTitle"];
const {
  APP_BAR,
  PAPER,
  CARD,
  EXPANSION_PANEL
} = _interfaces_material_components__WEBPACK_IMPORTED_MODULE_0__["EComponentTitle"];
const componentGroup = {
  iconType: "user",
  title: SURFACES,
  components: [{
    title: APP_BAR,
    props: []
  }, {
    title: PAPER,
    props: [{
      name: "children",
      default: null
    }, {
      name: "classes",
      default: null
    }, {
      name: "component",
      default: "div"
    }, {
      name: "elevation",
      default: 1
    }, {
      name: "square",
      default: false
    }, {
      name: "variant",
      default: "elevation"
    }]
  }, {
    title: CARD,
    props: []
  }, {
    title: EXPANSION_PANEL,
    props: []
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (componentGroup);

/***/ }),

/***/ "./src/data/ui_frameworks/material_ui/component_groups/index.ts":
/*!**********************************************************************!*\
  !*** ./src/data/ui_frameworks/material_ui/component_groups/index.ts ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_ui_frameworks_material_ui_component_groups_Data_Display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/data/ui_frameworks/material_ui/component_groups/Data_Display */ "./src/data/ui_frameworks/material_ui/component_groups/Data_Display/index.ts");
/* harmony import */ var _data_ui_frameworks_material_ui_component_groups_Feedback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/data/ui_frameworks/material_ui/component_groups/Feedback */ "./src/data/ui_frameworks/material_ui/component_groups/Feedback/index.ts");
/* harmony import */ var _data_ui_frameworks_material_ui_component_groups_Inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/data/ui_frameworks/material_ui/component_groups/Inputs */ "./src/data/ui_frameworks/material_ui/component_groups/Inputs/index.ts");
/* harmony import */ var _data_ui_frameworks_material_ui_component_groups_Layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/data/ui_frameworks/material_ui/component_groups/Layouts */ "./src/data/ui_frameworks/material_ui/component_groups/Layouts/index.ts");
/* harmony import */ var _data_ui_frameworks_material_ui_component_groups_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/data/ui_frameworks/material_ui/component_groups/Navigation */ "./src/data/ui_frameworks/material_ui/component_groups/Navigation/index.ts");
/* harmony import */ var _data_ui_frameworks_material_ui_component_groups_Surfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/data/ui_frameworks/material_ui/component_groups/Surfaces */ "./src/data/ui_frameworks/material_ui/component_groups/Surfaces/index.ts");






const componentGroups = [_data_ui_frameworks_material_ui_component_groups_Layouts__WEBPACK_IMPORTED_MODULE_3__["default"], _data_ui_frameworks_material_ui_component_groups_Inputs__WEBPACK_IMPORTED_MODULE_2__["default"], _data_ui_frameworks_material_ui_component_groups_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], _data_ui_frameworks_material_ui_component_groups_Surfaces__WEBPACK_IMPORTED_MODULE_5__["default"], _data_ui_frameworks_material_ui_component_groups_Feedback__WEBPACK_IMPORTED_MODULE_1__["default"], _data_ui_frameworks_material_ui_component_groups_Data_Display__WEBPACK_IMPORTED_MODULE_0__["default"]];
/* harmony default export */ __webpack_exports__["default"] = (componentGroups);

/***/ }),

/***/ "./src/data/ui_frameworks/material_ui/components/Button/component.tsx":
/*!****************************************************************************!*\
  !*** ./src/data/ui_frameworks/material_ui/components/Button/component.tsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _interfaces_material_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/interfaces/material_components */ "./src/interfaces/material_components.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/utils */ "./src/utils.ts");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./props */ "./src/data/ui_frameworks/material_ui/components/Button/props.ts");

var _jsxFileName = "/Users/yoshiji/webdev/javascript/self_creation/ui_next/src/data/ui_frameworks/material_ui/components/Button/component.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const component = {
  title: _interfaces_material_components__WEBPACK_IMPORTED_MODULE_3__["EComponentTitle"].BUTTON,
  jsx: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(_utils__WEBPACK_IMPORTED_MODULE_4__["mapToComponentProps"])(_props__WEBPACK_IMPORTED_MODULE_5__["default"]), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), "\u30DC\u30BF\u30F3"),
  props: _props__WEBPACK_IMPORTED_MODULE_5__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (component);

/***/ }),

/***/ "./src/data/ui_frameworks/material_ui/components/Button/index.ts":
/*!***********************************************************************!*\
  !*** ./src/data/ui_frameworks/material_ui/components/Button/index.ts ***!
  \***********************************************************************/
/*! exports provided: props, component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/data/ui_frameworks/material_ui/components/Button/component.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "component", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./props */ "./src/data/ui_frameworks/material_ui/components/Button/props.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "props", function() { return _props__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./src/data/ui_frameworks/material_ui/components/Button/interface.ts":
/*!***************************************************************************!*\
  !*** ./src/data/ui_frameworks/material_ui/components/Button/interface.ts ***!
  \***************************************************************************/
/*! exports provided: EPropName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPropName", function() { return EPropName; });
// [FIY] https://stackoverflow.com/questions/43080547/how-to-override-type-properties-in-typescript
// [ex] type HexColorLine = Override<Line, { color: number }>
let EPropName;

(function (EPropName) {
  EPropName["CHILDREN"] = "children";
  EPropName["CLASSES"] = "classes";
  EPropName["COLOR"] = "color";
  EPropName["COMPONENT"] = "component";
  EPropName["DISABLED"] = "disabled";
  EPropName["DISABLE_ELEVATION"] = "disableElevation";
  EPropName["DISABLE_FOCUS_RIPPLE"] = "disableFocusRipple";
  EPropName["DISABLE_RIPPLE"] = "disableRipple";
  EPropName["END_ICON"] = "endIcon";
  EPropName["FULL_WIDTH"] = "fullWidth";
  EPropName["HREF"] = "href";
  EPropName["SIZE"] = "size";
  EPropName["START_ICON"] = "startIcon";
  EPropName["VARIANT"] = "variant";
})(EPropName || (EPropName = {}));

/***/ }),

/***/ "./src/data/ui_frameworks/material_ui/components/Button/props.ts":
/*!***********************************************************************!*\
  !*** ./src/data/ui_frameworks/material_ui/components/Button/props.ts ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const props = {
  children: {
    value: "ボタン",
    default: "ボタン",
    description: "The content of the button."
  },
  classes: {
    value: null,
    default: null,
    description: ""
  },
  color: {
    value: "default",
    default: "default",
    description: ""
  },
  component: {
    value: "button",
    default: "button",
    description: ""
  },
  disabled: {
    value: false,
    default: false,
    description: ""
  },
  disableElevation: {
    value: false,
    default: false,
    description: ""
  },
  disableFocusRipple: {
    value: false,
    default: false,
    description: ""
  },
  disableRipple: {
    value: false,
    default: null,
    description: ""
  },
  endIcon: {
    value: null,
    default: null,
    description: ""
  },
  fullWidth: {
    value: false,
    default: false,
    description: ""
  },
  href: {
    value: "",
    default: null,
    description: ""
  },
  size: {
    value: "medium",
    default: "medium",
    description: ""
  },
  startIcon: {
    value: null,
    default: null,
    description: ""
  },
  variant: {
    value: "contained",
    default: "text",
    description: ""
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);

/***/ }),

/***/ "./src/interfaces/material_components.ts":
/*!***********************************************!*\
  !*** ./src/interfaces/material_components.ts ***!
  \***********************************************/
/*! exports provided: EComponentGroupTitle, EComponentTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EComponentGroupTitle", function() { return EComponentGroupTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EComponentTitle", function() { return EComponentTitle; });
// コンポーネントにPropを割り当てるとき
let EComponentGroupTitle;

(function (EComponentGroupTitle) {
  EComponentGroupTitle["LAYOUT"] = "Layout";
  EComponentGroupTitle["INPUTS"] = "Inputs";
  EComponentGroupTitle["NAVIGATION"] = "Navigation";
  EComponentGroupTitle["SURFACES"] = "Surfaces";
  EComponentGroupTitle["FEEDBACK"] = "Feedback";
  EComponentGroupTitle["DATA_DISPLAY"] = "Data Display";
})(EComponentGroupTitle || (EComponentGroupTitle = {}));

let EComponentTitle;

(function (EComponentTitle) {
  EComponentTitle["BOX"] = "Box";
  EComponentTitle["CONTAINER"] = "Container";
  EComponentTitle["GRID"] = "Grid";
  EComponentTitle["BUTTON"] = "Button";
  EComponentTitle["CHECKBOX"] = "Checkbox";
  EComponentTitle["DATE_TIME"] = "Date / Time";
  EComponentTitle["RADIO"] = "Radio";
  EComponentTitle["SELECT"] = "Select";
  EComponentTitle["SLIDER"] = "Slider";
  EComponentTitle["SWITCH"] = "Switch";
  EComponentTitle["TEXT_FIELD"] = "Text Field";
  EComponentTitle["TRANSFER_LIST"] = "Transfer List";
  EComponentTitle["BOTTOM_NAVIGATION"] = "Bottom Navigation";
  EComponentTitle["BREADCRUMBS"] = "Breadcrumbs";
  EComponentTitle["DRAWER"] = "Drawer";
  EComponentTitle["LINK"] = "Link";
  EComponentTitle["MENU"] = "Menu";
  EComponentTitle["STEPPER"] = "Stepper";
  EComponentTitle["TABS"] = "Tabs";
  EComponentTitle["APP_BAR"] = "App Bar";
  EComponentTitle["PAPER"] = "Paper";
  EComponentTitle["CARD"] = "Card";
  EComponentTitle["EXPANSION_PANEL"] = "Expansion Panel";
  EComponentTitle["PROGRESS"] = "Progress";
  EComponentTitle["DIALOG"] = "Dialog";
  EComponentTitle["SNACKBAR"] = "Snackbar";
  EComponentTitle["BACKDROP"] = "Backdrop";
  EComponentTitle["AVATAR"] = "Avatar";
  EComponentTitle["BADGE"] = "Badge";
  EComponentTitle["CHIP"] = "Chip";
  EComponentTitle["DIVIDER"] = "Divider";
  EComponentTitle["ICONS"] = "Icons";
  EComponentTitle["MATERIAL_ICONS"] = "Material Icons";
  EComponentTitle["LIST"] = "List";
  EComponentTitle["TABLE"] = "Table";
  EComponentTitle["TOOLTIP"] = "Tooltip";
  EComponentTitle["TYPOGRAPHY"] = "Typography";
})(EComponentTitle || (EComponentTitle = {}));

/***/ }),

/***/ "./src/layouts/default.less":
/*!**********************************!*\
  !*** ./src/layouts/default.less ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/layouts/default.tsx":
/*!*********************************!*\
  !*** ./src/layouts/default.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu/style */ "./node_modules/antd/lib/menu/style/index.js");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/layout/style */ "./node_modules/antd/lib/layout/style/index.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _default_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./default.less */ "./src/layouts/default.less");
/* harmony import */ var _default_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_default_less__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "/Users/yoshiji/webdev/javascript/self_creation/ui_next/src/layouts/default.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4__["createElement"];


const {
  Header,
  Content
} = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a;

const DefaultLayout = ({
  children
}) => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx(Header, {
  id: "header",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("div", {
  id: "logo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a, {
  id: "menu",
  theme: "dark",
  mode: "horizontal",
  defaultSelectedKeys: ["2"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
  key: "1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "\u30C7\u30D5\u30A9\u30EB\u30C8"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
  key: "2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, "\u3075\u304C"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
  key: "3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "\u306A\u3093\u3068\u304B\u304B\u3093\u3068\u304B"))), __jsx(Content, {
  id: "content_wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("div", {
  id: "content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, children))));

/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/layout/style */ "./node_modules/antd/lib/layout/style/index.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dnd */ "react-dnd");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-dnd-html5-backend */ "react-dnd-html5-backend");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_DnDContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/components/DnDContainer */ "./src/components/DnDContainer.tsx");
/* harmony import */ var _components_LeftSider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/components/LeftSider */ "./src/components/LeftSider.tsx");
/* harmony import */ var _components_RightSider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~/components/RightSider */ "./src/components/RightSider.tsx");
/* harmony import */ var _data_ui_frameworks_material_ui_component_groups__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~/data/ui_frameworks/material_ui/component_groups */ "./src/data/ui_frameworks/material_ui/component_groups/index.ts");
/* harmony import */ var _layouts_default__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~/layouts/default */ "./src/layouts/default.tsx");
/* harmony import */ var _plugins_axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~/plugins/axios */ "./src/plugins/axios.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ~/utils */ "./src/utils.ts");









var _jsxFileName = "/Users/yoshiji/webdev/javascript/self_creation/ui_next/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }














const IndexPage = () => {
  // 選択中のボックスのkey
  const {
    0: selectedKey,
    1: setSelectedKey
  } = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])("");
  const {
    0: boxes,
    1: setBoxes
  } = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])({});
  const selectedComponentProps = boxes[selectedKey] && boxes[selectedKey].jsx ? boxes[selectedKey].jsx.props : []; // TODO: マテリアルコンポーネントの設定が終わり、undefinedがくることがなくなれば、`| undefined`は除去する

  const addDnDBox = jsx => {
    const key = Object(_utils__WEBPACK_IMPORTED_MODULE_19__["makeRandomId"])(5);
    setBoxes(immutability_helper__WEBPACK_IMPORTED_MODULE_9___default()(boxes, {
      // TODO: この部分、型指定が出来ないの、よろしくないのでは？
      $merge: {
        [key]: {
          top: 180,
          // TODO: 初期値をハードコーディングしておる
          left: 20,
          jsx,
          componentName: "Button",
          // TODO: コンポーネントネームのハードコーディング
          onClick: () => setSelectedKey(key)
        }
      }
    }));
  };

  const updateBoxProps = (propName, value) => {
    if (selectedKey === "" || !boxes[selectedKey].jsx) return;
    const box = boxes[selectedKey];

    const newJsx = _objectSpread({}, box.jsx, {
      props: _objectSpread({}, box.jsx.props, {
        [propName]: value
      })
    });

    setBoxes(immutability_helper__WEBPACK_IMPORTED_MODULE_9___default()(boxes, {
      $merge: {
        [selectedKey]: _objectSpread({}, box, {
          jsx: newJsx
        })
      }
    }));
  };

  const saveBoxes = () => {
    // stateのboxのonChangeプロパティ以外を渡す
    const reqBody = {};

    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(boxes).forEach(key => {
      const {
        top,
        left,
        jsx,
        componentName
      } = boxes[key];
      reqBody[key] = {
        top,
        left,
        jsx,
        componentName
      };
    });

    _plugins_axios__WEBPACK_IMPORTED_MODULE_18__["default"].put("/save_boxes", reqBody).then(res => {
      console.log(res);
    }).catch(e => {
      console.error(e);
    });
  };

  return __jsx(_layouts_default__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx(_components_LeftSider__WEBPACK_IMPORTED_MODULE_14__["default"], {
    subMenus: _data_ui_frameworks_material_ui_component_groups__WEBPACK_IMPORTED_MODULE_16__["default"],
    selectMenu: addDnDBox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }), __jsx(react_dnd__WEBPACK_IMPORTED_MODULE_11__["DndProvider"], {
    backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_12___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, __jsx(_components_DnDContainer__WEBPACK_IMPORTED_MODULE_13__["default"], {
    hideSourceOnDrag: true,
    boxes: boxes,
    setBoxes: setBoxes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  })), __jsx(_components_RightSider__WEBPACK_IMPORTED_MODULE_15__["default"], {
    menuItems: selectedComponentProps,
    onChange: updateBoxProps,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  })), __jsx("button", {
    onClick: () => saveBoxes(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, "\u30C6\u30B9\u30C8\u7528\u306E\u4FDD\u5B58\u30DC\u30BF\u30F3"));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./src/plugins/axios.ts":
/*!******************************!*\
  !*** ./src/plugins/axios.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // [FIY] https://github.com/zeit/next.js/issues/2919
// [FIY] https://github.com/axios/axios

const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "http://localhost:3456",
  timeout: 2000,
  headers: {
    "Content-Type": "application/json"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: makeRandomId, mapToComponentProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeRandomId", function() { return makeRandomId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapToComponentProps", function() { return mapToComponentProps; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_ui_frameworks_material_ui_components_Button_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/data/ui_frameworks/material_ui/components/Button/interface */ "./src/data/ui_frameworks/material_ui/components/Button/interface.ts");


const makeRandomId = length => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};
const mapToComponentProps = props => {
  // TODO: タイプアサーションはあんまり良くないらしい
  return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(props).reduce((accumulator, propName) => {
    if (propName === _data_ui_frameworks_material_ui_components_Button_interface__WEBPACK_IMPORTED_MODULE_1__["EPropName"].CLASSES || propName === _data_ui_frameworks_material_ui_components_Button_interface__WEBPACK_IMPORTED_MODULE_1__["EPropName"].COMPONENT) return accumulator;
    accumulator[propName] = props[propName].value;
    return accumulator;
  }, {});
}; // export const mapToComponentProps = (props: TProp[]): TComponentProps => {
//   return props.reduce(
//     (accumulator: Record<string, any>, currentValue: TProp) => {
//       if (currentValue.name === "children") return accumulator;
//       accumulator[currentValue.name] = currentValue.default;
//       return accumulator;
//     },
//     {}
//   );
// };

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yoshiji/webdev/javascript/self_creation/ui_next/src/pages/index.tsx */"./src/pages/index.tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/layout":
/*!**********************************!*\
  !*** external "antd/lib/layout" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "immutability-helper":
/*!**************************************!*\
  !*** external "immutability-helper" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immutability-helper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dnd":
/*!****************************!*\
  !*** external "react-dnd" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dnd");

/***/ }),

/***/ "react-dnd-html5-backend":
/*!******************************************!*\
  !*** external "react-dnd-html5-backend" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dnd-html5-backend");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map