import { getBannerAPI } from '@/apis/home';
import { onMounted, ref } from 'vue';

export function useBanner() {
    // / 保存轮播图数据
    const bannerList = ref([])
    // 轮播图数据
    const getBanner = async () =>{
        const res = await getBannerAPI({
            distributionSite : '2'
        });
        bannerList.value = res.data.result;
    }
    onMounted(() => getBanner())

    return {
        bannerList
    }
}