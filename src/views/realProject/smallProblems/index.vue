<template>
  <div>
    <p>小数精度确实问题，使用math.js库解决</p>
    <div>
      <a-input-number v-model:value="num1"></a-input-number> +
      <a-input-number v-model:value="num2"></a-input-number> ={{ result }}
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import * as math from 'mathjs'
const num1 = ref(0)
const num2 = ref(0)

const result = computed(() => {
  return math.format(math.add(math.bignumber(num1.value), math.bignumber(num2.value)))
})
</script>
