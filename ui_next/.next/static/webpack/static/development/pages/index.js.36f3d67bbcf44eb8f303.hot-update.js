webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/layout/style */ "./node_modules/antd/lib/layout/style/index.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/menu/style */ "./node_modules/antd/lib/menu/style/index.js");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layouts_default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/layouts/default */ "./src/layouts/default.tsx");
/* harmony import */ var _data_subMenus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/data/subMenus */ "./src/data/subMenus.ts");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dnd-html5-backend */ "./node_modules/react-dnd-html5-backend/dist/esm/index.js");
/* harmony import */ var _components_DnDContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/components/DnDContainer */ "./src/components/DnDContainer.tsx");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_12__);






var _jsxFileName = "/Users/yoshiji/webdev/javascript/self_creation/ui_next/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6__["createElement"];








var SubMenu = antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.SubMenu;
var Sider = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Sider;

var IndexPage = function IndexPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({
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
  }),
      boxes = _useState[0],
      setBoxes = _useState[1];

  var makeId = function makeId(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };

  var addDnDBox = function addDnDBox(title) {
    var key = makeId(5);
    setBoxes(immutability_helper__WEBPACK_IMPORTED_MODULE_12__["update"]);
  };

  return __jsx(_layouts_default__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(Sider, {
    width: 200,
    style: {
      background: "#fff"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
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
      lineNumber: 52
    },
    __self: this
  }, _data_subMenus__WEBPACK_IMPORTED_MODULE_8__["default"].map(function (subMenu, subMenuIndex) {
    return __jsx(SubMenu, {
      key: subMenuIndex,
      title: __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: subMenu.iconType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), subMenu.title),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, subMenu.menuItems.map(function (item, itemIndex) {
      return __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
        key: "".concat(subMenuIndex, "-").concat(itemIndex),
        onClick: function onClick() {
          return addDnDBox(item.title);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, item.title);
    }));
  }))), __jsx(react_dnd__WEBPACK_IMPORTED_MODULE_9__["DndProvider"], {
    backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_10__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_components_DnDContainer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    hideSourceOnDrag: true,
    boxes: boxes,
    setBoxes: setBoxes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.36f3d67bbcf44eb8f303.hot-update.js.map