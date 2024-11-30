import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

// 引入初始化样式文件
import '@/styles/common.scss'
// 引入图片延迟加载
import { lazyPlugin } from '@/directives/index'
// 引入全局组件
import { componentPlugin } from '@/components'
// pinia 持久化

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
// 使用图片延迟加载插件
app.use(lazyPlugin)
app.use(componentPlugin)

app.mount('#app')
