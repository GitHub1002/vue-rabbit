<script setup lang="ts" name="Index">
    import LayoutHeader from './components/LayoutHeader.vue';
    import LayoutFooter from './components/LayoutFooter.vue';
    import LayoutNav from './components/LayoutNav.vue';
</script>

<template>
    <div>
        <LayoutNav></LayoutNav>
        <LayoutHeader></LayoutHeader>
        我是Layout组件
        <router-view></router-view>
        <LayoutFooter></LayoutFooter>
    </div>
</template>

<style scoped>

</style>