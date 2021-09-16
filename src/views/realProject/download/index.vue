<template>
  <div>
    <div class="file-download-input">
      <a-input v-model:value="fileUrl" placeholder="输入文件下载地址">
        <!-- <template #addonAfter> <a-button></a-button></template> -->
      </a-input>
      <a-button type="primary" @click="handleDownloadFile">
        <VerticalAlignBottomOutlined />
      </a-button>
    </div>
  </div>
</template>

<script setup>
import { ref, unref } from 'vue'
// import { download } from './download'

const fileUrl = ref('https://speed.hetzner.de/100MB.bin')
import { message } from 'ant-design-vue'
const handleDownloadFile = () => {
  message.info('下载')
  const url = unref(fileUrl)
  // if (!url || !/http?/.test(url)) return
  console.log('多线程下载开始: ' + +new Date())
  download({
    url,
    chunkSize: 0.1 * 1024 * 1024,
    poolLimit: 6,
  }).then((buffers) => {
    console.log('多线程下载结束: ' + +new Date())
    saveAs({ buffers, name: '我的压缩包', mime: 'application/zip' })
  })
}
</script>

<style lang="scss">
.file-download-input {
  display: flex;
}
</style>
