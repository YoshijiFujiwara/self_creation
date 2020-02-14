webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/data/materialComponents.tsx":
false,

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






var componentGroups = [_data_ui_frameworks_material_ui_component_groups_Layouts__WEBPACK_IMPORTED_MODULE_3__["default"], _data_ui_frameworks_material_ui_component_groups_Inputs__WEBPACK_IMPORTED_MODULE_2__["default"], _data_ui_frameworks_material_ui_component_groups_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], _data_ui_frameworks_material_ui_component_groups_Surfaces__WEBPACK_IMPORTED_MODULE_5__["default"], _data_ui_frameworks_material_ui_component_groups_Feedback__WEBPACK_IMPORTED_MODULE_1__["default"], _data_ui_frameworks_material_ui_component_groups_Data_Display__WEBPACK_IMPORTED_MODULE_0__["default"]];
/* harmony default export */ __webpack_exports__["default"] = (componentGroups);

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
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-dnd-html5-backend */ "./node_modules/react-dnd-html5-backend/dist/esm/index.js");
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














var IndexPage = function IndexPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(""),
      selectedKey = _useState[0],
      setSelectedKey = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])({}),
      boxes = _useState2[0],
      setBoxes = _useState2[1];

  var selectedComponentProps = boxes[selectedKey] && boxes[selectedKey].jsx ? boxes[selectedKey].jsx.props : []; // TODO: マテリアルコンポーネントの設定が終わり、undefinedがくることがなくなれば、`| undefined`は除去する

  var addDnDBox = function addDnDBox(jsx) {
    var key = Object(_utils__WEBPACK_IMPORTED_MODULE_19__["makeRandomId"])(5);
    setBoxes(immutability_helper__WEBPACK_IMPORTED_MODULE_9___default()(boxes, {
      // TODO: この部分、型指定が出来ないの、よろしくないのでは？
      $merge: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, key, {
        top: 180,
        // TODO: 初期値をハードコーディングしておる
        left: 20,
        jsx: jsx,
        componentName: "Button",
        // TODO: コンポーネントネームのハードコーディング
        onClick: function onClick() {
          return setSelectedKey(key);
        }
      })
    }));
  };

  var updateBoxProps = function updateBoxProps(propName, value) {
    if (selectedKey === "" || !boxes[selectedKey].jsx) return;
    var box = boxes[selectedKey];

    var newJsx = _objectSpread({}, box.jsx, {
      props: _objectSpread({}, box.jsx.props, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, propName, value))
    });

    setBoxes(immutability_helper__WEBPACK_IMPORTED_MODULE_9___default()(boxes, {
      $merge: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, selectedKey, _objectSpread({}, box, {
        jsx: newJsx
      }))
    }));
  };

  var saveBoxes = function saveBoxes() {
    // stateのboxのonChangeプロパティ以外を渡す
    var reqBody = {};

    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(boxes).forEach(function (key) {
      var _boxes$key = boxes[key],
          top = _boxes$key.top,
          left = _boxes$key.left,
          jsx = _boxes$key.jsx,
          componentName = _boxes$key.componentName;
      reqBody[key] = {
        top: top,
        left: left,
        jsx: jsx,
        componentName: componentName
      };
    });

    _plugins_axios__WEBPACK_IMPORTED_MODULE_18__["default"].put("/save_boxes", reqBody).then(function (res) {
      console.log(res);
    })["catch"](function (e) {
      console.error(e);
    });
  };

  return __jsx(_layouts_default__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(_components_LeftSider__WEBPACK_IMPORTED_MODULE_14__["default"], {
    subMenus: _data_ui_frameworks_material_ui_component_groups__WEBPACK_IMPORTED_MODULE_16__["default"],
    selectMenu: addDnDBox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), __jsx(react_dnd__WEBPACK_IMPORTED_MODULE_11__["DndProvider"], {
    backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_12__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(_components_DnDContainer__WEBPACK_IMPORTED_MODULE_13__["default"], {
    hideSourceOnDrag: true,
    boxes: boxes,
    setBoxes: setBoxes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  })), __jsx(_components_RightSider__WEBPACK_IMPORTED_MODULE_15__["default"], {
    menuItems: selectedComponentProps,
    onChange: updateBoxProps,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  })), __jsx("button", {
    onClick: function onClick() {
      return saveBoxes();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "\u30C6\u30B9\u30C8\u7528\u306E\u4FDD\u5B58\u30DC\u30BF\u30F3"));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.0b6a67a7f8c44ee3a21a.hot-update.js.map