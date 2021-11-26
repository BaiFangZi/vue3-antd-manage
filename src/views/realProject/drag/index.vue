<template>
  <div>
    <a-alert message="双击选中然后拖放元素"></a-alert>
    <div class="drag">
      <div ref="dragOut" class="drag-out">
        <div
          v-for="(item, index) in 2"
          :id="`myDragItem${index}`"
          :key="index"
          class="drag-item"
          draggable
          tabindex="0"
          :class="activeId == `myDragItem${index}` ? 'active' : ''"
          @dragstart="handleDragStart"
          @dragend="handleDragEnd"
          @focus="
            () => {
              activeId = `myDragItem${index}`
            }
          "
          >{{ item }}</div
        >
      </div>

      <div
        ref="dragIn"
        class="drag-in"
        @dragenter="handleDragEnter"
        @dragover="handleDragOver"
        @dragleave="handleDragLeave"
        @drop="handleDrop"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const dragIn = ref()
const activeId = ref(false)

// const dragStatus = ref('未被拖动')
const handleDragStart = (e) => {
  console.log(e.target)
  // console.log('开始被拖动')
  e.dataTransfer.setData('myDrag', e.target.id)
}
const handleDragEnd = (e) => {
  // console.log(e)
  // console.log('拖动结束')
}
const handleDragEnter = (e) => {
  // console.log(e)
  // console.log('拖拽进目标容器')
}
const handleDragOver = (e) => {
  //
  // console.log('在目标容器上移动')
  e.preventDefault()
  // console.log(e)
  // e.dataTransfer.dropEffect = 'move'
}
const handleDragLeave = (e) => {
  // console.log(e)
  // console.log('移出目标容器')
}
const handleDrop = (e) => {
  let dragItem = document.querySelector(`#${e.dataTransfer.getData('myDrag')}`)
  e.target.appendChild(dragItem)
  dragItem.style.top = e.offsetY + 'px'
  dragItem.style.left = e.offsetX + 'px'
}
</script>

<style lang="scss">
.drag {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;

  .drag-out,
  .drag-in {
    width: 40%;
    height: 400px;
    background-color: rgb(218, 201, 206);

    .drag-item {
      // z-index: 999;
      width: 50px;
      height: 50px;
      background-color: moccasin;

      &.active {
        background-color: red;
      }
    }
  }

  .drag-in {
    position: relative;

    .drag-item {
      position: absolute;
    }
  }
}
</style>
