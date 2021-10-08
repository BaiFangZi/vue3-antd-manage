<template>
  <a-row>
    <a-col :span="24">
      <a-card title="ant-design-vue自带图标">
        <a-tabs>
          <a-tab-pane key="1" tab="线框风格">
            <ul class="icon-list">
              <li><UpCircleOutlined /></li>
              <li><DownCircleOutlined /></li>
              <li><LeftCircleOutlined /></li>
              <li><RightCircleOutlined /></li>
              <li><UpSquareOutlined /></li>
              <li><PlusCircleOutlined /></li>
            </ul>
          </a-tab-pane>
          <a-tab-pane key="2" tab="实底风格">
            <ul class="icon-list">
              <li><UpCircleFilled /></li>
              <li><DownCircleFilled /></li>
              <li><LeftCircleFilled /></li>
              <li><RightCircleFilled /></li>
              <li><UpSquareFilled /></li>
              <li><PlusCircleFilled /></li>
            </ul>
          </a-tab-pane>
          <a-tab-pane key="3" tab="双色风格">
            <ul class="icon-list">
              <li><UpCircleTwoTone /></li>
              <li><DownCircleTwoTone /></li>
              <li><LeftCircleTwoTone /></li>
              <li><RightCircleTwoTone /></li>
              <li><PlayCircleTwoTone /></li>
              <li><UpSquareTwoTone /></li>
            </ul>
          </a-tab-pane>
        </a-tabs>
      </a-card>
    </a-col>
    <a-col :span="24">
      <a-card title="自定义Svg图标">
        <ul class="icon-list">
          <li><img src="/src/assets/icon/blog.svg" alt="" /></li>
          <li><img src="/src/assets/icon/blog.svg" alt="" /></li>
          <li><img src="/src/assets/icon/github.svg" alt="" /></li>
          <li><img src="/src/assets/icon/juejin.svg" alt="" /></li>
          <li><img src="/src/assets/icon/qq.svg" alt="" /></li>
          <li><img src="/src/assets/icon/weixin.svg" alt="" /></li>
          <li><img src="/src/assets/icon/zhihu.svg" alt="" /></li>
        </ul>
      </a-card>
    </a-col>
    <a-col :span="24">
      <a-card title="自定义font class图标">
        <a-tabs>
          <a-tab-pane key="localFont" tab="本地字体图标">
            <ul class="icon-list">
              <li><i class="iconfont icon-yanjing"></i></li>
              <li><i class="iconfont icon-xunhuan"></i></li>
              <li><i class="iconfont icon-location"></i></li>
              <li><i class="iconfont icon-jietu"></i></li>
              <li><i class="iconfont icon-diaojiaofangda"></i></li>
              <li><i class="iconfont icon-diaojiaosuoxiao"></i></li>
            </ul>
          </a-tab-pane>
          <a-tab-pane key="remoteFont" tab="远程iconfont.cn">
            <ul class="icon-list">
              <li><IconFont type="icon-chaxun" /></li>
              <li><IconFont type="icon-bofang" /></li>
              <li><IconFont type="icon-danquxunhuan" /></li>
              <li><IconFont type="icon-changpian" /></li>
              <li><IconFont type="icon-erji" /></li>
              <li><IconFont type="icon-huatong" /></li>
            </ul> </a-tab-pane
        ></a-tabs>
      </a-card>
    </a-col>
  </a-row>
</template>

<script setup>
import { createFromIconfontCN } from '@ant-design/icons-vue'
import { ref } from 'vue'
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2853787_zrjbr6b8rnh.js',
})
// const
</script>

<style lang="scss">
@import url('/src/assets/font/iconfont.css');
.icon-list {
  display: flex;
}
.icon-list li {
  padding: 0 10px;
  margin: 0 10px;
  border: 1px solid #e8e8e8;
  font-size: 20px;
}
</style>
