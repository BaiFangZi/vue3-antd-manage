<template>
  <div style="margin-bottom: 16px">
    <a-button type="primary" :loading="loading" @click="handleExportExcelFile">
      导出Excel文件
    </a-button>
  </div>
  <a-table :columns="columns" :data-source="data" />
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

// import { export_json_to_excel } from '@/plugins/exportFile/Export2Excel.js'
import { aoaToSheetXlsx } from '@/plugins/exportFile'

interface DataItem {
  key: string
  name: string
  age: number
  address: string
}
const data: DataItem[] = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i.toString(),
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  })
}

export default defineComponent({
  name: 'exportFile',
  setup() {
    const state = reactive({
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
        },
      ],
      data,
      loading: false,
    })
    const handleExportExcelFile = () => {
      state.loading = true
      const exportName = '表格数据'
      const exportHeader = ['name', 'age', 'address']
      const exportData = state.data.map((item) => [
        item.name,
        item.age,
        item.address,
      ])
      aoaToSheetXlsx({
        data: exportData,
        header: exportHeader,
        filename: exportName,
      })

      setTimeout(() => {
        state.loading = false
      }, 1000)
    }
    return {
      ...toRefs(state),
      handleExportExcelFile,
    }
  },
})
</script>
