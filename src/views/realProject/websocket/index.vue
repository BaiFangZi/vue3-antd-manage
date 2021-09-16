<template>
  <a-row>
    <a-col :span="12">
      <a-card title="用户1">
        <div class="flex">
          <a-input v-model:value="value1"></a-input>
          <a-button @click="handleUser1Send">发送</a-button>
        </div>
        <div>
          <p
            v-for="log in user1.chatLog.value"
            :key="log"
            :class="log.user === 'user1' ? 'right' : 'left'"
          >
            {{ log.value }}
            <a-divider></a-divider>
          </p>
        </div>
      </a-card>
    </a-col>
    <a-col :span="12">
      <a-card title="用户2">
        <div class="flex">
          <a-input v-model:value="value2"></a-input>
          <a-button @click="handleUser2Send">发送</a-button>
        </div>
        <div>
          <p
            v-for="log in user2.chatLog.value"
            :key="log"
            :class="log.user === 'user2' ? 'right' : 'left'"
          >
            {{ log.value }}
            <a-divider></a-divider>
          </p>
        </div>
      </a-card></a-col
    >
  </a-row>
</template>

<script setup>
import { ref } from 'vue'
import { useWebSocket } from '@/hooks/useWebSocket'
// import { message } from 'ant-design-vue'
const value1 = ref('')
// const chatLog = ref([])
const user1 = useWebSocket('ws:localhost:9826', 'user1')
const handleUser1Send = () => {
  if (!value1.value.trim()) return
  user1.send({
    user: 'user1',
    value: value1.value,
  })
  value1.value = ''
}

const value2 = ref('')

const user2 = useWebSocket('ws:localhost:9826', 'user2')
const handleUser2Send = () => {
    if (!value2.value.trim()) return

  user2.send({
    user: 'user2',
    value: value2.value,
  })
  value2.value = ''
}
</script>

<style lang="scss">
.right {
  text-align: right;
}
.left {
  text-align: left;
}
</style>
