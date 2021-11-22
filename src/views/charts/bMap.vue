<template>
  <div class="bmap-content">
    <a-input-group compact>
      <a-input v-model:value="bMapKey" style="width: 50%" :placeholder="$t('tip.bMapInput')" />
      <a-button type="primary" @click="handleCreateBMap">生成地图</a-button>
    </a-input-group>
    <div ref="bMapContent" class="bmap"></div>
  </div>
</template>

<script setup>
import { ref, unref } from 'vue'
import { useScript } from '@/hooks/useScript'
import { useStore } from 'vuex'
// const { createScript } = useScript()
const store = useStore()
const bMapKey = ref(store.state.app.bMapKey)
const bMapContent = ref(null)

const { createScript } = useScript()

const handleCreateBMap = () => {
  createScript({
    src: `https://api.map.baidu.com/getscript?v=3.0&ak=${bMapKey.value}&services=&t=20210201100830`,
  }).then((res) => {
    const BMap = window.BMap
    const map = new BMap.Map(unref(bMapContent))
    const point = new BMap.Point(117.404, 39.915)
    map.centerAndZoom(point, 15)
    map.enableScrollWheelZoom(true)
  })
}

// onMounted(()=>{
//     createScript({
//     src: `https://api.map.baidu.com/getscript?v=3.0&ak=${bMapKey}&services=&t=20210201100830`,
//   }).then((res) => {
//     const BMap = window.BMap
//     const map = new BMap.Map(unref(bMapContent))
//     const point = new BMap.Point(117.404, 39.915)
//     map.centerAndZoom(point, 15)
//     map.enableScrollWheelZoom(true)
//   })
// })
</script>

<style lang="scss">
.bmap-content {
  height: 100%;

  .bmap {
    margin-top: 10px;
    height: calc(100vh - 154px);
  }
}
</style>
