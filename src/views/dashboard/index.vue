<template>
  <HeaderCard />
  <a-card class="introduction"> 
    <h3>项目简介</h3>
    <p>项目地址<a href=""></a></p>
    <p>项目预览地址 ：<a href="">点击预览</a></p>
   
  </a-card>
  <div id="views-chart"></div>
</template>

<script setup>
import { EyeOutlined, StarOutlined } from '@ant-design/icons-vue'
import HeaderCard from './HeaderCard.vue'
import { useEcharts } from '@/hooks/useEcharts'

const { setOption } = useEcharts('#views-chart')
let option = {
  title: {
    text: '访问趋势',
  },
  tooltip: {},
  legend: {
    data: ['每日访问量'],
  },
  xAxis: {
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  },
  yAxis: {},
  series: [
    {
      name: '访问量',
      type: 'line',
      data: [5, 20, 36, 10, 10, 20, 23],
    },
  ],
}
setOption(option)
</script>

<style lang="scss">
.introduction {
  margin-bottom: 30px;
}
#views-chart {
  // width: 300px;
  background-color: #fff;
  padding: 10px;
  width: 100%;
  height: 300px;
}
</style>
