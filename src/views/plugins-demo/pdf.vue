<template>
  <div>
    <a-alert :message="$t('tip.windowPrintAlert')" type="success" />
    <br />
    <a-alert :message="$t('tip.printJSAlert')" type="success"></a-alert>
    <br />
    <a-divider>
      <a-button type="primary" @click="handleWindowPrintPDF"> window.print()生成 </a-button>
      <a-button style="margin-left: 20px" type="primary" @click="handlePrintPDF">
        print-js生成
      </a-button>
      <a-button type="primary" style="margin-left: 20px" @click="handleJsPrintPDF"
        >js-pdf + html2canvas生成</a-button
      >
    </a-divider>
    <h2>目标打印机选择 <span ref="printDom" style="color: red"> 另存为PDF</span></h2>
    <img
      width="200"
      src="https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg"
      alt=""
    />

    <div id="pdf-content">
      <br />
      <!-- <img src="https://img.bizhizu.com/2015/1231/20151231030245752.jpg" alt="" /> -->
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
import { ref } from 'vue'
import print from 'print-js'

// vue2版本
// import html2canvas from '@/plugins/html2canvas.js'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
const handleWindowPrintPDF = () => {
  window.print()
}
const handlePrintPDF = () => {
  console.log(23)
  print({
    printable: 'pdf-content',
    type: 'html',
    useCORS: true, // 解决不显示图片问题
    targetStyles: ['*'], // 处理的样式 ，* 代表所有样式
  })
}
const printDom = ref(null)
const handleJsPrintPDF = () => {
  html2canvas(printDom.value, {
    height: printDom.value.scrollHeight,
    windowHeight: printDom.value.scrollHeight,
    useCORS: true, // 解决不显示图片问题
  }).then((canvas) => {
    let context = canvas.getContext('2d')
    let img = new Image()
    context.drawImage(img, 0, 0, canvas.width, canvas.height)
    let url = canvas.toDataURL('images/png', 4.0)
    let imgWidth = 595.28
    let imgHeight = (595.28 / canvas.width) * canvas.height
    // debugger

    const pdf = new jsPDF('', 'pt', 'a4')
    pdf.addImage(url, 'png', 0, 0, imgWidth, imgHeight)
    pdf.save('维保记录.pdf')
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
