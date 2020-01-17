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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/antd/lib/icon/style/index.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/icon/style/index.js ***!
  \***************************************************/
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
/* harmony import */ var _dnd_box_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dnd_box.less */ "./src/components/dnd_box.less");
/* harmony import */ var _dnd_box_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dnd_box_less__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/yoshiji/webdev/javascript/self_creation/ui_next/src/components/DnDBox.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const DndBox = ({
  id,
  left,
  top,
  hideSourceOnDrag,
  children
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
        lineNumber: 28
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DnDBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DnDBox */ "./src/components/DnDBox.tsx");
/* harmony import */ var _dnd_container_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dnd_container.less */ "./src/components/dnd_container.less");
/* harmony import */ var _dnd_container_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dnd_container_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dnd */ "react-dnd");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_dndItemTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/data/dndItemTypes */ "./src/data/dndItemTypes.ts");

var _jsxFileName = "/Users/yoshiji/webdev/javascript/self_creation/ui_next/src/components/DnDContainer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const DndContainer = ({
  hideSourceOnDrag,
  boxes,
  setBoxes
}) => {
  const moveBox = (id, left, top) => {
    setBoxes(immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(boxes, {
      [id]: {
        $merge: {
          left,
          top
        }
      }
    }));
  };

  const [, drop] = Object(react_dnd__WEBPACK_IMPORTED_MODULE_5__["useDrop"])({
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
      title
    } = boxes[key];
    return __jsx(_DnDBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: key,
      id: key,
      left: left,
      top: top,
      hideSourceOnDrag: hideSourceOnDrag,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: undefined
    }, title);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DndContainer);

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

/***/ "./src/data/subMenus.ts":
/*!******************************!*\
  !*** ./src/data/subMenus.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const subMenus = [{
  iconType: "user",
  title: "Layout",
  menuItems: [{
    title: "Box"
  }, {
    title: "Container"
  }, {
    title: "Grid"
  }]
}, {
  iconType: "user",
  title: "Inputs",
  menuItems: [{
    title: "Button"
  }, {
    title: "Checkbox"
  }, {
    title: "Date / Time"
  }, {
    title: "Radio"
  }, {
    title: "Select"
  }, {
    title: "Slider"
  }, {
    title: "Switch"
  }, {
    title: "Text Field"
  }, {
    title: "Transfer List"
  }]
}, {
  iconType: "user",
  title: "Navigation",
  menuItems: [{
    title: "Bottom Navigation"
  }, {
    title: "Breadcrumbs"
  }, {
    title: "Drawer"
  }, {
    title: "Link"
  }, {
    title: "Menu"
  }, {
    title: "Stepper"
  }, {
    title: "Tabs"
  }]
}, {
  iconType: "user",
  title: "Surfaces",
  menuItems: [{
    title: "App Bar"
  }, {
    title: "Paper"
  }, {
    title: "Card"
  }, {
    title: "Expansion Panel"
  }]
}, {
  iconType: "user",
  title: "Feedback",
  menuItems: [{
    title: "Progress"
  }, {
    title: "Dialog"
  }, {
    title: "Snackbar"
  }, {
    title: "Backdrop"
  }]
}, {
  iconType: "user",
  title: "Data Display",
  menuItems: [{
    title: "Avatar"
  }, {
    title: "Badge"
  }, {
    title: "Chip"
  }, {
    title: "Divider"
  }, {
    title: "Icons"
  }, {
    title: "Material Icons"
  }, {
    title: "List"
  }, {
    title: "Table"
  }, {
    title: "Tooltip"
  }, {
    title: "Typography"
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (subMenus);

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
}, "\u307B\u3052"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
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
/* harmony import */ var _layouts_default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/layouts/default */ "./src/layouts/default.tsx");
/* harmony import */ var _data_subMenus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/data/subMenus */ "./src/data/subMenus.ts");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dnd */ "react-dnd");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dnd-html5-backend */ "react-dnd-html5-backend");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_DnDContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/components/DnDContainer */ "./src/components/DnDContainer.tsx");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_12__);






var _jsxFileName = "/Users/yoshiji/webdev/javascript/self_creation/ui_next/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6__["createElement"];








const {
  SubMenu
} = antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a;
const {
  Sider
} = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a;

const IndexPage = () => {
  const {
    0: boxes,
    1: setBoxes
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({
    a: {
      top: 20,
      left: 80,
      title: "Drag me around"
    },
    b: {
      top: 180,
      left: 20,
      title: "Drag me too"
    }
  });

  const makeId = length => {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };

  const addDnDBox = title => {
    const key = makeId(5);
    setBoxes(immutability_helper__WEBPACK_IMPORTED_MODULE_12___default()(boxes, {
      $merge: {
        [key]: {
          top: 180,
          left: 20,
          title
        }
      }
    }));
  };

  return __jsx(_layouts_default__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx(Sider, {
    width: 200,
    style: {
      background: "#fff"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
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
      lineNumber: 58
    },
    __self: undefined
  }, _data_subMenus__WEBPACK_IMPORTED_MODULE_8__["default"].map((subMenu, subMenuIndex) => __jsx(SubMenu, {
    key: subMenuIndex,
    title: __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: undefined
    }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
      type: subMenu.iconType,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: undefined
    }), subMenu.title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, subMenu.menuItems.map((item, itemIndex) => __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    key: `${subMenuIndex}-${itemIndex}`,
    onClick: () => addDnDBox(item.title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, item.title)))))), __jsx(react_dnd__WEBPACK_IMPORTED_MODULE_9__["DndProvider"], {
    backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_10___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx(_components_DnDContainer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    hideSourceOnDrag: true,
    boxes: boxes,
    setBoxes: setBoxes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yoshiji/webdev/javascript/self_creation/ui_next/src/pages/index.tsx */"./src/pages/index.tsx");


/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

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