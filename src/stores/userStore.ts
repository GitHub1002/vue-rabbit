import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user';

export const userStore = defineStore('user', () => {
    // 定义数组
    const userInfo= ref({})
    // 获取数据
    const getUserInfo = async ({account, password}) => {
        const res = await loginAPI({account, password})
        userInfo.value = res.result
    }
    // 返回数据
    return {
        userInfo,
        getUserInfo
    }
},{
    persist: true
})