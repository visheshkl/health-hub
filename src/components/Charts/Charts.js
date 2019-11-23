import React from 'react';
import { Line, defaults } from 'react-chartjs-2';

defaults.global.defaultFontSize = 16;

const GetChart = ({ data, labels, label, width, height, color }) => {
  return (
    <div style={{ width, paddingTop: "35px" }}>
      <Line
        height={height}
        data={{
          labels,
          datasets: [{
            label,
            data,
            backgroundColor: `rgba(${color}, 0.1)`,
            borderColor: `rgba(${color}, 0.8)`,
          }]
        }}
      />
    </div>
  );
};

const Charts = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

  let h = 165;
  const genHeight = months.map(_month => {
    h = h + getRandom(0, 3);
    return h;
  });
  let w = 50;
  const genWeight = months.map(_month => {
    w = w + getRandom(0, 2);
    return w;
  });
  const genBMI = months.map((_month, index) => {
    return genWeight[index] * 10000 / (genHeight[index] * genHeight[index]);
  });
  return (
    <>
      <GetChart label="BMI" labels={months} data={genBMI} width="80%" height={85} color="128, 94, 219" />
      <GetChart label="Weight" labels={months} data={genWeight} width="45%" height={120} color="217, 82, 170" />
      <GetChart label="Height" labels={months} data={genHeight} width="45%" height={120} color="242, 138, 78" />
    </>
  );
}

export default Charts;
