<template>
  <div>
    <a-alert message="项目根目录下启动server.js"></a-alert>
    <a-row>
      <a-col :span="12">
        <a-card title="用户1">
          <template #extra>
            <a-avatar class="user" style="background: #87d068">
              <template #icon><UserOutlined /></template>
            </a-avatar>
          </template>
          <div class="flex-center">
            <a-input v-model:value="value1"></a-input>
            <a-button @click="handleUser1Send">发送</a-button>
          </div>
          <div>
            <p
              v-for="log in user1.chatLog.value"
              :key="log"
              :class="log.user === 'user1' ? 'current-user' : 'other-user'"
            >
              <a-avatar class="user" :class="log.user === 'user1' ? 'green' : 'blue'">
                <template #icon><UserOutlined /></template>
              </a-avatar>
              <span class="value"> {{ log.value }}</span>
              <a-divider></a-divider>
            </p>
          </div>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="用户2">
          <template #extra>
            <a-avatar class="user" style="background: #1890ff">
              <template #icon><UserOutlined /></template>
            </a-avatar>
          </template>
          <div class="flex-center">
            <a-input v-model:value="value2"></a-input>
            <a-button @click="handleUser2Send">发送</a-button>
          </div>
          <div>
            <p
              v-for="log in user2.chatLog.value"
              :key="log"
              :class="log.user === 'user2' ? 'current-user' : 'other-user'"
            >
              <a-avatar class="user" :class="log.user === 'user1' ? 'green' : 'blue'">
                <template #icon><UserOutlined /></template>
              </a-avatar>
              <span class="value"> {{ log.value }}</span>
              <a-divider></a-divider>
            </p>
          </div> </a-card
      ></a-col>
    </a-row>
  </div>
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
.current-user {
  .user,
  .value {
    float: right;
    margin: 8px;
  }
}

.other-user {
  .user,
  .value {
    float: left;
    margin: 8px;
  }
}

.green {
  background: #87d068;
}

.blue {
  background-color: #1890ff;
}
</style>
