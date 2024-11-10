<script lang="ts" setup name="SubCategory">
    import { onMounted, ref } from 'vue';
    import { getCategoryFilterAPI, getSubCategoryAPI } from '@/apis/category';
    import GoodItem from '@/views/Home/components/GoodsItem.vue';
    import { useRoute } from 'vue-router';
import { request } from 'node_modules/axios/index.cjs';

    // 面包屑导航数据
    const categoryData = ref([]);
    const route = useRoute();
    const getCategoryData = async (id = route.params.id) => {
        const res = await getCategoryFilterAPI(id);
        categoryData.value = res.data.result;
    }
    onMounted(() => {
        getCategoryData();
    });

    // 获取基础列表数据渲染
    const goodList = ref([])
    const requestData = ref({
        page: 1,
        pageSize: 20,
        categoryId: route.params.id,
        sortField: 'publishTime'
    })
    const getSubCategory = async () => {
        const res = await getSubCategoryAPI(requestData.value)
        goodList.value = res.data.result.items
    }
    onMounted(() => getSubCategory())

    // tab切换回调
    const tabChange = () => {
        // 重置page为1，切换tab时候重新从第一页请求数据
        requestData.value.page =  1
        getSubCategory()
    }

</script>

<template>
    <div class="container ">
        <!-- 面包屑 -->
        <div class="bread-container">
            <el-breadcrumb separator=">">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: `/category/${categoryData.parentId}`}"> {{ categoryData.parentName }} </el-breadcrumb-item>
                <el-breadcrumb-item > {{categoryData.name}} </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="sub-container">
            <!-- v-model绑定sortField字段，当tab切换时，sortField字段会自动成对应的name值，即publishTime | orderNum | evaluateNum  -->
            <el-tabs v-model="requestData.sortField" @tab-change="tabChange">
                <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
                <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
                <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
            </el-tabs>
            <div class="body">
                <!-- 商品列表-->
                <!-- <GoodItem v-for="item in goodList" :key="item.id" :goods="item" /> -->
                <GoodItem :goods="goodList" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bread-container {
    padding: 25px 0;
    color: #666;
}

.sub-container {
    padding: 20px 10px;
    background-color: #fff;

    .body {
        display: flex;
        flex-wrap: wrap;
        padding: 0 10px;
    }

    .goods-item {
        display: block;
        width: 220px;
        margin-right: 20px;
        padding: 20px 30px;
        text-align: center;

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

    .pagination-container {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }


}
</style>