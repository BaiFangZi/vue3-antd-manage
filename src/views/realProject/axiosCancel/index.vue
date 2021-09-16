<template>
  <div>
    <a-alert message="取消上一次axios请求，然后重新发送"></a-alert>
    <div style="margin-top: 20px">
      <a-button type="primary" @click="handleSendReq">下载文件</a-button>
      <a-button
        type="primary"
        danger
        style="margin-left: 20px"
        @click="handleCancelReq"
      >
        取消下载
      </a-button>
      <a-progress :percent="progress" status="active" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { axiosCancel } from '@/utils/request'
const progress = ref(0)
const handleSendReq = () => {
  setInterval(() => {
    if (progress.value < 100) {
      progress.value += 1
    }
  }, 200)
}

const handleCancelReq = () => {
  axiosCancel()
  console.log('取消')
}
</script>
