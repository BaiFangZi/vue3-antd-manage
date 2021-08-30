<template>
  <a-layout id="screen">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <side-bar></side-bar>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header">
        <div class="header-left">
          <component
            class="trigger"
            :is="collapsed ? 'menu-unfold-outlined' : 'menu-fold-outlined'"
            @click="() => (collapsed = !collapsed)"
          />
          <bread-crumb></bread-crumb>
        </div>
        <div class="header-right">
          <span class="header-msg">
            <!-- <a-icon class="user" type="user" /> -->
            <a-dropdown class="avatar">
              <template #overlay>
                <a-menu>
                  <!-- <UserOutlined /> -->
                  <a-menu-item key="userCenter" @click="goUserCenter"
                    >个人中心</a-menu-item
                  >
                  <a-menu-item key="signOut" @click="signOut"
                    >退出登录</a-menu-item
                  >
                </a-menu>
              </template>

              <a-button shape="circle">
                <!-- <template #icon></template> -->
                <UserOutlined />
              </a-button>
            </a-dropdown>
          </span>
        </div>
      </a-layout-header>
      <a-layout-content>
        <router-tags></router-tags>
        <div class="main">
          <!-- 缓存路由 -->
          <router-view v-slot="{ Component }">
            <keep-alive :exclude="excludeRouter">
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import SideBar from './components/sideBar/index.vue'
import RouterTags from './components/routerTags/index.vue'
import BreadCrumb from './components/breadcrumb/index.vue'
import { useStore } from 'vuex'
import {
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons-vue'
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'layout',
  components: {
    SideBar,
    RouterTags,
    BreadCrumb,
    UserOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    const state = reactive({
      collapsed: false,
      excludeRouter: [],
    })
    const goUserCenter = () => {
      router.push('/userCenter')
    }
    const signOut = () => {
      store.commit('app/CLEAR_TOKEN').clearToken()
      location.reload()
    }
    return {
      ...toRefs(state),
      goUserCenter,
      signOut,
    }
  },
  // data() {
  //   return {
  //     collapsed: false,
  //     // isLogin: '',
  //     includeRouter: [],
  //   }
  // },

  // methods: {
  //   ...mapMutations('app', {
  //     clearToken: 'CLEAR_TOKEN',
  //   }),
  //   userCenter() {
  //     this.$router.push('/userCenter')
  //   },
  //   signOut() {
  //     this.clearToken()
  //     location.reload()
  //   },
  // },
})
</script>
<style lang="scss">
#screen {
  min-height: 100%;
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  .header {
    background: rgb(255, 255, 255);
    height: 50px;
    padding: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-left {
      display: flex;
      align-items: center;
    }

    .trigger {
      font-size: 18px;
      line-height: 50px;
      padding: 0 24px;
      cursor: pointer;
      transition: color 0.3s;
    }
    .trigger:hover {
      color: #1890ff;
    }

    .header-msg {
      float: right;
      padding-right: 24px;
      // margin: 0 16px 0 0;
      // .user {
      //   font-size: 18px;
      // }
    }
  }

  .main {
    margin: 24px 16px;
    padding: 24px;
    background: #fff;
    min-height: 280px;
    height: calc(100% - 98px);
  }
}
</style>
