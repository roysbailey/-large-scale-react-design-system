"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navigation = void 0;
var _reactRouterDom = require("react-router-dom");
var Navigation = function Navigation() {
  return /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/"
  }, "Dashboard"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/health-issues"
  }, "Health issues"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/incident-analysis"
  }, "Incident analysis"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/country-details"
  }, "Country details"), " ")));
};
exports.Navigation = Navigation;