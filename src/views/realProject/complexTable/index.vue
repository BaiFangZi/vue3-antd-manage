<template>
  <div class="">
    <TableHeader @search="onSearch">
      <AddModal @add="onAddTableItem" />
    </TableHeader>
    <a-table
      :columns="columns"
      :row-key="(record) => record.id"
      :data-source="tableData"
      :pagination="pagination"
      :loading="loading"
      :row-selection="{
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange,
      }"
      @change="handleTableChange"
    >
      <template #name="{ text, record }">
        <div class="editable-cell">
          <div v-if="editableData[record.id]" class="editable-cell-input-wrapper">
            <a-input v-model:value="editableData[record.id].name" @press-enter="save(record.id)" />
            <check-outlined class="editable-cell-icon-check" @click="save(record.id)" />
          </div>
          <div v-else class="editable-cell-text-wrapper">
            {{ text || ' ' }}
            <edit-outlined class="editable-cell-icon" @click="edit(record.id)" />
          </div>
        </div>
      </template>
      <template #status="{ text }">
        <a-tag v-if="text" color="#87d068">在线</a-tag>
        <a-tag v-else color="#f50">离线</a-tag>
      </template>
      <template #operations="{ record }">
        <a-button size="small" style="margin-right: 5px" @click="handleUpdate(record)">
          编辑
        </a-button>
        <a-popconfirm
          title="确认删除该项吗"
          ok-text="是"
          cancel-text="否"
          @confirm="handleDelete(record.id)"
        >
          <a-button size="small" type="primary" danger>删除</a-button>
        </a-popconfirm>
      </template>
    </a-table>
    <UpdateModal
      v-if="visible"
      :visible="visible"
      :update-data="updateData"
      @update="onUpdateTableItem"
      @cancel="visible = false"
    />
  </div>
</template>

<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    slots: {
      customRender: 'name',
    },
  },
  // {
  //   title: 'Star',
  //   dataIndex: 'star',
  // },
  {
    title: 'Status',
    dataIndex: 'status',
    slots: {
      customRender: 'status',
    },
    filters: [
      {
        text: '在线',
        value: true,
      },
      {
        text: '离线',
        value: false,
      },
    ],
    onFilter: (value, record) => record.status === value,
  },
  {
    title: 'Upgraded',
    dataIndex: 'upgraded',
    sorter: (a, b) => a.upgraded - b.upgraded,
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Operations',
    dataIndex: 'operations',
    slots: {
      customRender: 'operations',
    },
  },
]
</script>

<script setup>
import { queryTable } from '@/api/data'
import { onMounted, ref, unref, reactive } from 'vue'
import { message } from 'ant-design-vue'
import AddModal from './component/AddModal.vue'
import UpdateModal from './component/UpdateModal.vue'
const loading = ref(false)
const tableData = ref([])
const pagination = ref({
  current: 1,
  pageSize: 10,
  showSizeChanger: true,
  showQuickJumper: true,
})

const selectedRowKeys = ref([])
const editableData = reactive({})
const handleQueryTableData = (current, pageSize) => {
  loading.value = true
  let page = { ...unref(pagination) }
  queryTable({ current, pageSize }).then((res) => {
    tableData.value = res.data.data
    loading.value = false
    pagination.value = {
      ...page,
      current,
      pageSize,
      total: res.data.count,
    }
  })
}

//  mock 数据id随机，页面效果不会双向绑定checkbox，但是实际开发不会存在该问题
const onSelectChange = (keys) => {
  selectedRowKeys.value = keys
  console.log(selectedRowKeys)
}
const handleTableChange = ({ current, pageSize }) => {
  handleQueryTableData(current, pageSize)
}
const onAddTableItem = () => {
  const { current, pageSize } = unref(pagination)
  handleQueryTableData(current, pageSize)
}

const visible = ref(false)
// let updateData = reactive({})
let updateData = ref({})
const handleUpdate = (record) => {
  visible.value = true
  updateData.value = record
}
const onUpdateTableItem = () => {
  // console.log(2)
  visible.value = false
  const { current, pageSize } = unref(pagination)
  handleQueryTableData(current, pageSize)
}

const onSearch = (val) => {
  console.log('搜索得内容是', val)
}
const handleDelete = (id) => {
  console.log(id)
}

const edit = (id) => {
  editableData[id] = tableData.value.filter((item) => id === item.id)[0]
  console.log(editableData)
}

const save = (id) => {
  // 想后台发送更新请求
  loading.value = true
  setTimeout(() => {
    Object.assign(tableData.value.filter((item) => id === item.id)[0], editableData[id])
    delete editableData[id]
    loading.value = false
    message.info('更改成功')
  }, 500)
}

onMounted(() => {
  const { current, pageSize } = unref(pagination)
  handleQueryTableData(current, pageSize)
})
</script>

<style lang="scss" scope>
.editable-cell {
  position: relative;

  .editable-cell-input-wrapper,
  .editable-cell-text-wrapper {
    padding-right: 24px;
  }

  .editable-cell-text-wrapper {
    padding: 5px 24px 5px 5px;
  }

  .editable-cell-icon,
  .editable-cell-icon-check {
    position: absolute;
    right: 0;
    width: 20px;
    cursor: pointer;
  }

  .editable-cell-icon {
    margin-top: 4px;
    display: none;
  }

  .editable-cell-icon-check {
    line-height: 28px;
  }

  .editable-cell-icon:hover,
  .editable-cell-icon-check:hover {
    color: #108ee9;
  }

  .editable-add-btn {
    margin-bottom: 8px;
  }
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}
</style>
