import { langs } from '../config'

/** 获取当前语言版本 */
const getLang = () => {
  return langs.find(item => location.href.indexOf(item) > 0) || 'zh-CN'
}

/** 正则去掉字符串两边空格 */
const spaceTrim = (value) => {
  return value.replace(/(^\s*)|(\s*$)/g, '')
}

/**
 * 节流
 * @param {*} func
 * @param {*} wait
 * @param {*} immediate
 */
 const throttle = (func, wait, immediate) => {
  /** 调用throttle声明一下变量 * */
  let timeout;
  let args;
  let context;
  let timestamp;
  let resullt;
  /** 初次由return函数调用, 后面自己递归调用 * */
  const later = function () {
    const now = new Date().getTime();
    // 记录在wait时间内上一次执行return函数的时间间隔
    const last = now - timestamp;
    // 时间间隔小于wait,继续递归调用
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      // 用于immediate==false在结束边界调用
      if (!immediate) {
        resullt = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };
  return function () {
    context = this;
    args = arguments;
    timestamp = new Date().getTime();
    const exec = immediate && !timeout;
    // 初次timeout不存在,设置延时调用later
    if (!timeout) timeout = setTimeout(later, wait);
    // 用于immediate==true在开始边界调用
    if (exec) {
      resullt = func.apply(context, args);
      context = args = null;
    }
    return resullt;
  };
};

/**
 * 防抖
 * @param   {function}  func        传入函数
 * @param   {number}    wait        表示时间窗口的间隔
 * @param   {object}    options     如果想忽略开始边界上的调用，传入{leading: false}。
 *                                  如果想忽略结尾边界上的调用，传入{trailing: false}
 * @returns {function}              返回客户调用函数   返回客户调用函数
 */
const debounce = (func, wait, options) => {
  let timeout; let context; let args; let result
  let previous = 0;
  options = options || {}
  // 延时执行函数
  let later = function () {
    let now = new Date().getTime()
    // 首次执行时，如果设定了开始边界不执行选项，将上次执行时间设定为当前时间。
    previous = options.leading === false ? 0 : now
    timeout = null
    result = func.apply(context, args)
    if (!timeout) context = args = null
  }
  return function () {
    context = this
    args = arguments
    let now = new Date().getTime()
    if (!previous && options.leading === false) previous = now
    let remaining = wait - (now - previous)
    // 延迟时间间隔remaining小于等于0，表示上次执行至此所间隔时间已经超过一个时间窗口
    // remaining大于时间窗口wait，表示客户端系统时间被调整过
    if (remaining <= 0 || remaining > wait) {
      clearTimeout(timeout)
      timeout = null
      previous = now
      result = func.apply(context, args)
      if (!timeout) context = args = null
      // 如果延迟执行不存在，且没有设定结尾边界不执行选项
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
    return result
  }
}

/**
 * 正则手机号 兼容港澳台 兼容电信199 移动198 联通166
 */
const isPhoneNumber = (value) => {
  return /^((\\+852)|(852))?([6|9])\d{7}$|^((\\+886)|(886))?[0][9]\d{8}$|^((\\+853)|(853))?[6]([8|6])\d{6}$|^((\\+86)|(86))?((13[0-9])|(14[5,7,9])|(15([0-3]|[5-9]))|(166)|(17[0,1,3,5,6,7,8])|(18[0-9])|(19[8|9]))\d{8}$/.test(value) && value.length === 11
}

/**
 * @param {string} 正则邮箱
 */
const isEmail = (value) => {
  return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(value)
}

/** 判断是否含有特殊符号 */
const isSymbol = (value) => {
  return !/[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/im.test(value)
}

/** 判断是否含有emoji表情 */
const isEmoji = (value) => {
  return !/[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/ig.test(value)
}

export default {
  getLang,
  isPhoneNumber,
  isEmail,
  spaceTrim,
  isSymbol,
  isEmoji
}
