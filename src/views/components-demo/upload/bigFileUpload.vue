<template>
  <div>
    <input ref="upload" type="file" style="display: none" @change="handleChange" />
    <a-button @click="upload.click()">
      <upload-outlined></upload-outlined>
      大文件上传
    </a-button>
  </div>
</template>
<script setup>
import { message } from 'ant-design-vue'
import { ref } from 'vue'
import { uploadBigFile } from '@/api/local'
const upload = ref()

const MAX_FILE_SIZE = 10 * 1024 * 1024 //

const createFileChunk = (file, chunkSize) => {
  let fileChunkList = []
  for (let index = 0; index < file.size; index += chunkSize) {
    fileChunkList.push({
      file: file.slice(index, index + chunkSize),
    })
  }
  return fileChunkList
}

const handleChange = (e) => {
  let file = e.target.files[0]
  if (!file) return

  let fileChunkList = createFileChunk(file, MAX_FILE_SIZE).map((chunk, index) => {
    return {
      filename: file.name,
      chunk,
      hash: `${file.name}-${index}`,
    }
  })
  // console.log(fileChunkList)

  let requestList = fileChunkList.map(async ({ chunk, hash, filename }) => {
    console.log(chunk, hash)
    let formData = new FormData()
    formData.append('chunk', chunk.file)
    formData.append('hash', hash)
    formData.append('filename', filename)
    return uploadBigFile(formData)
  })

  Promise.all(requestList)
    .then((res) => {
      console.log(res)
      message.success('上传成功')
    })
    .catch((err) => {
      console.log(err)
      message.warning('上传失败')
    })
}
</script>
