<template>
  <div style="margin-bottom: 16px">
    <a-button
      type="primary"
      :disabled="!hasSelected"
      :loading="loading"
      @click="start"
    >
      Reload
    </a-button>

    <span style="margin-left: 8px">
      <template v-if="hasSelected">
        {{ `Selected ${selectedRowKeys.length} items` }}
      </template>
    </span>
    <TableOptions @search="handleSearch" />
  </div>
  <a-table
    :row-selection="{
      selectedRowKeys: selectedRowKeys,
      onChange: onSelectChange,
    }"
    :columns="columns"
    :data-source="data"
  />
</template>
<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { ColumnProps } from 'ant-design-vue/es/table/interface'
import TableOptions from '@/components/TableOptions/index.vue'
type Key = ColumnProps['key']

interface DataType {
  key: Key
  name: string
  age: number
  address: string
}

const columns = [
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
]

const data: DataType[] = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  })
}

export default defineComponent({
  name: 'Table',
  components: {
    TableOptions,
  },
  setup() {
    const state = reactive({
      selectedRowKeys: [] as Key[], // Check here to configure the default column
      loading: false,
    })
    const hasSelected = computed(() => state.selectedRowKeys.length > 0)

    const start = () => {
      state.loading = true
      // ajax request after empty completing
      setTimeout(() => {
        state.loading = false
        state.selectedRowKeys = []
      }, 1000)
    }
    const onSelectChange = (selectedRowKeys: Key[]) => {
      console.log('selectedRowKeys changed: ', selectedRowKeys)
      state.selectedRowKeys = selectedRowKeys
    }
    const handleSearch = (val: string) => {
      console.log(val)
    }

    return {
      data,
      columns,
      hasSelected,
      ...toRefs(state),

      // func
      start,
      onSelectChange,
      handleSearch,
    }
  },
})
</script>
