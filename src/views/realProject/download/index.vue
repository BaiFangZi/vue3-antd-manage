<template>
  <div>
    <a-alert
      message="将图片转化成base64格式,然后在转成blob格式，然后利用a标签createObjectURL下载"
    ></a-alert>

    <a-button @click="handleDownloadLocalImg">下载本地文件</a-button>
    <a-button style="margin: 20px" @click="handleDownloadUrlImg"> 下载远程文件 </a-button>
    <a-alert message="FileSaver插件下载"> </a-alert>
    <a-button @click="handleSaveAsLocal">下载本地文件</a-button>
    <a-button style="margin: 20px" @click="handleSaveAsUrl">下载远程文件</a-button>
  </div>
</template>

<script setup>
import { download } from './download'
import { saveAs } from 'file-saver'
const handleDownloadLocalImg = () => {
  download('/src/assets/img/avatar.jpg', '本地图片.png')
}

const handleDownloadUrlImg = () => {
  download('https://img1.baidu.com/it/u=177553704,495132282&fm=26&fmt=auto', '远程图片.png')
}

const handleSaveAsLocal = () => {
  let blob = new Blob(['hellw world'], {
    type: 'text/plain;charset=utf-8',
  })
  saveAs(blob, 'hello.txt')
}
const handleSaveAsUrl = () => {
  saveAs('https://img1.baidu.com/it/u=177553704,495132282&fm=26&fmt=auto', 'image.jpg')
}
</script>
