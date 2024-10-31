<script setup lang="ts" name="HomeBanner">
    import { getBannerAPI } from '@/apis/home';
    import { ref, onMounted } from 'vue';

    const bannerList = ref([]);

    const getBanner = async () =>{
        const result = await getBannerAPI();
        console.log(result);
        bannerList.value = result.data.result;
    }

    onMounted(() => {
        getBanner()
    })
</script>

<template>
    <div class="home-banner">
        <el-carousel height="500px">
            <el-carousel-item v-for="item in bannerList" :key="item.id">
                <img :src="item.imgUrl" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<style scoped lang="scss"> 
    .home-banner {
        width: 1024px;
        height: 500px;
        position:absolute;
        left: 0;
        top: 0;
        z-index: 98;

        img{
            height: 500px;
            width: 100%;
        }
    }
</style>