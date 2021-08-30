<template>
  <div class="router-tags">
    <div class="tags-view">
      <div class="tags-box" :style="{ left: -leftValue + 'px' }">
        <router-link
          style="line-height: 40px"
          class="tag-item"
          :class="$route.path === '/dashboard' ? 'tag-active' : ''"
          to="/dashboard"
        >
          首页
        </router-link>
        <button
          v-for="tag in keepLiveTags"
          :key="tag.title"
          class="tag-item"
          :class="isActiveTag(tag) ? 'tag-active' : ''"
          @click="handleGoRoute(tag)"
        >
          {{ tag.title }}
          <CloseOutlined
            @click.stop="handleCloseRoute(tag)"
            class="icon-tag-close"
          />
        </button>
      </div>
    </div>
    <div class="tag-control">
      <a-button
        :disabled="leftDisabled"
        @click="handleLeftOffset"
        style="border-right: 1px solid #ccc"
      >
        <LeftOutlined />
      </a-button>
      <a-button :disabled="rightDisabled" @click="handleRightOffset">
        <RightOutlined />
      </a-button>
    </div>
  </div>
</template>
<script>
// import { mapMutations, mapGetters } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { findIndex } from 'lodash'
import {
  defineComponent,
  reactive,
  onMounted,
  watch,
  nextTick,
  computed,
  toRefs,
} from 'vue'
import {
  CloseOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons-vue'
// import { stat } from 'node:fs'
// import store from '@/store'

export default defineComponent({
  name: 'routerTags',
  components: {
    CloseOutlined,
    LeftOutlined,
    RightOutlined,
  },
  setup() {
    const route = useRoute(),
      router = useRouter(),
      store = useStore()

    const state = reactive({
      tagsBox: null,
      offset: 200,
      leftValue: 0,
      viewWidth: 0, //可见宽度
      realWidth: 0, //实际宽度
      leftDisabled: true,
      rightDisabled: true,
      keepLiveTags: computed(() => store.state.routerTags.keepLiveTags),
    })
    // computed: {
    //   ...mapGetters('routerTags', {
    //     keepLiveTags: 'getKeepLiveTags',
    //   }),
    // },

    onMounted(() => {
      state.tagsBox = document.querySelector('.tags-box')
      const tagsView = document.querySelector('.tags-view')
      // setTimeout(() => {
      //   state.realWidth = state.tagsBox.clientWidth
      //   state.viewWidth = tagsView.clientWidth
      // }, 1)

      state.realWidth = state.tagsBox.clientWidth
      state.viewWidth = tagsView.clientWidth

      window.addEventListener('resize', () => {
        state.viewWidth = tagsView.clientWidth //可见宽度/
      })
      // console.log(state.realWidth)
    })
    // methods: {
    // ...mapMutations('routerTags', {
    //   setRouteTags: 'SET_ROUTER_TAGS',
    //   deleteRouteTags: 'DELETE_ROUTE_TAGS',
    // }),

    const isActiveTag = (tag) => {
      return tag.path === route.path
    }
    const handleGoRoute = (tag) => {
      const { fullPath, path } = tag
      if (fullPath === route.fullPath) return false
      router.push({ path })
    }
    const handleCloseRoute = (tag) => {
      // console.log(keepLiveTags.value.value)
      const originTags = [...state.keepLiveTags]
      // deleteRouteTags(tag)

      store.commit('routerTags/DELETE_ROUTE_TAGS', tag)

      if (!isActiveTag(tag)) return false //是activetTag跳转到前一个路由
      const prevTagsIndex = findIndex(originTags, tag)

      if (prevTagsIndex - 1 < 0) {
        //关闭第一个

        if (state.keepLiveTags.length) {
          //还存在缓存路由
          const route = state.keepLiveTags[0]
          router.replace({ path: route.path })
        } else {
          //不存在
          router.replace({ path: '/dashboard' })
        }
      } else {
        const route = originTags[prevTagsIndex - 1]
        router.replace({ path: route.path })
      }
      // console.log(state.leftDisabled, state.rightDisabled)
    }
    const handleLeftOffset = () => {
      state.rightDisabled = false
      const viewWidth = state.tagsBox.parentNode.offsetWidth //可见宽度
      const realWidth = state.tagsBox.scrollWidth //实际宽度
      const isMove =
        state.leftValue + state.offset + viewWidth < realWidth ? true : false
      if (isMove) {
        state.leftValue += state.offset
      } else {
        const finalOffset = realWidth - state.leftValue - viewWidth
        state.leftValue += finalOffset + 16
        state.leftDisabled = true
        // this.rightDisabled = false
      }
    }
    const handleRightOffset = () => {
      state.leftDisabled = false
      if (state.leftValue >= state.offset) {
        state.leftValue -= state.offset
      } else {
        state.leftValue = 0
        state.rightDisabled = true
        // this.leftDisabled = false
      }
    }
    // },
    watch(
      () => state.viewWidth,
      (newVal, oldVal) => {
        if (oldVal) {
          if (newVal > oldVal) {
            //放大页面
            if (state.viewWidth < state.realWidth) {
              // const realWidth = this.tagsBox.scrollWidth
              // const overValue = this.leftValue + newVal - realWidth - 16
              // const realWidth = this.tagsBox.scrollWidth
              const overValue = state.leftValue + newVal - state.realWidth - 16
              if (overValue > 0) {
                state.leftValue -= overValue
              }
            } else {
              state.leftValue = 0
            }
          } else {
            //缩小页面
            // console.log(this.leftValue +state.viewWidth)
            state.leftDisabled =
              state.leftValue + state.viewWidth > state.realWidth
          }
        }
      }
    )
    watch(state.keepLiveTags, () => {
      nextTick(() => {
        state.realWidth = state.tagsBox.clientWidth

        state.leftDisabled = state.realWidth <= state.viewWidth
        if (state.realWidth > state.viewWidth) {
          const overValue = state.realWidth - state.viewWidth + 16
          state.leftValue = overValue
        } else {
          state.leftValue = 0
        }
      })
    })
    return {
      ...toRefs(state),
      // keepLiveTags,
      handleRightOffset,
      handleLeftOffset,
      handleGoRoute,
      handleCloseRoute,
      isActiveTag,
    }
  },
})
</script>
<style lang="scss">
.router-tags {
  // display: flex;
  // align-items: center;
  position: relative;
  padding-left: 16px;
  height: 40px;
  background: #fff;
  border-top: 1px solid #eee;
  // vertical-align: middle;
  .tag-control {
    // display: flex;
    position: absolute;
    top: 7px;
    right: 0;
    width: 60px;
    .ant-btn {
      width: 50%;
      height: 27px;
      outline: none;
      border: none;
      box-shadow: none;
      font-size: 12px;
      border-radius: 0;
      padding: 0;
    }
  }
  .tags-view {
    width: calc(100% - 60px);
    height: 100%;
    overflow: hidden;
    position: absolute;
  }
  .tags-box {
    display: inline-block;
    height: 100%;
    white-space: nowrap;
    position: absolute;
    transition: left 0.2s;
    .tag-item {
      // padding: 2px 3px;
      background: #f0f0f0;
      // flex-shrink: 0;
      margin: 7px 2px;
      color: #000;
      padding: 3px 12px;
      border: 1px solid #dadada;
      border-radius: 2px;
      outline: none;
      font-size: 12px;
    }
    .tag-active {
      background: #fff !important;
    }
    // .icon-tag-close {
    //   border-radius: 50%;
    // }
    .icon-tag-close {
      visibility: hidden;
      // font-size: 12px;
    }
    .tag-active .icon-tag-close {
      visibility: visible;
      background: #f0f0f0;
    }
    :not(.tag-active):hover .icon-tag-close {
      visibility: visible;
      background: #fff;
    }
  }
}
</style>
