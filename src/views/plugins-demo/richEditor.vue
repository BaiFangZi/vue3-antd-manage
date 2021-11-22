<template>
  <div class="editor-content">
    <div class="editor-text"></div>
    <div class="editor-option">
      <a-button type="primary" @click="handleSubmitHtml">提交</a-button>
    </div>
  </div>
</template>

<script setup>
import Quill from 'quill'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { markRaw, onMounted, ref } from 'vue'
import { message } from 'ant-design-vue'

let editorContent = ref(null)

const handleSubmitHtml = () => {
  editorContent.value = document.querySelector('.ql-editor')
  console.log(editorContent.value)
  message.warning(`在控制台查看提交内容`)
}

onMounted(() => {
  markRaw(
    new Quill('.editor-text', {
      theme: 'snow',
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线
          ['blockquote', 'code-block'], // 引用  代码块
          [{ list: 'ordered' }, { list: 'bullet' }], // 有序、无序列表
          [{ indent: '-1' }, { indent: '+1' }], // 缩进
          [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
          [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
          [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
          [{ align: [] }], // 对齐方式
          ['clean'], // 清除文本格式
          ['link', 'image', 'video'], // 链接、图片、视频
        ],
      },
    })
  )
})
</script>

<style lang="scss">
.editor-content {
  display: flex;
  flex-direction: column;

  .editor-text {
    height: 400px;

    .ql-editing {
      top: 0 !important;
      bottom: 0 !important;
      left: 0 !important;
      right: 0 !important;
      margin: auto;
      width: 400px;
      height: 40px;
    }
  }

  .editor-option {
    margin-top: 10px;

    button {
      float: right;
    }
  }
}
</style>
