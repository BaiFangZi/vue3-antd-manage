<template>
  <a-tree
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKeys="selectedKeys"
    v-model:checkedKeys="checkedKeys"
    checkable
    :tree-data="treeData"
  >
    <template #title0010><span style="color: #1890ff">sss</span></template>
  </a-tree>
</template>
<script>
import { defineComponent, ref, watch } from 'vue'
const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          {
            key: '0-0-1-0',
            slots: {
              title: 'title0010',
            },
          },
        ],
      },
    ],
  },
]
export default defineComponent({
  setup() {
    const expandedKeys = ref(['0-0-0', '0-0-1'])
    const selectedKeys = ref(['0-0-0', '0-0-1'])
    const checkedKeys = ref(['0-0-0', '0-0-1'])
    watch(expandedKeys, () => {
      console.log('expandedKeys', expandedKeys)
    })
    watch(selectedKeys, () => {
      console.log('selectedKeys', selectedKeys)
    })
    watch(checkedKeys, () => {
      console.log('checkedKeys', checkedKeys)
    })
    return {
      treeData,
      expandedKeys,
      selectedKeys,
      checkedKeys,
    }
  },
})
</script>
