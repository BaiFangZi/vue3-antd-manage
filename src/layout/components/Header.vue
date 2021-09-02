<template>
  <a-layout-header class="header">
    <slot name="headerLeft"></slot>
    <div class="header-right">
      <a href="https://github.com/BaiFangZi/vue3-antd-manage">
        <GithubOutlined class="header-right-item"
      /></a>

      <a-dropdown>
        <span style="width:60px" class="header-right-item">{{
          $t('message.common.language')
        }}</span>
        <template #overlay>
          <a-menu @click="handleChangeLanguage">
            <a-menu-item :disabled="curLang == 'zh_CN'" key="zh_CN">
              中文简体
            </a-menu-item>
            <a-menu-item :disabled="curLang == 'en'" key="en">
              English</a-menu-item
            >
          </a-menu>
        </template>
      </a-dropdown>
      <a-dropdown>
        <span class="header-right-item">管理</span>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <router-link to="/setting">系统设置</router-link>
            </a-menu-item>
            <a-menu-item> 退出登陆</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </a-layout-header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { UserOutlined, GithubOutlined } from '@ant-design/icons-vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
const { locale } = useI18n()
const store = useStore()
const curLang = computed(() => {
  console.log(1232)
  return store.state.app.lang
})

const handleChangeLanguage = ({ key }) => {
  // localStorage.setItem('language', key)
  locale.value = key
  store.commit('app/SET_LANG', key)
}
</script>

<style lang="scss">
.header {
  background: #fff;
  padding: 0;
  display: flex;
  justify-content: space-between;
  .header-right {
    margin: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-right-item {
      margin: 0 10px;
      cursor: pointer;
    }
    .anticon {
      font-size: 20px;
    }
  }
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

</style>
