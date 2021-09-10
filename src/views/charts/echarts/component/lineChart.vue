<template>
  <div id="line-chart"></div>
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

const { setOption } = useEcharts('#line-chart')
setOption(props.option)
</script>

<style lang="scss">
#line-chart {
  height: 300px;
}
</style>
