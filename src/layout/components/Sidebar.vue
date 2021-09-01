<template>
  <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
    <div class="logo"></div>
    <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
      <a-menu-item key="1">
        <span>nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <span>nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <span>nav 3</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script setup>
const props = defineProps({
  collapsed: Boolean,
})
</script>
<style lang="scss">
.logo {
  // display: inline-block;
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
  color: #fff;
  text-align: center;
  // vertical-align: middle;
  line-height: 32px;
  font-size: 18px;
}
</style>
