<template>
  <div>
    <a-alert :message="$t('tip.windowPrintAlert')" type="success" />
    <br />
    <a-alert :message="$t('tip.printJSAlert')" type="success"></a-alert>
    <br />
    <a-divider>
      <a-button type="primary" @click="handleWindowPrintPDF"> window.print()生成 </a-button>
      <a-button style="margin-left: 20px" type="primary" @click="handlePrintJSPDf">
        print-js生成
      </a-button>
    </a-divider>
    <h2>目标打印机选择 <span style="color: red"> 另存为PDF</span></h2>
    <img
      width="800"
      src="https://gitee.com/baifangzi/blogimage/raw/master/img/20210908113732.png"
      alt=""
    />

    <div id="pdf-content">
      <br />
      <img src="https://gitee.com/baifangzi/blogimage/raw/master/img/20210907193825.png" alt="" />
      <h2>pdf普通文本</h2>
      <p>这是一段文本这是一段文本</p>
      <p>这是一段文本这是一段文本</p>
      <p>这是一段文本这是一段文本</p>
      <p>这是一段文本这是一段文本</p>
      <h2>为标签设置样式</h2>
      <p style="color: red">红色文本style样式</p>
      <p class="green">绿色文本class样式</p>
      <h2 class="paging">分页--在这个标签之后插入分页符，后面的内容会在下一页显示</h2>
      <p>第二页的内容第二页的内容第二页的内容第二页的内容</p>
    </div>
  </div>
</template>
<script setup>
import print from 'print-js'

const handleWindowPrintPDF = () => {
  window.print()
}
const handlePrintJSPDf = () => {
  // console.log(23)
  print({
    printable: 'pdf-content',
    type: 'html',
    targetStyles: ['*'], // 处理的样式 ，* 代表所有样式
  })
}
</script>

<style lang="scss">
.paging {
  page-break-after: always;
}

.green {
  color: green;
}
</style>
