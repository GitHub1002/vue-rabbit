<script setup lang="ts" name="Index">
    import LayoutHeader from './components/LayoutHeader.vue';
    import LayoutFooter from './components/LayoutFooter.vue';
    import LayoutNav from './components/LayoutNav.vue';
    import LayoutFixed from './components/LayoutFixed.vue';
    
    // 通过pinia获取导航栏的值
    import { useCategoryStore } from '@/stores/categoryStore';
    import { onMounted } from 'vue';

    const categoryStore = useCategoryStore();

    onMounted(() => {
        categoryStore.getCategory();
    });
</script>

<template>
    <div>
        <LayoutFixed></LayoutFixed>
        <LayoutNav></LayoutNav>
        <LayoutHeader></LayoutHeader>
        <router-view></router-view>
        <LayoutFooter></LayoutFooter>
    </div>
</template>

<style scoped>

</style>