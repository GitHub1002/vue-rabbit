import axios from 'axios';
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus';

const httpInstance = axios.create({
    // 后端由黑马提供
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
});

// 添加请求拦截器
httpInstance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    // 统一错误提示
    ElMessage({
        type: 'error',
        message: e.response.data.message
    })
    return Promise.reject(e);
});

export default httpInstance;