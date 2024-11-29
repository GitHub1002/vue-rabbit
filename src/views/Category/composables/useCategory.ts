import { onMounted, ref } from 'vue';
import { getCategoryAPI } from '@/apis/category';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';

export function useCategory() {
    const route = useRoute()

    // 保存面包屑数据
    const categoryData = ref({})
    // 面包屑数据
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id);
        categoryData.value = res.result;
    }
    onMounted(() => getCategory())
    // 路由参数变化时，可以把分类数据接口重新发送
    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id)
    })

    return {categoryData}
}