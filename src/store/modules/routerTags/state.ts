// import routerTags from "."

export type RouteTag = {
  title: string
  fullPath: string
  path: string
}
export type RouterTagsStateType = {
  keepLiveTags: RouteTag[]
}

export const state: RouterTagsStateType = {
  keepLiveTags: [],
}
