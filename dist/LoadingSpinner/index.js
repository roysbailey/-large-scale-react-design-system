"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LoadingSpinner;
var _react = _interopRequireDefault(require("react"));
var _spinner = _interopRequireDefault(require("./images/spinner.gif"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function LoadingSpinner() {
  return /*#__PURE__*/_react["default"].createElement("img", {
    src: _spinner["default"],
    alt: "loading"
  });
}