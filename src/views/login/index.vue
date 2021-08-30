<template>
  <div class="login-form">
    <a-form ref="ruleForm" :model="loginForm" :rules="rules" v-bind="layout">
      <a-form-item label="用户名" name="user">
        <a-input v-model:value="loginForm.user" autocomplete="off" />
      </a-form-item>
      <a-form-item label="密码" name="password">
        <a-input-password
          v-model:value="loginForm.password"
          type="password"
          autocomplete="off"
        />
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button class="login-submit-btn" type="primary" @click="submitForm">
          登陆
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts">
import {
  RuleObject,
  ValidateErrorEntity,
} from 'ant-design-vue/es/form/interface'
import { useStore } from 'vuex'
import { login } from '@/api/app'
import { isAccount, isPassword } from '@/utils/formReg'
import { defineComponent, reactive, toRefs, UnwrapRef, ref } from 'vue'
import { useRouter } from 'vue-router'

interface FormState {
  user: string
  password: string
}

export default defineComponent({
  setup() {
    const router = useRouter()
    const store = useStore()
    let validateUser = async (rule: RuleObject, value: string) => {
      console.log(value)
      if (value.trim() === '') {
        return Promise.reject('账号不能为空')
      } else {
        if (isAccount.test(value)) {
          return Promise.resolve()
        } else {
          return Promise.reject('英文数字4-16位')
        }
      }
    }
    let validatePassWord = async (rule: RuleObject, value: string) => {
      if (value.trim() === '') {
        return Promise.reject('密码不能为空')
      } else {
        if (isPassword.test(value)) {
          return Promise.resolve()
        } else {
          console.log('wewewewe')
          return Promise.reject('英文数字下划线4-16位')
        }
      }
    }
    const ruleForm = ref()
    const loginForm: UnwrapRef<FormState> = reactive({
      user: 'admin',
      password: '123456',
    })
    const layout = {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
    }
    const rules = {
      user: [
        {
          validator: validateUser,
          trigger: 'change',
        },
      ],
      password: [
        {
          validator: validatePassWord,
          trigger: 'change',
        },
      ],
    }

    const submitForm = () => {
      // console.log(12121)
      ruleForm.value.validate().then(() => {
        login({}).then((res) => {
          const { auth } = res.data.data
          store.commit('app/SET_TOKEN', auth)
          store.commit('console/GENERATE_ROUTER', auth)
          router.push('/')
        })
      })
    }

    return {
      // ...toRefs(state),
      loginForm,
      ruleForm,
      rules,
      layout,
      // handleFinish,
      submitForm,
    }
  },
})

// export default {
//   data() {
//     let validateUser = (rule, value, callback) => {
//       if (value.trim() === '') {
//         callback('账号不能为空')
//       } else {
//         if (isAccount.test(value)) {
//           callback()
//         } else {
//           callback('英文数字4-16位')
//         }
//       }
//     }
//     let validatePassWord = (rule, value, callback) => {
//       if (value.trim() === '') {
//         callback('密码不能为空')
//       } else {
//         if (isPassword.test(value)) {
//           callback()
//         } else {
//           console.log('wewewewe')
//           callback('英文数字下划线4-16位')
//         }
//       }

//       // isPassWord.test(value) ? callback() : callback('英文数字下划线4-16位')
//     }
//     return {
//       ruleForm: {
//         user: 'admin',
//         password: '123456',
//         // age: "",
//       },
//       rules: {
//         user: [
//           {
//             validator: validateUser,
//             trigger: 'change',
//           },
//         ],
//         password: [
//           {
//             validator: validatePassWord,
//             trigger: 'change',
//           },
//         ],
//       },
//       layout: {
//         labelCol: {
//           span: 4,
//         },
//         wrapperCol: {
//           span: 14,
//         },
//       },
//     }
//   },
//   methods: {
//     ...mapMutations('console', {
//       generateRouter: 'GENERATE_ROUTER',
//     }),
//     ...mapMutations('app', {
//       setToken: 'SET_TOKEN',
//     }),
//     submitForm(formName) {
//       this.$refs[formName].validate((valid) => {
//         if (valid) {
//           login()
//             .then((res) => {
//               const { auth } = res.data.data
//               // console.log(res)
//               this.setToken(auth) //将token存入localStorage
//               this.generateRouter(auth) //生成路由
//               this.$router.push({ path: '/table' })
//             })
//             .catch((err) => {
//               console.log(err)
//             })
//         } else {
//           console.log('error submit!!')
//           return false
//         }
//       })
//     },
//   },
// }
</script>
<style lang="scss">
.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  height: 100%;
  .login-submit-btn {
    width: 100%;
  }
  .ant-form {
    width: 500px;
  }
}
</style>
