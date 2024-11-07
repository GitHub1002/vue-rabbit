import httpInstance from "@/utils/http";    

export function getBannerAPI (params={}){
    // 若没传参数，则默认取1
    const {distributionSite = '1'} = params;
    return httpInstance({
        url: '/home/banner',
        params:{
            distributionSite
        }
    })
}

/**
 * 获取新鲜好物数据
 */
export function findNewAPI (){
    return httpInstance({
        url: '/home/new'
    })
}

/**
 * 获取人气推荐数据
 */
export function getHotAPI (){
    return httpInstance({
        url: '/home/hot'
    })
}

/**
 * 获取所有商品数据
 */
export function getGoodsAPI (){
    return httpInstance({
        url: '/home/goods'
    })
}