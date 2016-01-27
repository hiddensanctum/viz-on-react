import React from 'react';
import { render } from 'react-dom';
import Narrative from './src/narrative.jsx';
import PieChart from './src/pie-chart.jsx';
import EChartScatter from './src/echart-scatter.jsx';

var sampling = [];

for (let i = 0; i < 50; i++) {
  sampling.push([i/10, Math.random() * i / 10]);
}

var height = 400;
var width = height * 1.6;

render(
  <div>
    <Narrative/>
    <PieChart />
    <EChartScatter
      seriesArray = { [{ name: 'Developers', data: sampling}] }
      width = { width }
      height = { height }
      xLabel = "# of Custom Projects"
      yLabel = "Cups of Coffee Consummed"
      title = "Custom Projects in relation to Coffee Consumption"
      showZoom = { true }
    />
  </div>
, document.getElementById('body'));
