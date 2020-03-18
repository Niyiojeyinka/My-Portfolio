import React from 'react';
import Chart from "react-google-charts";

let PieChart =()=>{
    return (

<Chart
  width={'100%'}
  height={'400px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Specialization', '% of Preference'],
    ['Backend', 70],
    ['Frontend', 15],
    ['Mobile', 15],
  ]}
  options={{
    title: '',
    slices: [
        {
          color: "#2BB673"
        },
        {
          color: "#d91e48"
        },
        {
          color: "#007fad"
        },
      ],

  }}
  rootProps={{ 'data-testid': '1' }}
/>

    )
}
export default PieChart;