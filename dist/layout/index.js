"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Layout = void 0;
var _navigation = require("../navigation");
var Layout = function Layout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement(_navigation.Navigation, null), /*#__PURE__*/React.createElement("main", null, children));
};
exports.Layout = Layout;