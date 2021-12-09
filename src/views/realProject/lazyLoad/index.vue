<template>
  <div>
    <a-alert message="使用scroll事件监听时，注意注册是父元素.img-wrapper选择器的事件"></a-alert>
    <br />
    <div class="img-wrapper">
      <img v-for="(img, index) in image" :key="index" v-lazy="img" class="img" alt="" />
      <p></p>
    </div>
  </div>
</template>
<script setup>
import image from './image'
</script>

<style lang="scss">
.img-wrapper {
  height: 400px;
  overflow: auto;

  .img {
    display: block;
    width: 300px;
    height: 300px;
    margin: 20px auto;
  }
}
</style>
