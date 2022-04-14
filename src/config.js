// 语言
export const langs = ['zh-CN', 'en-US']

// 域名
export const basalUrl = location.origin
export const baseUrl = `${basalUrl}/manage/`

/**
 * 版本号
 * 版本号以-分开, 前两位为后端版本，后两位为前端版本
 * 前两位保证和后端版本一致,每次发版本同步一次
 */
export const version = '0.0-0.1'
