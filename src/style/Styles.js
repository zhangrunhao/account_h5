
const base = 1
const unit = 'px'
const cal = function (num) {
  return `${num * base}${unit}`
}
/** 色彩 start */
// 文字颜色
export const colorTextBase = '#000' // 基本色
export const colorTextBaseInverse = '#fff' // 基本色-反色
// 背景颜色
export const fillBase = '#fff' // 组件默认背景
export const fillBody = '#f5f5f9' // 页面背景
export const fillTap = '#ddd' // 组件默认背景 - 按下
export const fillDisabled = '#ddd' // 通用失效背景
// 全局/品牌颜色
export const brandPrimary = '#108ee9' // primary
export const brandPrimaryTap = '#0e80d2' // primary
export const brandSuccess = '#6abf47' // success
export const brandWarning = '#ffc600' // waring
export const brandError = '#f4333c' // error
export const brandImportant = '#ff5b05' // important
export const brandWait = '#108ee9' // wait
// 边框色
export const borderColorBase = '#ddd'
/** 色彩 end */

/** 字体尺寸 start */
export const fontSizeIconText = cal(10)
export const fontSizeCaptionSM = cal(12)
export const fontSizeBase = cal(14)
export const fontSizeSubhead = cal(15)
export const fontSizeCaption = cal(16)
export const fontSizeHeading = cal(17)
/** 字体尺寸 end */

/** 圆角 start */
export const radiusXS = cal(2)
export const radiusSM = cal(3)
export const radiusMD = cal(5)
export const radiusLG = cal(7)
export const radiusCircle = '50%'
/** 圆角 end */

/** 间距 start */
// 水平间距
export const hSpacingSM = cal(5)
export const hSpacingMD = cal(8)
export const hSpacingLG = cal(15)
// 垂直间距
export const vSpacingXS = cal(3)
export const vSpacingSM = cal(6)
export const vSpacingMD = cal(9)
export const vSpacingLG = cal(15)
export const vSpacingXL = cal(21)
/** 间距 end */

// button
export const buttonHeight = cal(47) // large
export const buttonFontSize = cal(18) // large
export const buttonHeightSM = cal(30) // small
export const buttonFontSizeSM = cal(13) // small
export const primaryButtonFill = brandPrimary // primary
export const primaryButtonFillTap = brandPrimaryTap // primary
export const warningButtonFill = '#e94f4f' // warning
export const warningButtonFillTap = '#d24747' // warning
