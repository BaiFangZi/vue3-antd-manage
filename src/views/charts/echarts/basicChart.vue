<template>
  <div>
    <BarChart :option="barOption" />
    <LineChart :option="lineOpption" />
    <ScatterChart :option="scatterOption" />
  </div>
</template>
<script setup>
import BarChart from './component/barChart.vue'
import LineChart from './component/lineChart.vue'
import ScatterChart from './component/scatterChart.vue'
const barOption = {
  title: {
    text: '柱状图',
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
    },
  ],
}

const lineOpption = {
  title: {
    text: '折线图',
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'line',
    },
  ],
}
let data = []
for (let i = 0; i < 20; i++) {
  data.push([(10 * Math.random()).toFixed(2), (10 * Math.random()).toFixed(2)])
}
const scatterOption = {
  title: {
    text: '散点图',
  },
  xAxis: {},
  yAxis: {},
  series: [
    {
      symbolSize: 10,
      data,
      type: 'scatter',
    },
  ],
}
</script>
