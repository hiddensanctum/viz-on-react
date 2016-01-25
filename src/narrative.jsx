import React, { Component } from 'react';
import { render } from 'react-dom';

class Narrative extends React.Component {
  render() {
    return <h1>Welcome to Visualizations on React.js</h1>
  }
}

render(<Narrative/>, document.getElementById('narrative'));