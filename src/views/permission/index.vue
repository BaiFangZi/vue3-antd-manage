import import { mapMutations from 'vuex';
<template>
  <div>
    <h2>页面权限管理</h2>
    <a-tag>切换权限</a-tag>
    <a-radio-group :default-value="token" @change="handleChange">
      <a-radio value="admin"> admin(管理员) </a-radio>
      <a-radio value="normal"> normal(普通用户) </a-radio>
    </a-radio-group>
    <p style="margin: 10px 0">
      切换到admin按钮，包含所有路由；切换到noemal按钮，则去除管理员路由
    </p>
    <p>
      页面按钮级别的权通过自定义指令<a-tag>v-has</a-tag>实现
      <a-button type="link" @click="handleGoRoute">跳转到按钮权限demo</a-button>
    </p>
    <a-divider></a-divider>

    <router-view></router-view>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
import { defineComponent, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'permission',
  setup() {
    const store = useStore()
    const router = useRouter()
    const state = reactive({
      token: '',
    })
    state.token = store.getters['app/getToken']
    const handleChange = (e) => {
      const token = e.target.value
      store.commit('app/SET_TOKEN', token)
      // this.generateRouter(token)
      store.commit('console/GENERATE_ROUTER', token)
      location.reload()
    }
    const handleGoRoute = () => {
      router.push({ path: '/permission/authBtn' })
    }
    return {
      ...toRefs(state),
      handleChange,
      handleGoRoute,
    }
  },
  //   data() {
  //     return {}
  //   },
  //   created() {
  //     // console.log(this.token)
  //     // this.value=
  //   },
  //   computed: {
  //     ...mapGetters('app', {
  //       token: 'getToken',
  //     }),
  //   },
  //   methods: {
  //     ...mapMutations('app', {
  //       setToken: 'SET_TOKEN',
  //     }),
  //     ...mapMutations('console', {
  //       generateRouter: 'GENERATE_ROUTER',
  //     }),

  //     handleChange(e) {
  //       const token = e.target.value
  //       this.setToken(token)
  //       this.generateRouter(token)
  //       location.reload()
  //     },
  //     handleGoRoute() {
  //       this.$router.push({ path: '/permission/authBtn' })
  //     },
  //   },
})
</script>
<style lang="scss"></style>
