<script setup>
import { Handle, Position, useVueFlow } from '@vue-flow/core'
import { colors } from '../presets.js'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
})

const { updateNodeData, getConnectedEdges } = useVueFlow()

function onSelect (color) {
  updateNodeData(props.id, { color, isGradient: false })

  const connectedEdges = getConnectedEdges(props.id)
  for (const edge of connectedEdges) {
    edge.style = {
      stroke: color,
    }
  }
}

function onGradient () {
  updateNodeData(props.id, { isGradient: true })
}
</script>

<template>
  <div>Select a color</div>
  <div class="color-selector nodrag nopan">
    <input type="text">
    <!-- <button v-for="{ name: colorName, value: color } of colors" :key="colorName" :title="colorName"
      :class="{ selected: color === data.color }" :style="{ backgroundColor: color }" type="button"
      @click="onSelect(color)" />

    <button class="animated-bg-gradient" title="gradient" type="button" @click="onGradient" /> -->
  </div>

  <Handle id="a" type="source" :position="Position.Right" />
</template>

<style>
.vue-flow__minimap {
  transform: scale(75%);
  transform-origin: bottom right;
}

.vue-flow__edges {
  filter: invert(100%)
}

.vue-flow__handle {
  height: 24px;
  width: 8px;
  border-radius: 4px
}

.vue-flow__node-color-selector2 {
  border: 1px solid #777;
  padding: 10px;
  border-radius: 10px;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  max-width: 250px
}

.vue-flow__node-color-selector .color-selector {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 90%;
  margin: auto;
  gap: 4px
}

.vue-flow__node-color-selector .color-selector button {
  border: none;
  cursor: pointer;
  padding: 5px;
  width: 25px;
  height: 25px;
  border-radius: 8px;
  box-shadow: 0 0 10px #0000004d
}

.vue-flow__node-color-selector .color-selector button:hover {
  box-shadow: 0 0 0 2px #2563eb;
  transition: box-shadow .2s
}

.vue-flow__node-color-selector .color-selector button.selected {
  box-shadow: 0 0 0 2px #2563eb
}

.vue-flow__node-color-selector .vue-flow__handle {
  background-color: #ec4899;
  height: 24px;
  width: 8px;
  border-radius: 4px
}

.animated-bg-gradient {
  background: linear-gradient(122deg, #6f3381, #81c7d4, #fedfe1, #fffffb);
  background-size: 800% 800%;
  -webkit-animation: gradient 4s ease infinite;
  -moz-animation: gradient 4s ease infinite;
  animation: gradient 4s ease infinite
}

@-webkit-keyframes gradient {
  0% {
    background-position: 0% 22%
  }

  50% {
    background-position: 100% 79%
  }

  to {
    background-position: 0% 22%
  }


}

@-moz-keyframes gradient {
  0% {
    background-position: 0% 22%
  }

  50% {
    background-position: 100% 79%
  }

  to {
    background-position: 0% 22%
  }


}

@keyframes gradient {
  0% {
    background-position: 0% 22%
  }

  50% {
    background-position: 100% 79%
  }

  to {
    background-position: 0% 22%
  }


}
</style>