<template>
  <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
    <div class="logo"></div>
    <a-menu
      theme="dark"
      mode="inline"
      v-model:selectedKeys="selectedKeys"
      @click="handleGoRouter"
    >
      <template v-for="item in menuList" :key="item.path">
        <template v-if="!item.children">
          <a-menu-item :key="item.path"> {{ item.meta.title }}</a-menu-item>
        </template>
        <template v-else>
          <SubMenu :menu-list="item"></SubMenu>
        </template>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
const SubMenu = {
  name: 'sub-menu',
  props: {
    menuList: {
      type: Object,
      default: () => ({}),
    },
  },
  template: `
  <a-sub-menu :key="menuList.path">
     <template #title>{{ menuList.meta.title }}</template>
     <template v-for="item in menuList.children" :key="item.path">
        <template v-if="!item.children">
          <a-menu-item :key="item.path">
            <template #icon>
              
            </template>
            {{ item.meta.title }}
          </a-menu-item>
        </template>
        <template v-else>
          <sub-menu :menu-list="item" :key="item.path" />
        </template>
      </template>
  </a-sub-menu>`,
}
</script>

<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
defineProps({
  collapsed: Boolean,
})
const store = useStore()
const router = useRouter()
const menuList = store.state.auth.menuList
const handleGoRouter = ({key}) => {
  console.log(key)
  router.push(key)
}
</script>

<style lang="scss">
.logo {
  // display: inline-block;
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
  color: #fff;
  text-align: center;
  // vertical-align: middle;
  line-height: 32px;
  font-size: 18px;
}
</style>
