import React from 'react';
import { Line } from 'react-chartjs-2';

const BMI = ({ data }) => {
  return (
    <Line
      data={{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets: [{
          label: 'BMI',
          data,
        }]
      }}
    />
  );
}