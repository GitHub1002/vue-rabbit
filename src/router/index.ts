import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: 'category/:id',
          name: 'Category',
          component: Category
        },
        {
          path: 'category/sub/:id',
          name: 'SubCategory',
          component: SubCategory
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ],
  // 路由滚动行为定制
  scrollBehavior() {
    return {
        top: 0
    }
  }
})

export default router
