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
                                <MenuItem v-for="(menu,index) in subMenu.secondary" :key="index" :name="menu.name" :to="menu.href">{{ menu.name }}</MenuItem>
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
    /** --------------- 导入markdown 代码块高亮：开始 ------------------- **/
    import hljs from 'highlight.js'
    import 'highlight.js/styles/atom-one-dark.css'

    const highlightCode = () => {
        const preEl = document.querySelectorAll('pre')

        preEl.forEach((el) => {
            hljs.highlightBlock(el)
        })
    }
    // 1、在mounted 和 updated 生命周期中进行调用

    /** --------------- 导入markdown 代码块高亮：结束 ------------------- **/

    export default {
        name: 'IdePlatform',
        data () {
            return {
                // 左侧导航菜单栏
                
                leftNav: [// 侧边栏一级导航
                    { // 相关规范整理
                        solt : 0, 
                        name : '相关规范整理',
                        secondary : [ // 侧边栏二级导航
                            { 
                                solt : 0-0, 
                                name : 'Xcloud开发规范整理',
                                href: '/IdePlatform/specification'
                            },
                            {
                                solt : 0-1, 
                                name : 'UI参考规范',
                                href: '/IdePlatform/UIspecification'   
                            },
                            {
                                solt : 0-2, 
                                name : '开发流程规范',
                                href: '/IdePlatform/ProcessSpecification'   
                            }
                        ]
					},
					{ // 公共基础配置及文件说明
                        solt : 1, 
                        name : '公共基础配置及文件说明',
						secondary : [ // 侧边栏二级导航
							{
                                solt : 1-1, 
                                name : 'IDE平台配置',
                                href: '/IdePlatform/IDE_Config'
                            },
                            {
                                solt : 1-2, 
                                name : 'css配置文件',
                                href: '/IdePlatform/cssConfig'
                            },
                            {
                                solt : 1-3,
                                name : 'js配置文件',
                                href: '/IdePlatform/jsConfig'
							},
							{
                                solt : 1-4,
                                name : '自定义API文件',
                                href: '/IdePlatform/API_Config'
							},
							{
                                solt : 1-5,
                                name : '公共资源文件',
                                href: '/IdePlatform/otherConfig'
                            }
                        ]
                    },
                    { //二次封装常用组件
                        solt : 2,
                        name : '二次封装常用组件',
                        secondary : [
                            {
                                solt : 2-0,
                                name : '定制化样式组件封装',
                                href : '/IdePlatform/customized'
                            },
                            {
                                solt : 2-1,
                                name : '特殊需求的组件定制化封装',
                                href : '/IdePlatform/specialCustom'
                            }
                        ]
                    },
                    { // 适配技术难点解析
                        solt : 3,
                        name : '适配技术难点解析',
                        secondary : [
                           {
                                solt : 3-0,
                                name : '动态数据采集问题处理',
                                href : '/IdePlatform/dynDataPress'
                            }, 
                            {
                                solt : 3-1,
                                name : 'DOM重组与全局js文件异常问题解析',
                                href : '/IdePlatform/refactoringDom'
                            }, 
                            {
                                solt : 3-2,
                                name : 'flash插件处理方法',
                                href : '/IdePlatform/flashProblem'
                            }, 
                            {
                                solt : 3-3,
                                name : 'iframe相关问题解析',
                                href : '/IdePlatform/iframeProblem'
                            }, 
                        ]
                    },
                    { // 网站不适配自查方式
                        solt : 4,
                        name : '网站不适配自查方式',
                        secondary : [
                            {
                                solt : 4-0,
                                name : '预览版不适配',
                                href : '/IdePlatform/previewProblem',
                            },
                            {
                                solt : 4-1,
                                name : '正式版适配效果丢失',
                                href : '/IdePlatform/formalEdition',
                            },
                            {
                                solt : 4-2,
                                name : '不常见问题分析及处理思路',
                                href : '/IdePlatform/otherProblem',
                            },
                        ]
                    },
                    {
                        solt : 5,
                        name : '平台所涉及到的前端知识整理',
                        secondary : [
                            {
                                solt : 5-0,
                                name : 'rem基准值',
                                href : '#',
                            }
                        ]
                    },
                    {
                        solt : 6,
                        name : '客户答疑',
                        secondary : [
                            {
                                solt : 6-0,
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
        mounted(){
            // 导入初始路由判断函数 
            // this.judgmentPage();
            
            // markdown 代码块高亮
            highlightCode();
        },
        updated(){
            // markdown 代码块高亮
            highlightCode();    
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
            padding: 20px 10px;
            min-height: 760px;
            background: #fff;
			/*---- markdow 语法调正 ----*/
			.section{
				font-size: 16px;
			}
            h1{
				font-size: 24px;
				font-weight: 600;
                text-align: center;
			} 
			h2{
				font-size: 18px;
				font-weight: 600;
			}
			p{
				font-size: 16px;
				line-height: 2;
			}
			pre{
				margin: 20px 60px;
				padding: 0;
				code{
					margin: 0;
					padding: 10px;
					font-size: 16px;
					span{
						padding: 0 2px;
					}
				}
			}
            img{
                margin: 0 auto;
                padding: 10px;
                display: block;
                text-align: center;
                background: #e5e5e5;
            }

        }    
    }
</style>
