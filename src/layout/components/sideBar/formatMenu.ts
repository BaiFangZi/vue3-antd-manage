// import { cosh } from 'core-js/fn/number'
import { isEmpty, isArray } from 'lodash-es'
import { RouteRecordRaw } from 'vue-router'
export type menuType = {
  icon: string
  title: string
  key: string
  noHidden: boolean
  children?: menuType[]
}

export function formatMenu(data: RouteRecordRaw[]) {
  const result: menuType[] = []
  data.forEach((item) => {
    const { meta, name, children } = item
    const obj = {
      icon: meta?.icon,
      title: meta?.title,
      key: name,
      noHidden: meta?.noHidden || false,
    } as menuType
    if (children && children.length) {
      obj.children = formatMenu(children)
    }
    result.push(obj)
  })
  return result
}
