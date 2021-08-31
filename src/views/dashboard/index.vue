<template>
  <div id="views-chart"></div>
</template>

<script>
// import { onMounted } from 'vue'
// import echarts from '@/plugins/echarts'
// export default {
//   setup() {
//     onMounted(() => {
//       let viewsChart = echarts.init(document.querySelector('#views-chart'))
//       let option = {
//         title: {
//           text: 'ECharts 入门示例',
//         },
//         tooltip: {},
//         legend: {
//           data: ['销量'],
//         },
//         xAxis: {
//           data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
//         },
//         yAxis: {},
//         series: [
//           {
//             name: '销量',
//             type: 'line',
//             data: [5, 20, 36, 10, 10, 20],
//           },
//         ],
//       }
//       viewsChart.setOption(option)
//     })
//   },
// }
</script>

<script setup>
import { useEcharts } from '@/hooks/useEcharts'
const { setOption } = useEcharts('#views-chart')
let option = {
  title: {
    text: 'ECharts 入门示例',
  },
  tooltip: {},
  legend: {
    data: ['销量'],
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'line',
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
}
setOption(option)
</script>

<style lang="scss">
#views-chart {
  // width: 300px;
  width: 100%;
  height: 300px;
}
</style>
