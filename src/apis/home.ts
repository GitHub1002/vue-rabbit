import httpInstance from "@/utils/http";    

export function getBannerAPI (){
    return httpInstance({
        url: '/home/banner'
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