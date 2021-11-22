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
        <a-tabs>
          <a-tab-pane key="tagSvg" tab="html标签使用">
            <ul class="icon-list">
              <li><embed :src="blogSrc" /></li>
              <li><embed :src="githubSrc" /></li>
              <li><embed :src="juejinSrc" /></li>
              <li><embed :src="qqSrc" /></li>
              <li><embed :src="weixinSrc" /></li>
              <li><embed :src="zhihuSrc" /></li>
            </ul>
          </a-tab-pane>
          <a-tab-pane key="comSvg" tab="vue组件使用">
            <ul class="icon-list">
              <li><SvgIcon size="32" name="blog" /></li>
              <li><SvgIcon size="32" name="github" /></li>
              <li><SvgIcon size="32" name="juejin" /></li>
              <li><SvgIcon size="32" name="qq" /></li>
              <li><SvgIcon size="32" name="weixin" /></li>
              <li><SvgIcon size="32" name="zhihu" /></li>
            </ul>
          </a-tab-pane>
        </a-tabs>
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
import blogSrc from '@/assets/icon/blog.svg'
import githubSrc from '@/assets/icon/github.svg'
import qqSrc from '@/assets/icon/qq.svg'
import weixinSrc from '@/assets/icon/weixin.svg'
import juejinSrc from '@/assets/icon/juejin.svg'
import zhihuSrc from '@/assets/icon/zhihu.svg'
import { createFromIconfontCN } from '@ant-design/icons-vue'
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
