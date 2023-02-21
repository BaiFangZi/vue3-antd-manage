<script setup>
import videojs from 'video.js'
import 'video.js/dist/video-js.min.css'
import './hlsTech'
import videozhCN from 'video.js/dist/lang/zh-CN.json'
import { onMounted, ref, reactive } from 'vue'
const props = defineProps({
  playUrl: String,
})
const playOptions = reactive({
  // language: 'zh-CN', // 设置语言
  controls: true, // 是否显示控制条
  preload: 'auto', // 预加载
  autoplay: true, // 是否自动播放
  fluid: false, // 自适应宽高
  muted: true,
  techOrder: ['html5', 'flvjs', 'hlsjs'], // 兼容顺序
  flvjs: {
    mediaDataSource: {
      isLive: false,
      cors: true,
      withCredentials: false,
    },
  },
  sources: [
    {
      src: props.playUrl,
      type: 'application/x-mpegURL', //this.isMp4 ? 'video/mp4' : 'application/x-mpegURL',
    },
  ],
})
const videoRef = ref(null)
const videoIns = ref(null)
onMounted(() => {
  videoIns.value = videojs(videoRef.value, playOptions, function onPlayerReady() {
    // videoIns.value.src(props.playUrl) //设置url
    videojs.log(`Your player is ready!`)
  })
  videojs.addLanguage('zh-CN', videozhCN)
})
</script>
<template>
  <video ref="videoRef" class="video-js">
    <source :src="playUrl" type="application/x-mpegURL" />
    <!-- <source :src="playUrl" type="video/x-flv" /> -->
  </video>
</template>
<style lang="scss">
.video-js {
  width: 100%;
  height: 500px;
}
</style>
