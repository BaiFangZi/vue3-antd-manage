<template>
  <a-menu
    mode="inline"
    theme="dark"
    v-model:selectedKeys="selectKey"
    @select="handleSelect"
  >
    <template v-for="item in menus" :key="item.key">
      <template v-if="!item.children && !item.noHidden">
        <a-menu-item :key="item.key">
          <UserOutlined />
          <!-- <component :is="item.icon"></component> -->
          <span>{{ item.key }}</span>
        </a-menu-item>
      </template>
      <template v-if="item.children && !item.noHidden">
        <sub-menu :menu-info="item" :key="item.key" />
      </template>
    </template>
  </a-menu>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue'
import { formatMenu, menuType } from './formatMenu'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue'
const SubMenu = {
  name: 'SubMenu',
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  template: `
    <a-sub-menu :key="menuInfo.key" v-bind="$attrs">
      <template #title>
        <span>

         <span>{{ menuInfo.key }}</span>
        </span>
      </template>
      <template v-for="item in menuInfo.children" :key="item.key">
        <template v-if="!item.children">
          <a-menu-item :key="item.key">
            <span>{{ item.key }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <sub-menu :menu-info="item" :key="item.key" />
        </template>
      </template>
    </a-sub-menu>
  `,
  components: {},
}
import { RouteRecordName } from 'vue-router'
export default defineComponent({
  // name: 'menu',
  setup() {
    // debugger
    const store = useStore(),
      router = useRouter(),
      route = useRoute()
    const state = reactive({
      menus: [] as menuType[],
      selectKey: [route.name],
    })
    const handleSelect = (select: { key: string }) => {
      router.push({
        name: select.key,
      })
    }

    state.menus = formatMenu(store.state.console.menuList)

    watch(
      () => route.name,
      () => {
        state.selectKey = [route.name]
      }
    )

    return {
      ...toRefs(state),
      handleSelect,
    }
  },
  components: {
    SubMenu,
    UserOutlined,
  },
})
</script>
