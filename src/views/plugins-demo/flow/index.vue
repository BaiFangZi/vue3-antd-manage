<script setup>
import { ref, toRef } from 'vue'
// import { MiniMap } from '@vue-flow/minimap'
import { Position, VueFlow } from '@vue-flow/core'
import ColorSelectorNode from './components/ColorSelectorNode.vue'
import OutputNode from './components/OutputNode.vue'
import { presets } from './presets.js'

const nodes = ref([
  {
    id: '1',
    type: 'color-selector2',
    data: '',
    position: { x: 0, y: 50 },
  },
  {
    id: '2',
    type: 'output',
    position: { x: 350, y: 114 },
    targetPosition: Position.Left,
  },
])

const edges = ref([
  {
    id: 'e1a-2',
    source: '1',
    sourceHandle: 'a',
    target: '2',
    animated: true,
    // style: {
    //   stroke: presets.ayame,
    // },
  },
])

const colorSelectorData = toRef(() => nodes.value[0].data)

// minimap stroke color functions

</script>

<template>
  <VueFlow v-model:nodes="nodes" :edges="edges" class="custom-node-flow" fit-view-on-init>
    <template #node-color-selector2="props">
      {{ props }}
      <ColorSelectorNode :id="props.id" :data="props.data" />
    </template>

    <template #node-output>
      <OutputNode />
    </template>

    
    <!-- <MiniMap :node-stroke-color="nodeStroke" :node-color="nodeColor" /> -->
  </VueFlow>
</template>

<style>
@import "@vue-flow/core/dist/style.css";
@import "@vue-flow/core/dist/theme-default.css";
@import '@vue-flow/controls/dist/style.css';
@import '@vue-flow/minimap/dist/style.css';
</style>