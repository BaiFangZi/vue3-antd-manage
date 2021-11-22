<template>
  <div>
    <div class="table-title">
      <div class="table-title-item">
        <a-input v-model:value="exportZipName" :placeholder="$t('tip.exportZipInput')" />
        <a-button style="margin-left: 16px" @click="handleExportZip">{{
          $t('common.exportZip')
        }}</a-button>
      </div>
    </div>
    <a-table :columns="columns" :data-source="tableData" bordered></a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    width: '25%',
  },
  {
    title: 'age',
    dataIndex: 'age',
    width: '15%',
  },
  {
    title: 'address',
    dataIndex: 'address',
    width: '40%',
  },
]
const data = []

for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  })
}
</script>
<script setup>
import { ref, unref } from 'vue'

const tableData = ref(data)
const exportZipName = ref('')
const handleExportZip = () => {
  let fileName = unref(exportZipName)

  const header = ['id', 'name', 'age', 'address']
  const data = unref(tableData).map((item) => [item.id, item.name, item.age, item.address])
  import('@/plugins/Export2Zip').then(({ txtToZip }) => {
    txtToZip(header, data, fileName, fileName)
  })
}
</script>
