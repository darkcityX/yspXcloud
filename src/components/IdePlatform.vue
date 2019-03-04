<template>
    <div class="IdePlatform">
        <Row>
            <Col span="4">
                <div class="leftNavList">
                    <div class="ad">
                        <Input search enter-button placeholder="请输入要搜索的关键字"/>
                        <!-- <img src="./../assets/images/math.gif" alt="">        -->
                    </div>  
                    <div class="navlist">
                        <Menu :active-name="menuActive" theme="light" width="auto" :open-names="[openSubMenu]">
                            <Submenu v-for="(subMenu,index) in leftNav" :key="index" :name="subMenu.name">
                                <template slot="title">
                                    {{ subMenu.name }}
                                </template>
                                <MenuItem v-for="(menu,index) in subMenu.secondary" :key="index" :name="menu.name">{{ menu.name }}</MenuItem>
                            </Submenu>

                        </Menu>
                    </div>   
                </div>
            </Col>
            <Col span="20" style="padding: 0 10px;">
                <div class="rightContent">
                    <router-view></router-view>        
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: 'IdePlatform',
        data () {
            return {
                // 左侧导航菜单栏
                
                leftNav: [// 侧边栏一级导航
                    {
                        solt : 0, 
                        name : 'IDE平台问题解析',
                        secondary : [ // 侧边栏二级导航
                            {
                                solt : 0-0, 
                                name : '相关规范整理',
                                href: '#'
                            },
                            {
                                solt : 0-1,
                                name : 'IDE平台相关介绍',
                                href: '#'
                            }
                        ]
                    },
                    {
                        solt : 1,
                        name : '二次封装常用组件',
                        secondary : [
                            {
                                solt : 1-0,
                                name : '定制化样式封装',
                                href : '#'
                            },
                            {
                                solt : 1-1,
                                name : '特殊需求的组件定制化封装',
                                href : '#'
                            }
                        ]
                    },
                    {
                        solt : 2,
                        name : '适配技术难点解析',
                        secondary : [
                           {
                                solt : 2-0,
                                name : '动态数据采集问题处理',
                                href : '#'
                            }, 
                            {
                                solt : 2-1,
                                name : 'DOM重组与全局js文件异常问题解析',
                                href : '#'
                            }, 
                            {
                                solt : 2-2,
                                name : 'flash插件处理方法',
                                href : '#'
                            }, 
                            {
                                solt : 2-3,
                                name : 'iframe相关问题解析',
                                href : '#'
                            }, 
                        ]
                    },
                    {
                        solt : 3,
                        name : '发版未出现适配效果问题解析',
                        secondary : [
                            {
                                solt : 3-0,
                                name : '222222',
                                href : '#',
                            }
                        ]
                    },
                    {
                        solt : 4,
                        name : '平台所涉及到的前端知识整理',
                        secondary : [
                            {
                                solt : 4-0,
                                name : 'rem基准值',
                                href : '#',
                            }
                        ]
                    },
                    {
                        solt : 5,
                        name : '客户答疑',
                        secondary : [
                            {
                                solt : 5-0,
                                name : '111111',
                                href : '#',   
                            }
                        ]
                    }
                ],
                // open一级菜单
                openSubMenu : 'IDE平台问题解析',
                // 当前菜单栏动态标签
                menuActive: '相关规范整理',


            }
        },
        methods: {
            routerParams(name){ // 根据激活路由进行当前刷新菜单栏的存储
                // console.log( "------ 调用初始路由判断函数 ------" );
                // console.log( name );  
                // localStorage.setItem( "activeMenu" , name );           
            },
            getActiveMenu(){ // 当页面刷新，根据本地存储激活的菜单栏进行状态存储
                // let activeMenu = !localStorage.getItem("activeMenu") ? '' : localStorage.getItem("activeMenu");
                // console.log( activeMenu );
                // switch( activeMenu ){
                //     case '':
                //         this.activeMenu = '介绍'; 
                //         this.$router.push({path:'/guideIndex/introduction'});
                //         break;  
                //     case '介绍':
                //         this.activeMenu = activeMenu;
                //         break; 
                //     case '示例':
                //         this.activeMenu = activeMenu;
                //         break; 
                //     case '版本':
                //         this.activeMenu = activeMenu;
                //         break;
                // }
            }    
        }
    }
</script>

<style lang="less">
    .IdePlatform{
        background: #f5f5f5;
        .leftNavList{
            margin-left: 10px;
            min-width: 160px;
            background: #fff;
            .ad{
                padding: 20px 10px;
                width: 100%;
                border-right: 1px solid #e5e5e5;
                overflow: hidden;
            }
            .navlist{
                .ivu-menu{
                    .ivu-menu-submenu{
                        .ivu-menu-submenu-title,.ivu-menu-item{
                            text-align: left;
                        }
                    }
                }
            }   
        }
        .rightContent{
            min-height: 760px;
            background: #fff;
        }    
    }
</style>
