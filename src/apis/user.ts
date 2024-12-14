import request from '@/utils/http'

export const loginAPI = ({account, password}) => {
    return request ({
        url: '/login',
        method: 'post',
        data: {
            account,
            password
        }
    })
}

// 获取喜欢列表API
export const getLikeListAPI = ({ limit = 4 }) => {
    return request({
        url: '/goods/relevant',
        params: {
            limit
        }
    })
}