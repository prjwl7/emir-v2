import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const PieChartComponent = ({ value, color }) => {
  const data = [
    { value: value, color: color }
  ];

  const pieChartColor = {
    [color]: color // Use the color prop value as the key and value for the pie chart color
  };

  return (
    <PieChart
      data={data}
      lineWidth={20}
      radius={30}
      startAngle={90}
      animate
      label={({ dataEntry }) => `${value}%`}
      labelStyle={{
        fontSize: '10px',
        fontFamily: 'sans-serif',
        fill: '#8884d8',
        fontWeight: 'bold',
      }}
      segmentsStyle={{ // Apply custom color to the pie chart segment
        transition: 'stroke .3s',
        cursor: 'pointer',
        ...pieChartColor
      }}
      style={{
        width: '50px', // Set the width
        height: '50px', // Set the height
      }}
    />
  );
};

export default PieChartComponent;
