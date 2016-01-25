import React from 'react';
import ReactDOM from 'react-dom';

class Narrative extends React.Component {
  render() {
    return <h1>Welcome to Visualizations on React.js</h1>
  }
}

ReactDOM.render(<Narrative/>, document.getElementById('narrative'));