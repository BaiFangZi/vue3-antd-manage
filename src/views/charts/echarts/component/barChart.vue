<template>
  <div id="bar-chart"></div>
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

const { setOption } = useEcharts('#bar-chart')
setOption(props.option)
</script>

<style lang="scss">
#bar-chart {
  height: 300px;
}
</style>
