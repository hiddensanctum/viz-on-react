import React, { Component } from 'react';
import { render } from 'react-dom';
import { VictoryPie } from 'victory';

class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: this.getData()};
  }

  getData() {
    return [
      { x: "A", y: 0.2 + Math.random() },
      { x: "B", y: 0.2 + Math.random() },
      { x: "C", y: 0.2 + Math.random() },
      { x: "D", y: 0.2 + Math.random() },
      { x: "E", y: 0.2 + Math.random() }
    ];
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({data: this.getData()});
    }, 1000);
  }

  render() {
    return (
      <VictoryPie
        data={this.state.data}
        animate={{velocity: 0.01}}
        innerRadius={80}
        padAngle = {5}
        colorScale={['#eff3ff','#bdd7e7','#6baed6','#3182bd','#08519c']}/>
    );
  }
}

render(<PieChart />, document.getElementById('pie-chart'));