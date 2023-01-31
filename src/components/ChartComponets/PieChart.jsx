import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';


export default function PieCharts({data1}) {
    const defaultLabelStyle = {
        fontSize: '5px',
        fontFamily: 'sans-serif',
      };
  return (
    <PieChart data={data1}
    lineWidth={100}
    style={{width:"200px",marginTop:"10px"}}
    labelStyle={{
        ...defaultLabelStyle,
      }}
    />

  )
}
