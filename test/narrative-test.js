// Mocking window and document object:
require('testdom')('<html><body></body></html>')

var jsdom = require('mocha-jsdom');
var assert = require('assert');
var React = require('react');
var TestUtils = require('react-addons-test-utils');

describe('Testing Narrative Component', function() {
  var Narrative = require('../src/narrative.jsx');

  it("renders the correct h1 text", function () {
    var narrativeComponent = TestUtils.renderIntoDocument(
      <Narrative />
    );

    var h1Text = TestUtils.findRenderedDOMComponentWithTag(
       narrativeComponent, 'h1'
    );

    assert.equal(h1Text.textContent, 'Welcome to Visualizations on React.js');
  });
});