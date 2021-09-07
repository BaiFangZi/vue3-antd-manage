<template>
  <a-layout-header class="header">
    <slot name="headerLeft"></slot>
    <div class="header-right">
      <a href="https://github.com/BaiFangZi/vue3-antd-manage">
        <GithubOutlined class="header-right-item"
      /></a>

      <a-dropdown>
        <span style="width: 60px" class="header-right-item">{{
          $t('system.language')
        }}</span>
        <template #overlay>
          <a-menu @click="handleChangeLanguage">
            <a-menu-item :disabled="curLocale == 'zh_CN'" key="zh_CN">
              中文简体
            </a-menu-item>
            <a-menu-item :disabled="curLocale == 'en'" key="en">
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
              <router-link to="/setting">{{
                $t('system.setting')
              }}</router-link>
            </a-menu-item>
            <a-menu-item> {{ $t('system.loginOut') }}</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </a-layout-header>
</template>

<script setup>
import { ref, computed } from 'vue'
// import { UserOutlined, GithubOutlined } from '@ant-design/icons-vue'
import { useLocal } from '@/hooks/useLocale'
// import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
// const { locale } = useI18n()
const store = useStore()
const { changeLang, curLocale } = useLocal()

console.log()
const handleChangeLanguage = async ({ key }) => {
  await changeLang(key)
  store.commit('app/SET_LANG', key)
  location.reload()
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
