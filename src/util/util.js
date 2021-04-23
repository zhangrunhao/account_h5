/**
 * 获取屏幕宽度
 * @returns 屏幕宽度
 */
export const getWinWidth = () => {
  return document.documentElement.clientWidth
  || window.screen.width
  || window.outerWidth
  || document.documentElement.scrollWidth
}

/**
 * 获取屏幕高度
 * @returns 屏幕高度
 */
export const getWinHeight = () => {
  return document.documentElement.clientHeight
    || window.screen.height
    || window.outerHeight
    || document.documentElement.scrollHeight
}

/**
 * 获取某个元素属性值
 * @param {Element} dom dom元素
 * @param {String} css css名称
 * @returns 属性值
 */
export const getStyleValue = (dom, css) => {
  return window.getComputedStyle(dom, null).getPropertyValue(css)
}