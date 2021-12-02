<template>
  <div>
    <a-button class="alive-link">
      <router-link to="/aliveRouter1">aliveRouter1</router-link></a-button
    >
    <a-button class="alive-link"
      ><router-link to="/aliveRouter2">aliveRouter2</router-link></a-button
    >
    <a-button class="alive-link">
      <router-link to="/aliveRouter3">aliveRouter3</router-link></a-button
    >
    <div class="alive-content">
      <router-view v-slot="{ Component }">
        <!-- todo: 打包之后keep-alive不生效，需要绑定一个key -->
        <keep-alive :include="includeRouter">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const includeRouter = ref(['AliveRouter1', 'AliveRouter3']) // 使用缓存的组件
</script>

<style lang="scss">
.alive-link {
  margin: 0 10px;
}

.alive-content {
  margin: 10px 20px;
}
</style>
