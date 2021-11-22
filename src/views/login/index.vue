<template>
  <div class="login-header">
    <LangMenu />
  </div>
  <div class="login-form-content">
    <div class="login-form">
      <a-form :label-col="formLayout.labelCol" :wrapper-col="formLayout.wrapperCol">
        <a-form-item v-bind="validateInfos.username">
          <a-input v-model:value="loginForm.username" placeholder="admin/user" />
        </a-form-item>
        <a-form-item v-bind="validateInfos.password">
          <a-input v-model:value="loginForm.password" placeholder="123456" />
        </a-form-item>
      </a-form>
      <div class="login-control">
        <a-checkbox>{{ $t('common.remember') }}</a-checkbox>
        <a href="" style="color: #0960bd"> {{ $t('common.forget') }}？ </a>
      </div>
      <div class="login-form-operations">
        <a-button block type="primary" @click.prevent="handleSubmit">
          {{ $t('common.loginIn') }}
        </a-button>
        <a-button block @click="handleReset"> {{ $t('common.reset') }}</a-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, toRaw } from 'vue'
// import LangMenu from '@/layout/components/LangMenu.vue'
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
          store.commit('auth/SET_AUTH', auth)
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
    span: 6,
  },
  wrapperCol: {
    // span: 14,
  },
}
</script>

<style lang="scss">
.login-header {
  height: 50px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  border: 1px solid #e8e8e8;

  .lang-menu {
    margin-right: 30px;
  }
}

.login-form-content {
  height: calc(100% - 50px);
  display: flex;
  align-items: center;
  justify-content: center;

  .login-form {
    width: 400px;
    height: 290px;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    padding: 20px;

    .login-control {
      display: flex;
      justify-content: space-between;
    }

    .login-form-operations {
      .ant-btn {
        margin: 8px 0;
      }
    }
  }
}
</style>
