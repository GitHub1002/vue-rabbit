<script setup lang="ts">
    import { getHotGoodsAPI } from '@/apis/detail'
    import { ref, onMounted, computed } from 'vue';
    import { useRoute } from 'vue-router';
    
    const props = defineProps({
        hotType: {
            type: Number
        }
    })

    // 得到热销数据
    const hostList = ref([]);
    const route = useRoute();
    const getHotGoods = async () => {
        const result = await getHotGoodsAPI({id:route.params.id, type: props.hotType});
        hostList.value = result.result;
    }
    // 根据type值，设置标题为每周热销还是每日热销
    const TYPENUME = {
        1: '每日热销',
        2: '每周热销'
    }
    const title = computed(() => TYPENUME[props.hotType]);

    // 页面加载完成后，请求热销数据
    onMounted(() => getHotGoods())

</script>


<template>
    <div class="goods-hot">
        <h3>{{title}}</h3>
        <!-- 商品区块 -->
        <RouterLink to="/" class="goods-item" v-for="item in hostList" :key="item.id">
            <img :src="item.picture" alt="" />
            <p class="name ellipsis">{{ item.name }}</p>
            <p class="desc ellipsis">{{ item.desc }}</p>
            <p class="price">&yen;{{ item.price }}</p>
        </RouterLink>
    </div>
</template>


<style scoped lang="scss">
.goods-hot {
    h3 {
        height: 70px;
        background: $helpColor;
        color: #fff;
        font-size: 18px;
        line-height: 70px;
        padding-left: 25px;
        margin-bottom: 10px;
        font-weight: normal;
    }

    .goods-item {
        display: block;
        padding: 20px 30px;
        text-align: center;
        background: #fff;

        img {
            width: 160px;
            height: 160px;
        }

        p {
            padding-top: 10px;
        }

        .name {
            font-size: 16px;
        }

        .desc {
            color: #999;
            height: 29px;
        }

        .price {
            color: $priceColor;
            font-size: 20px;
        }
    }
}
</style>