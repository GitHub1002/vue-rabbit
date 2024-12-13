import { ref, onUnmounted } from 'vue'
import { computed } from 'vue'
import dayjs from 'dayjs'

export const useCountDown = () => {
    // 响应式数据
    let timer = null
    const time = ref(0)

    // 格式化为时分秒
    const formatTime = computed(() => dayjs.unix(time.value).format('HH:mm:ss'))

    // 开启倒计时函数
    const start = (currentTime) => {
        time.value = currentTime
        timer = setInterval(() => {/*  */
            time.value -= 1
        }, 1000)
    }

    // 组件销毁时清除清时期
    onUnmounted(() => {
        timer && clearInterval(time)
    })
    return {
        formatTime, 
        start
    }
}