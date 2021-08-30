import { isArray } from 'lodash-es'
import app from '@/store/modules/app'
import { DirectiveBinding } from 'vue'
// import { ObjectDirective } from 'vue'

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const permissionArr = binding.value
    // console.log(permissionArr)
    //判断传入参数是否是一个数组
    if (isArray(permissionArr)) {
      const token = app.getters.getToken()
      if (!permissionArr.includes(token)) {
        //没有权限移除元素
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error("The argument to 'v-has' must be an array")
    }
  },
}
