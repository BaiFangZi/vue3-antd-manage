<template>
  <div ref="myChart" id="my-chart">
    <!-- 图表 -->
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  onMounted,
  onBeforeUnmount,
  toRef,
  ref,
} from 'vue'
import options from './options'
import { getCurrentInstance } from 'vue'
export default defineComponent({
  name: 'chart',
  setup() {
    const { ctx } = getCurrentInstance()
    let chart = null,
      realTimeData = null

    onMounted(() => {
      const chartDom = document.querySelector('#my-chart')
      chart = ctx.$echarts.init(chartDom)
      // this.chart.clear()
      chart.setOption(options, true)
      //解决初次生成会超过父容器宽度
      setTimeout(() => {
        chart.resize()
      }, 1)

      window.addEventListener('resize', () => {
        // console.log(this.chart)
        if (chart) {
          chart.resize()
        }
      })
      realTimeData = setInterval(queryData, 1000)
    })

    const queryData = () => {
      setTimeout(() => {
        let date = new Date()
        const now = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        // const xData = options.xAxis.data.shift().push(now)
        const xData = options.xAxis.data
        xData.shift()
        xData.push(now)

        const value = Math.floor(Math.random() * 100)
        const yData = options.series[0].data
        yData.shift()
        yData.push(value)

        chart.setOption({
          xAxis: {
            data: xData,
          },
          series: [
            {
              name: '销量',
              data: yData,
            },
          ],
        })
      }, 100)
    }
    onBeforeUnmount(() => {
      console.log('销毁组件')
      // console.log(this.realTimeData)
      window.removeEventListener('resize', chart.resize) //
      clearInterval(realTimeData)
      // this.chart = null //销毁实例，避免刷新卡顿
    })
    return {
      // ...toRef(state),
      // myChart,
    }
  },
})
</script>
<style lang="scss">
#my-chart {
  width: 100%;
  height: 400px;
}
</style>
