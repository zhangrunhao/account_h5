import operateConfig from "../config/trade-operate.json"

export const getOperateSignByCode = function (code) {
  let sign = ""
  Object.keys(operateConfig).forEach(key => {
    const value = operateConfig[key];
    if (code == value.code) sign = value.sign
  })
  return sign
}

export const getOperateDescByCode = function (code) {
  let desc = ""
  Object.keys(operateConfig).forEach(key => {
    const value = operateConfig[key];
    if (code == value.code) desc = value.desc
  })
  return desc
}

export const getOperateColorByCode = function (code) {
  let color = ""
  Object.keys(operateConfig).forEach(key => {
    const value = operateConfig[key];
    if (code == value.code) color = value.color
  })
  return color
}

export const getOperateConstByCode = function (code) {
  let res = ""
  Object.keys(operateConfig).forEach(key => {
    const value = operateConfig[key];
    if (code == value.code) res = value.const
  })
  return res
}