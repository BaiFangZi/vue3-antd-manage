<template>
  <div id="vditor"></div>
</template>
<script setup>
import { ref, onMounted, markRaw } from 'vue'
import Vditor from 'vditor'
import 'vditor/dist/index.css'
const contentEditor = ref('')
onMounted(() => {
  contentEditor.value = markRaw(
    new Vditor('vditor', {
      // height: 360,
      minHeight: 360,
      toolbarConfig: {
        pin: true,
      },
      cache: {
        enable: false,
      },
      after: () => {
        // 异步渲染完成后的回调方法
        setTimeout(() => {
          contentEditor.value.setValue('hello,Vditor+Vue!')
        }, 2000)
      },
    })
  )
})
</script>
