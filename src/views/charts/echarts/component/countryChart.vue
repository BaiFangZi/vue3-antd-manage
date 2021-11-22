<template>
  <div id="country-chart"></div>
</template>

<script setup>
import { useEcharts } from '@/hooks/useEcharts'
import chinaData from '../data/china.json'
import { onMounted } from 'vue'
import { registerMap } from 'echarts'

const { setOption } = useEcharts('#country-chart')
onMounted(() => {
  registerMap('china', chinaData)
  setOption({
    title: {
      text: '国家地图',
    },
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: function (params) {
        var value = (params.value + '').split('.')
        value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
        return params.seriesName + '<br/>' + params.name + ': ' + value
      },
    },
    visualMap: {
      left: 'left',
      min: 10,
      max: 100,
      inRange: {
        color: [
          '#313695',
          '#4575b4',
          '#74add1',
          '#abd9e9',
          '#e0f3f8',
          '#ffffbf',
          '#fee090',
          '#fdae61',
          '#f46d43',
          '#d73027',
          '#a50026',
        ],
      },
      text: ['High', 'Low'], // 文本，默认为数值文本
      calculable: true,
    },
    toolbox: {
      show: true,

      top: 'top',
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {},
      },
    },
    series: [
      {
        name: '中国',
        type: 'map',
        roam: true,
        map: 'china',
        emphasis: {
          label: {
            show: true,
          },
        },
        data: [
          { name: '北京市', value: 20 },
          { name: '山东省', value: 60 },
        ],
      },
    ],
  })
})
</script>

<style lang="scss">
#country-chart {
  height: 600px;
}
</style>
