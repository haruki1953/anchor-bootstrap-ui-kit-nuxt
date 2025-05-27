export const utilGetScrollbarWidth = () => {
  // 创建一个带有滚动条的隐藏元素
  const outer = document.createElement('div')
  outer.style.visibility = 'hidden'
  outer.style.overflow = 'scroll' // 强制显示滚动条
  document.body.appendChild(outer)

  // 创建一个内部元素
  const inner = document.createElement('div')
  outer.appendChild(inner)

  // 计算滚动条的宽度
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth

  // 移除临时元素
  outer.parentNode?.removeChild(outer)

  return scrollbarWidth
}

// 生成随机密钥
export const generateRandomKey = (length: number = 16) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join('')
}

// 获取隐藏元素的高度
export const getHiddenElementHeight = (el: HTMLElement) => {
  const originalStyle = {
    display: el.style.display,
    visibility: el.style.visibility,
    position: el.style.position
  }

  // 临时修改样式
  el.style.display = 'block'
  el.style.visibility = 'hidden'
  el.style.position = 'absolute'

  const height = el.offsetHeight

  // 还原样式
  el.style.display = originalStyle.display
  el.style.visibility = originalStyle.visibility
  el.style.position = originalStyle.position

  return height
}
