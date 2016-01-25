import React, { Component } from 'react';
import { render } from 'react-dom';

var Narrative = React.createClass({
  render() {
    return <h1>Welcome to Visualizations on React.js</h1>
  }
});

render(<Narrative/>, document.getElementById('narrative'));