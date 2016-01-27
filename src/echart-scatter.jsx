import React, { Component } from 'react';
import { render } from 'react-dom';
import echarts from 'echarts';

class EChartScatter extends React.Component {

  constructor(props) {
    super(props);
  }

  createChart() {
    var ChartSettings = {
      defaultOptions: {
        toolbox: {
          show: false
        }
      },
      theme: {
        textStyle: {
          fontFamily: 'Helvetica Neue‘, Arial, Verdana, sans-serif'
        }
      }
    };

    this.chart = echarts.init(React.findDOMNode(this), ChartSettings.theme);
    this.chart.setOption(ChartSettings.defaultOptions);
    this.updateChart(this.props);
  }

  updateChart(nextProps) {
    if (!nextProps) {
      return null;
    }
    var newChartOptions = this.makeChartOptions(nextProps);
    this.chart.setOption(newChartOptions);
  }

  updateChart(nextProps) {
    // give up quickly if props are empty.
    if (!nextProps) {
      return null;
    }
    var newChartOptions = this.makeChartOptions(nextProps);
    this.chart.setOption(newChartOptions);
  }

  makeChartOptions(props) {
    var seriesArray = props.seriesArray;
    var echartSeriesArray = this.makeDataSeries(seriesArray);
    var xLabel = props.xLabel || '';
    var yLabel = props.yLabel || '';
    var title = props.title || '';
    var subtext = props.subtext || '';
    var options = {
      title: {
        text: title,
        subtext: subtext
      },
      series: echartSeriesArray,
      xAxis: [{
        name: xLabel,
        type: 'value'
      }],
      yAxis: [{
        name: yLabel,
        type: 'value'
      }],
      dataZoom: {
        show: Boolean(props.showZoom)
      },
      toolbox: {
        feature: {
          saveAsImage: {
            name: 'scatter_' + xLabel + '_' + yLabel,
            type: 'png'
          }
        }
      },
      legend: {
        data: echartSeriesArray.map(function(series) {
          return series.name;
        }),
        orient: 'vertical',
        x: 'right',
        y: 'center'
      },
      grid: {
        borderColor: '#eee',
        x: 80,
        y: 60,
        x2: 120,
        y2: 60
      }
    };
    return options;
  }

  makeDataSeries(seriesArray) {
    return seriesArray.map(function(series, idx) {
      return {
        'name': series.name,
        'type': 'scatter',
        'data': series.data
      };
    });
  }

  componentDidMount() {
    this.createChart();
  }

  componentWillUnmount() {
    this.chart.dispose();
  }

  componentWillReceiveProps(nextProps) {
    this.updateChart(nextProps);
  }

  render() {
    // render frame div for chart component
    return <div style = {
      {
        'height': this.props.height,
        'width': this.props.width
      }
    }
    />;
  }
}

EChartScatter.propTypes = {
  seriesArray: React.PropTypes.array.isRequired,
  height: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired,
  xLabel: React.PropTypes.string,
  yLabel: React.PropTypes.string,
  showZoom: React.PropTypes.bool
}

module.exports = EChartScatter;
