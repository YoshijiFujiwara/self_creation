webpackHotUpdate("static/development/pages/index.js",{

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
var makeRandomId = function makeRandomId(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;

  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};
var mapToComponentProps = function mapToComponentProps(props) {
  return props.reduce(function (accumulator, currentValue) {
    if (currentValue.name === "children") return accumulator;
    accumulator[currentValue.name] = currentValue["default"];
    return accumulator;
  }, {});
};

/***/ })

})
//# sourceMappingURL=index.js.708b9debdacb9f6bbdf2.hot-update.js.map