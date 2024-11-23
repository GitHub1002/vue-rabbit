// 把components文件夹下的所有组件进行全局化注册
// 通过插件方式
import ImageView from './ImageView/index.vue'
import XtxSKU from './XtxSKU/index.vue'

export const componentPlugin = {
    install(app) {
        // 注册组件
        // app.component('组件名字', 配置对象)
        app.component('XtxImageView', ImageView)
        app.component('XtxSKU', XtxSKU)
    }
}