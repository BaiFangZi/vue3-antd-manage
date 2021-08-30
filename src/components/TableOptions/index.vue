<template>
  <div class="table-operations">
    <div class="table-operations-left">
      <slot></slot>
    </div>
    <div class="table-operations-right">
      <a-input-search
        :placeholder="placeholder"
        enter-button
        v-model:value="searchValue"
        @keyup.enter="handleSearch"
      />

      <a-button
        @click="handleClearValue"
        shape="circle"
        class="input-clear-btn"
      >
        <CloseOutlined />
      </a-button>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue'
import { CloseOutlined } from '@ant-design/icons-vue'
export default defineComponent({
  name: 'TableOpeartions',
  emits: ['search'],
  props: {
    placeholder: {
      type: String,
      default: '',
    },
  },
  components: {
    CloseOutlined,
  },
  setup(_, { emit }) {
    const state = reactive({
      searchValue: '',
    })
    const handleClearValue = () => {
      // cons
      state.searchValue = ''
    }
    const handleSearch = () => {
      if (!state.searchValue.trim()) return false
      emit('search', state.searchValue)
    }
    return {
      ...toRefs(state),
      handleClearValue,
      handleSearch,
    }
  },
})
</script>
<style lang="scss">
.table-operations {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  .table-opeartions-left,
  .table-operations-right {
    display: flex;
    align-items: center;
    // justify-content: center;
  }
  .table-operations-right {
    .input-clear-btn {
      margin-left: 10px;
    }
  }
}
</style>
