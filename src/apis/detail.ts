import request from '@/utils/http'

export function getDetailAPI (id){
    return request({
        url:'/goods',
        params:{
            id
        }
    })
}

/**
 * 详情页右边热榜
 * @param {Number} id 商品id
 * @param {Number} type 类型 1:24小时热销 2: 每周热销
 * @param 
 * @returns 
 */
export const getHotGoodsAPI = ({ id, type, limit = 3 }) => {
    return request({
        url: '/goods/hot',
        params: {
            id,
            type,
            limit
        }
    })
}