<template>
  <div style="background-color: #f0f2f5">
    <HeaderCard />
    <a-card class="introduction">
      <h3>项目简介</h3>
      <p>
        技术栈：vue3 +
        ant-design-vue，使用vue3.2最新的setup语法搭建，并且封装了部分钩子函数，是用来学习vue3的一个良好选择，并且，项目集成了实际开发中常用的功能，可以作为一个参考项目继续开发
      </p>
      <p>
        项目地址：<a style="color: #1890ff" href="https://github.com/BaiFangZi/vue3-antd-manage"
          >github</a
        >
      </p>
      <p>
        项目预览地址 ：<a style="color: #1890ff" href="https://baifangzi.gitee.io/vue3-antd-manage"
          >点击预览</a
        >
      </p>
    </a-card>
    <div id="views-chart"></div>
  </div>
</template>

<script setup>
// import { EyeOutlined, StarOutlined } from '@ant-design/icons-vue'
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
