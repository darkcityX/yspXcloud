<template>
    <div id="app">
        <v-header></v-header>

        <router-view/>

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
        text-align: center;
        color: #333;
        font-size: 14px;

    }
</style>
