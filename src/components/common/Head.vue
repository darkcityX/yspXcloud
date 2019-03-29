<template>
    <div class="head">
        <Menu class="headContainer" @on-select="headMenu" mode="horizontal" theme="light" :active-name="activeMenu">
            <div class="layout-logo">
                <img src="@/assets/images/logo2.png" alt="">
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
                    { title : '教程',        name : '教程',         iconType: 'ios-analytics',  address: '/query=1'},
                    { title : '社区',        name : '社区',         iconType: 'ios-paper',      address: '/query=2'},
                    { title : '相关技术支持', name : '相关技术支持',  iconType: 'ios-navigate',   address: '/query=3'}
                ],

                activeMenu: "指南"
            }
        },
        watch:{
            $route(to,from){
                // console.log( to.path );
                if( to.path.indexOf("query") != -1 ){
                    let query = to.path.slice(to.path.indexOf("=")+1);
                    // console.log( query );
                    switch( query ) {
                        case '1':
                            window.location.href = 'http://dev.xcloud.yunshipei.com/index.html';
                            break;
                        case '2':
                            alert("社区");
                            break;
                        case '3':
                            alert("相关技术支持");
                            break;
                    }

                }
            }
        },
        created(){
            let headMenu = localStorage.getItem("headMenu",name);
            if( !headMenu ){
                console.log( "-------- 缓存中无数据 -----------" );
                return;
            }else{
                console.log( `-------- 缓存中数据 ---- ${ headMenu } -------`);
                this.activeMenu = headMenu;
            }
        },
        methods:{
            headMenu(name){
                console.log( name );
                // 存储当前激活菜单
                localStorage.setItem("headMenu",name);
                console.log( `缓存中的存储：`+localStorage.getItem("headMenu") );
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


