"use strict";

var _index = require("./index");
var _react = require("@testing-library/react");
jest.mock('react-router-dom', function () {
  return {
    Link: function Link() {
      return /*#__PURE__*/React.createElement("div", null);
    }
  };
});
describe('Navigation', function () {
  it('renders menu correctly', function () {
    (0, _react.render)( /*#__PURE__*/React.createElement(_index.Navigation, null));

    //screen.debug();
    //screen.getByRole('');
    expect(_react.screen.getAllByRole('navigation')).toHaveLength(1);
    expect(_react.screen.getAllByRole('listitem')).toHaveLength(4);
  });
});