<template>
  <div>
    <a-row :gutter="16">
      <a-col :span="12">
        <div class="list-container" ref="listContainer" @scroll="handleScroll">
          <div class="list-fill" ref="listFill"></div>
          <div class="list-view" ref="listView">
            <div
              class="list-item"
              ref="listItem"
              v-for="item in viewData"
              :key="item.id"
            >
              {{ item.text }}
            </div>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import { ref, unref, computed, onMounted } from 'vue'
const listContainer = ref(null)
const listView = ref(null)
const listItem = ref(null)

const startIndex = ref(0)
const endIndex = ref(10)
const listData = ref([])
const listFill = ref(null)
const total = ref(10000)
const itemHeight = ref(40)
onMounted(() => {
  for (let i = 0; i < unref(total); i++) {
    listData.value.push({
      id: i,
      text: `这是第${i}个`,
    })
  }
  listFill.value.style.height = unref(total) * unref(itemHeight) + 'px'
})
const viewData = computed(() =>
  listData.value.slice(unref(startIndex), unref(endIndex))
)
const handleScroll = (e) => {
  const scrollTop = e.target.scrollTop
  startIndex.value = Math.floor(scrollTop / unref(itemHeight))
  endIndex.value = unref(startIndex) + 10
  listView.value.style.transform = `translateY(${
    unref(startIndex) * unref(itemHeight)
  }px)`
}
</script>

<style lang="scss">
.list-container {
  .list-fill {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: -1;
  }
  // width: 300px;
  height: 400px;
  border: 1px solid #e8e8e8;
  overflow-y: auto;
  position: relative;
  .list-view {
    .list-item {
      height: 40px;
      padding-left: 20px;
    }
  }
}
</style>
