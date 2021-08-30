<template>
  <div>
    <h3>页面按钮权限管理</h3>
    <div>
      <a-button type="primary" class="per-btn" v-has="['admin', 'normal']"
        >admin和normal的按钮</a-button
      >

      <a-button type="danger" class="per-btn" v-has="['admin']"
        >admin的按钮</a-button
      >
      <a-button class="per-btn" v-has="['normal']">normal的按钮</a-button>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.per-btn {
  margin: 0 10px;
}
</style>
