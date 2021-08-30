<template>
  <!-- <config-provider :locale="zhCN"> -->
  <!-- <a-button type="primary">121212</a-button> -->
  <router-view></router-view>
  <!-- </config-provider> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'

export default defineComponent({
  name: 'App',
  components: { ConfigProvider },
  setup() {
    return {
      zhCN,
    }
  },
})
</script>

<style></style>
