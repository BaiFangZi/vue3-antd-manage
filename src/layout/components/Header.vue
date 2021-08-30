<template>
  <a-layout-header style="background: #fff; padding: 0">
    <slot></slot>
  </a-layout-header>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang="scss">
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}
</style>
