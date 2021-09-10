import app from '@/store/app'

function has(el, binding) {
  const { value } = binding
  if (Array.isArray(value)) {
    const { auth } = app.state
    if (!value.includes(auth)) {
      // 权限不匹配 移除节点
      el.parentNode && el.parentNode.removeChild(el)
    }
  } else {
    throw new Error("The argument to 'v-has' must be an array")
  }
}

export default {
  mounted: (el, binding) => has(el, binding),
  updated: (el, binding) => has(el, binding),
}
