<template>
  <div class="amap-content">
    <a-input-group compact>
      <a-input v-model:value="aMapKey" style="width: 50%" :placeholder="$t('tip.aMapInput')" />
      <a-button type="primary" @click="handleCreateAMap">生成地图</a-button>
    </a-input-group>
    <div ref="aMapContent" class="amap"></div>
  </div>
</template>
<script></script>
<script setup>
import { ref, unref } from 'vue'
import { useScript } from '@/hooks/useScript'
import { useStore } from 'vuex'
const { createScript } = useScript()
const store = useStore()
const aMapKey = ref(store.state.app.aMapKey)
const aMapContent = ref(null)
const handleCreateAMap = () => {
  store.commit('app/SET_AMAP_KEY', unref(aMapKey))
  createScript({
    src: `https://webapi.amap.com/maps?v=1.4.2&key=${unref(aMapKey)}`,
  }).then((res) => {
    // eslint-disable-next-line no-undef
    var map = new AMap.Map(unref(aMapContent), {
      center: [116.480983, 39.989628],
      zoom: 11,
    })
  })
}
</script>

<style lang="scss">
.amap-content {
  height: 100%;

  .amap {
    margin-top: 10px;
    height: calc(100vh - 154px);
  }
}
</style>
