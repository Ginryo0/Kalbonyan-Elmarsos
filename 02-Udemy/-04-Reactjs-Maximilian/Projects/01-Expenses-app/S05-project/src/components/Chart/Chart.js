import React from 'react';
import ChartBar from './ChartBar';

import './Chart.css';

const Chart = (props) => {
  const dpValues = props.dataPoints.map((dp) => dp.value);
  const totalMax = Math.max(...dpValues); // returns max -> takes multiple args
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={totalMax}
        />
      ))}
    </div>
  );
};

export default Chart;
