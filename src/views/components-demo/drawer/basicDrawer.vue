<template>
  <a-button type="primary" @click="showDrawer">Open</a-button>
  <a-drawer
    v-model:visible="visible"
    title="Basic Drawer"
    placement="right"
    :closable="false"
    :after-visible-change="afterVisibleChange"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const visible = ref(false)

    const afterVisibleChange = (bool) => {
      console.log('visible', bool)
    }

    const showDrawer = () => {
      visible.value = true
    }

    return {
      visible,
      afterVisibleChange,
      showDrawer,
    }
  },
})
</script>
