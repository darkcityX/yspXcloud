<template>
    <div id="app">
        <!-- 1、导入head组件 -->
        <v-header></v-header>

        <!-- 2、一级路由入口 -->
        <router-view/>

        <!-- 3、导入foot组件 -->

    </div>
</template>

<script>

    import Head from '@/components/common/Head';

    export default {
        name: 'App',
        components:{
            'v-header': Head
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #333;
        font-size: 14px;

    }
</style>
