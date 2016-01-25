import React, { Component } from 'react';
import { render } from 'react-dom';
import { VictoryPie } from 'victory';

var PieChart = React.createClass({
  render() {
    return (
      <VictoryPie />
    );
  }
});

render(<PieChart />, document.getElementById('pie-chart'));