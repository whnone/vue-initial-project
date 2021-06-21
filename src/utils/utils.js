import { langs } from '../config'

// 获取当前语言版本
const getLang = () => {
  return langs.find(item => location.href.indexOf(item) > 0) || 'zh-CN'
}

/**
 *
 * 校验相关
 *
 */
// 正则手机号 兼容港澳台 兼容电信199 移动198 联通166
const isPhoneNumber = (value) => {
  return /^((\\+852)|(852))?([6|9])\d{7}$|^((\\+886)|(886))?[0][9]\d{8}$|^((\\+853)|(853))?[6]([8|6])\d{6}$|^((\\+86)|(86))?((13[0-9])|(14[5,7,9])|(15([0-3]|[5-9]))|(166)|(17[0,1,3,5,6,7,8])|(18[0-9])|(19[8|9]))\d{8}$/.test(value) && value.length === 11
}

/**
 * @param {string} 正则邮箱
 */
const isEmail = (value) => {
  return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(value)
}

// 正则去掉字符串两边空格
const spaceTrim = (value) => {
    return value.replace(/(^\s*)|(\s*$)/g, '')
}

export default {
  getLang,
  isPhoneNumber,
  isEmail,
  spaceTrim
}
