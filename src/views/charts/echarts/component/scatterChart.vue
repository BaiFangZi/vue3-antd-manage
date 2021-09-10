<template>
  <div id="scatter-chart"></div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useEcharts } from '@/hooks/useEcharts'

const props = defineProps({
  option: {
    type: Object,
    default: () => {},
  },
})

const { setOption } = useEcharts('#scatter-chart')
console.log(props.option)
setOption(props.option)
</script>

<style lang="scss">
#scatter-chart {
  height: 300px;
}
</style>
