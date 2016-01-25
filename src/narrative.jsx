import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Narrative extends Component {
  render() {
    return <h1>Welcome to Visualizations on React.js</h1>
  }
}

ReactDOM.render(<Narrative/>, document.getElementById('narrative'));