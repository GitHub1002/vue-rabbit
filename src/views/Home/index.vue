<script setup lang="ts">
    import HomeCategory from './components/HomeCategory.vue'
    import HomeBanner from './components/HomeBanner.vue'
    import HomeNew from './components/HomeNew.vue'
    import HomeHot from './components/HomeHot.vue'
    import HomeProduct from './components/HomeProduct.vue'
    import HomePanel from './components/HomePanel.vue'
</script>

<template>
    <div class="container">
        <HomeCategory />
        <HomeBanner />
    </div>
    <HomeNew />
    <HomeHot />
    <HomeProduct />
    <!-- <HomePanel /> -->
    <!-- <HomePanel title="热门推荐" sub-title="精选好物">
        <div>haowu</div>
    </HomePanel>
    <HomePanel title="热门推荐" sub-title="精选好物">
        <div>haowu</div>
    </HomePanel> -->
</template>