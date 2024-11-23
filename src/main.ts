import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入初始化样式文件
import '@/styles/common.scss'
// 引入图片延迟加载
import { lazyPlugin } from '@/directives/index'
// 引入全局组件
import { componentPlugin } from '@/components'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// 使用图片延迟加载插件
app.use(lazyPlugin)
app.use(componentPlugin)

app.mount('#app')
