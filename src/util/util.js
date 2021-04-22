export const getWinWidth = () => {
  return document.documentElement.clientWidth
  || window.screen.width
  || window.outerWidth
  || document.documentElement.scrollWidth
}

export const getWinHeight = () => {
  return document.documentElement.clientHeight
    || window.screen.height
    || window.outerHeight
    || document.documentElement.scrollHeight
}