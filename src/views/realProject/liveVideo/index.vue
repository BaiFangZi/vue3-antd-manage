<template>
  <div class="live-wrapper">
    <videoPlay :play-url="playUrl"></videoPlay>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import videoPlay from './video.vue'
const playUrl = ref('http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8')
</script>
