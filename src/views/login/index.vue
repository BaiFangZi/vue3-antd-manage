<template>
  <div class="login-form-wrapper">
    <a-form
      class="login-form"
      :label-col="formLayout.labelCol"
      :wrapper-col="formLayout.wrapperCol"
    >
      <a-form-item label="用户名" v-bind="validateInfos.username">
        <a-input v-model:value="loginForm.username" placeholder="admin/user" />
      </a-form-item>
      <a-form-item label="密码" v-bind="validateInfos.password">
        <a-input v-model:value="loginForm.password" placeholder="123456" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click.prevent="handleSubmit">登陆</a-button>
        <a-button style="margin-left: 10px" @click="handleReset">重置</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup>
import { defineComponent, reactive, toRaw } from 'vue'
import { Form } from 'ant-design-vue'
import { useRouter } from 'vue-router'

import { loginIn } from '@/api/user'
import { useStore } from 'vuex'
const useForm = Form.useForm
const router = useRouter()
const store = useStore()
const loginForm = reactive({
  username: '',
  password: '',
})

const { resetFields, validate, validateInfos } = useForm(
  loginForm,
  reactive({
    username: [
      {
        required: true,
        message: '请输入账号',
      },
    ],
    password: [
      {
        required: true,
        message: '请输入密码',
      },
    ],
  })
)
const handleSubmit = () => {
  validate()
    .then((res) => {
      loginIn(toRaw(loginForm))
        .then((res) => {
          const { auth } = res.data.data
          store.commit('auth/GENERATE_ROUTES', auth)
          // store.commit('auth/SET_AUTH', auth)
          router.push('/dashboard')
        })
        .catch((err) => {
          console.log(err)
        })
    })
    .catch((err) => {
      console.log('error', err)
    })
}
const handleReset = () => {
  resetFields()
}
const formLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 14,
  },
}
</script>

<style lang="scss">
.login-form-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-form {
    width: 400px;
    height: 240px;
    // border: 1px solid #e8e8e8;
    // border-radius: 5px;

    // display: flex;
  }
}
</style>
