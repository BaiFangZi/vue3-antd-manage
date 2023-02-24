<template>
  <div class="map-container">
    <a-tabs :active-key="activeKey" @change="handleChangeTab">
      <a-tab-pane key="view" tab="随便看一个地方"></a-tab-pane>
      <a-tab-pane key="marker" tab="地图打点"></a-tab-pane>
    </a-tabs>
    <DCMap :options="options" @on-viewer-completed="handleViewCompleted"></DCMap>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import DCIns from '@/plugins/DCMap'
const activeKey = ref('view')
let viewer = null
const options = reactive({
  key: '1c3ff1358b17417f1782dd1ae7bdd00a',
})
const handleChangeTab = (key) => {
  // console.log(key)
  activeKey.value = key
  if (key === 'view') {
    handleViewOnePlace()
  } else {
    handleAddMarker()
  }
}
const handleViewCompleted = (map) => {
  viewer = map
  // handleAddMarker()
  handleViewOnePlace()
}
const handleViewOnePlace = () => {
  const dcIns = new DCIns(viewer)
  let layer = viewer.getLayer('layer')
  if (layer) {
    layer.clear()
  }
  dcIns.viewOnePlace({
    lng: 116.2,
    lat: 39.56,
    alt: 4000,
    heading: 0,
    pitch: -31,
  })
}
const handleAddMarker = () => {
  const dcIns = new DCIns(viewer)
  dcIns.addMarker({
    lng: 108.934224,
    lat: 34.253734,
    alt: 4000,
    heading: 0,
    pitch: -31,
  })
}
</script>
<style scoped>
.map-container {
  width: 100%;
  height: 100%;
}
</style>
