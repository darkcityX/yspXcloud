<template>
    <div class="head">
        <Menu class="headContainer" mode="horizontal" theme="dark" active-name="指南">
            <div class="layout-logo">
                <img src="@/assets/images/logo.png" alt="">
            </div>
            <div class="layout-nav">
                <MenuItem v-for="(item,index) in navList" :key="index" :name="item.name" :to="item.address">
                    <Icon :type="item.iconType"></Icon>
                    {{ item.title }}
                </MenuItem>
            </div>
        </Menu>
    </div>
</template>
<script>
    export default {
        name: 'Head',
        data(){
            return {
                navList :[
                    { title : '指南',        name : '指南',         iconType: 'ios-navigate',   address: '/GuideIndex'},
                    { title : 'IDE平台',     name : 'IDE平台',      iconType: 'ios-keypad',     address: '/IdePlatform'},
                    { title : '教程',        name : '教程',         iconType: 'ios-analytics',  address: '#'},
                    { title : '社区',        name : '社区',         iconType: 'ios-paper',      address: '#'},
                    { title : '相关技术支持', name : '相关技术支持',  iconType: 'ios-navigate',   address: '#'}
                ]
            }
        }    
    }
</script>

<style lang="less">
    .head{
        .ivu-menu{
            padding: 0 20px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            // background: red;
            .layout-logo{
                height: 60px;
                border-radius: 3px;
                img{
                    padding: 10px;
                    height: 60px;
                }
            }
            .layout-nav{
                // width: 560px;
                margin: 0 auto;
                margin-right: 20px;
                overflow: hidden;
            }    
        }   
    }

</style>


