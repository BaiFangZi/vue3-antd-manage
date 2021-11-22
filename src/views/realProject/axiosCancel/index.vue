<template>
  <div>
    <a-alert message="取消上一次axios请求，然后重新发送"></a-alert>
    <div style="margin-top: 20px">
      <a-button type="primary" @click="handleSendReq">下载文件</a-button>
      <a-button type="primary" danger style="margin-left: 20px" @click="handleCancelReq">
        取消下载
      </a-button>
      <a-progress :percent="progress" status="active" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { removePendingRequest } from '@/utils/request'
import { queryTable } from '@/api/data'
import { message } from 'ant-design-vue'
const progress = ref(0)
const handleSendReq = () => {
  queryTable({ current: 1, pageSize: 1000 })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
      message.warning(err.message)
    })
}

const handleCancelReq = () => {
  // get&/queryTable&current=1&pageSize=1000&
  removePendingRequest({
    method: 'get',
    url: '/queryTable',
    params: {
      current: 1,
      pageSize: 1000,
    },
  })
  // console.log(axiosCancel)
  // axiosCancel('取消该请求')
}
</script>
