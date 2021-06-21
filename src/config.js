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

/**
 * 菜单 Menus
 * icon  菜单的小图标
 * title 菜单的label
 * index 菜单的索引，唯一，按页面逐渐递增
 * url   菜单的路由路径
 */
export const Menus = [{
        title: '媒体',
        icon: 'video-camera-solid',
        index: '1',
        url: '',
        subMenus: [{
            title: '地图',
            index: '1-1',
            url: 'map-manage/map'
        }, {
            title: '图片裁切',
            index: '1-2',
            url: 'resource-manage/resource'
        }]
    }, {
        title: '富文本',
        icon: 'tickets',
        index: '2',
        url: '',
        subMenus: [{
            title: '富文本1.0',
            index: '2-1',
            url: 'editor-manage/editor-quill'
        }, {
            title: '富文本2.0',
            index: '2-2',
            url: 'editor-manage/editor'
        }]
    }, {
        title: '表单',
        icon: 'message',
        index: '3',
        url: '',
        subMenus: [{
            title: 'form表单',
            index: '3-1',
            url: 'form-manage/form'
        }]
    }
]
