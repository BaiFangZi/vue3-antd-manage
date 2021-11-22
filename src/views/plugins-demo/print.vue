<template>
  <div>
    <a-divider><a-button type="primary" @click="handlePrintImg">打印图片</a-button></a-divider>
    <div>
      <img width="500" :src="img1Url" alt="" />
      <img width="400" :src="img2Url" alt="" />
    </div>

    <a-divider>
      <a-button type="primary" @click="handlePrintHtml">打印HTML</a-button>
    </a-divider>
    <div id="print-html-content">
      <p style="text-align: center">文本居中</p>
      <a-descriptions title="User Info" bordered>
        <a-descriptions-item label="Product">Cloud Database</a-descriptions-item>
        <a-descriptions-item label="Billing Mode">Prepaid</a-descriptions-item>
        <a-descriptions-item label="Automatic Renewal">YES</a-descriptions-item>
        <a-descriptions-item label="Order time">2018-04-24 18:00:00</a-descriptions-item>
        <a-descriptions-item label="Usage Time" :span="2">2019-04-24 18:00:00</a-descriptions-item>
        <a-descriptions-item label="Status" :span="3">
          <a-badge status="processing" text="Running" />
        </a-descriptions-item>
        <a-descriptions-item label="Negotiated Amount">$80.00</a-descriptions-item>
        <a-descriptions-item label="Discount">$20.00</a-descriptions-item>
        <a-descriptions-item label="Official Receipts">$60.00</a-descriptions-item>
        <a-descriptions-item label="Config Info">
          Data disk type: MongoDB
          <br />
          Database version: 3.4
          <br />
          Package: dds.mongo.mid
          <br />
          Storage space: 10 GB
          <br />
          Replication factor: 3
          <br />
          Region: East China 1
          <br />
        </a-descriptions-item>
      </a-descriptions>
    </div>
    <a-divider>
      <a-button type="primary" @click="handlePrintJson">打印JSON</a-button>
    </a-divider>
    <div>
      <p v-for="item in jsonData" :key="item.id">
        <span>id:{{ item.id }} </span>
        <span style="margin: 10px">name:{{ item.name }}</span>
        <span>address:{{ item.address }}</span>
      </p>
    </div>

    <a-divider>
      <a-button type="primary" @click="handlePrintPdf">打印PDF</a-button>
    </a-divider>
    <div>
      <a-alert message="找到路径下对应的pdf文件进行打印"></a-alert>
    </div>
  </div>
</template>
<script>
const img1Url = 'https://gitee.com/baifangzi/blogimage/raw/master/img/20210907193825.png'
const img2Url = 'https://gitee.com/baifangzi/blogimage/raw/master/img/20210907193647.png'
const jsonData = []
for (let i = 0; i < 10; i++) {
  jsonData.push({
    id: i,
    name: `胡图图-${i}`,
    address: '翻斗花园',
  })
}
</script>
<script setup>
import print from 'print-js'
const handlePrintImg = () => {
  print({
    printable: [img1Url, img2Url],
    type: 'image',
  })
}
const handlePrintHtml = () => {
  print({
    printable: 'print-html-content',
    type: 'html',
    header: '打印的标题',
    targetStyles: ['*'], // 处理的样式 ，* 代表所有样式
  })
}
const handlePrintJson = () => {
  print({
    printable: jsonData,
    properties: ['id', 'name', 'address'],
    type: 'json',
  })
}
const handlePrintPdf = () => {
  print({
    printable: 'src/views/plugins-demo/test-pdf.pdf', //路径
    type: 'pdf',
  })
}
</script>
<style lang="scss">
.print-item {
  padding: 10px;
}
</style>
