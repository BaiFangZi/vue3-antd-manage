<template>
  <a-breadcrumb :routes="filterRoute">
    <template #itemRender="{ route, routes }">
      <span v-if="notLink(routes, route)">
        {{ route.meta.title }}
      </span>
      <router-link v-else :to="route.path">
        {{ route.meta.title }}
      </router-link>
    </template>
  </a-breadcrumb>
</template>
<script>
// import formatMenu from '../formatMenu'

// import router from '@/router'
import { defineComponent, reactive, toRefs, watch } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: 'breadCrumb',
  setup() {
    const route = useRoute()
    const state = reactive({
      filterRoute: [],
    })
    const notLink = (routes, route) => {
      return (
        routes.indexOf(route) === routes.length - 1 ||
        route.meta.noBreadcrumbLink
      )
    }
    watch(
      () => route.matched,
      () => {
        console.log(route.matched)
        const matchedRoute = route.matched.map((r) => {
          const { meta, path } = r
          return { meta, path }
        })

        const filterRoute = matchedRoute.slice(1)
        if (route.path !== '/dashboard') {
          //如果不是首页
          filterRoute.unshift({
            path: '/dashboard',
            meta: {
              title: 'dashboard',
            },
          })
        }
        state.filterRoute = filterRoute
      },
      { immediate: true }
    )

    return {
      ...toRefs(state),
      notLink,
    }
  },
  // data() {
  //   return {
  //     // basePath: '/components/breadcrumb',
  //     filterRoute: [],
  //   }
  // },
  // methods: {
  //   notLink(routes, route) {
  //     return (
  //       routes.indexOf(route) === routes.length - 1 ||
  //       route.meta.noBreadcrumbLink
  //     )
  //   },
  // },
  // watch: {
  //   $route: {
  //     immediate: true,
  //     handler(route) {
  //       const matchedRoute = this.$route.matched.map((r) => {
  //         const { meta, path } = r
  //         return { meta, path }
  //       })
  //       // console.log(matchedRoute)

  //       const filterRoute = matchedRoute.slice(1)
  //       if (this.$route.path !== '/dashboard') {
  //         //如果不是首页
  //         filterRoute.unshift({
  //           path: '/dashboard',
  //           meta: {
  //             title: 'dashboard',
  //           },
  //         })
  //       }
  //       this.filterRoute = filterRoute
  //     },
  //   },
  // },
})
</script>
<style lang="scss">
.breadcrumb {
  z-index: 2;
}
</style>
