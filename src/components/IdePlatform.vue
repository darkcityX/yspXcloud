<template>
    <div class="IdePlatform">
        <Row>
            <Col span="4">
                <div class="leftNavList">
                    <div class="ad">
                        <Input v-model="searchValue" @on-focus="searchFocus();"  search enter-button placeholder="请输入要搜索的关键字"/>
                        <div class="searchShow" v-show="searchViewShow">
                            <ul>
                                <li v-for="(list,index) in searchList" :key="index" :data-boss="list.boss" v-show="list.isShow" @click="toView(list.name,list.boss,list.href);">{{ list.name }}</li>
                            </ul>
                        </div>
                    </div>  
                    <div class="navlist">
                        <Menu @on-select="navigateTo" @on-open-change="SubMenuTo" :active-name="menuActive" theme="light" width="auto" :open-names='openSubMenu' >
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
                openSubMenu : [],//'相关规范整理',
                // 当前菜单栏动态标签
                menuActive: 'Xcloud开发规范整理',


                // search
                searchViewShow: false,    // 搜索下拉框是否出现
                searchValue : "",
                searchList: [],
            }
        },
        watch:{
            searchValue(key){
                console.log( key );
                this.searchList.forEach((item,index,arr)=>{
                    item.isShow = false;
                    if( item.name.includes(key) ){
                        item.isShow = true;
                    }
                });

            }
               
        },
        created(){
            console.log( '------------ 组件创建完毕 ---------------' );
            /**
             * 1、左侧导航栏状态记录 
             * */ 
            let beforeStatus = localStorage.getItem("IDEopenSubMenu");
            let beforeStatusMenu = localStorage.getItem("IDEmenuActive");
            if( !beforeStatus && !beforeStatusMenu ){
                // console.log("------ IDE平台左侧导航栏无缓存 -------");
                
            }else{
                this.openSubMenu =  beforeStatus;
                this.menuActive = beforeStatusMenu;
            }

            /**
             *  2、将左侧导航栏全部展开
             * 
             * */ 
            this.openSubMenu = this.leftNav.map((item,index,arr)=>{
                return item.name;
            });
            console.log( this.openSubMenu  );

        },
        mounted(){
            console.log( '------------ 组件挂载完毕 -------------------' );
            /**
             * 2、search列表数据处理
             **/
            this.searchList = this.searchData(this.leftNav);

            // markdown 代码块高亮
            highlightCode();
        },
        updated(){
            // markdown 代码块高亮
            highlightCode();    
        },
        destroyed(){
            // 销毁IDE左侧导航栏缓存
            localStorage.clear("IDEopenSubMenu");
            localStorage.clear("IDEmenuActive");
        },
        methods: {
            navigateTo(name){ // 当前选定菜单栏
                // console.log( name );
                localStorage.setItem("IDEmenuActive",name);
            },
            SubMenuTo(name){ // 当前展开得菜单栏
                // console.log("------------当前展开得"+ name);
                localStorage.setItem("IDEopenSubMenu",name);
            },
            searchData(arr){ // 搜索列表处理
                // console.log("-------------调用该函数---------------");
                if( arr.length > 0 ){
                    let newList = [];
                    arr.forEach((item)=>{
                        item.secondary.map((list,index,arr)=>{
                            newList.push({
                                'name': list.name,
                                'boss': item.name,
                                'href': list.href,
                                'isShow' : true,
                            });
                        });
                    });
                    return newList;
                }
            },
            searchFocus(){
                console.log("------ 聚焦 ------");
                this.searchViewShow = true;
            },
            searchBlur(){
                console.log("------ 失焦 ------");
                console.log( this );
                // 关闭search搜索弹窗
                this.searchViewShow = false;
            },
            toView(menuActive,openSubMenu,pathName){
                // 关闭search搜索弹窗
                this.searchViewShow = false;

                // 改变左侧导航
                console.log( menuActive + "--------------" + openSubMenu);
                this.menuActive = menuActive;
                // this.openSubMenu = openSubMenu;

                // 更新缓存
                localStorage.setItem("IDEmenuActive",menuActive);
                localStorage.setItem("IDEopenSubMenu",openSubMenu);

                // 路由跳转
                this.$router.push({
                    path: pathName
                });

                console.log( this.menuActive + "-------------" + this.openSubMenu );

                
            },

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
                position: relative;
                padding: 20px 10px;
                width: 100%;
                border-right: 1px solid #e5e5e5;
                // overflow: hidden;
                .searchShow{
                    position: absolute;
                    top: 55px;
                    left: 0px;
                    z-index: 1000;
                    padding: 0 10px;
                    width: 100%;
                    height: 100px;
                    ul{
                        padding: 0 10px;
                        max-height: 200px;
                        list-style-type: none;
                        overflow-y: auto;
                        border: 1px solid #f5f5f5;
                        border-radius: 4px;
                        box-shadow: 0px 4px 4px 0px #e5e5e5;
                        background: #fff;
                        li{
                            
                            color: #666;
                            font-size: 14px;
                            height: 36px;
                            line-height: 36px;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            border-bottom: 1px dashed #e5e5e5;
                            cursor: pointer;
                        }
                        li:hover{
                            padding: 0 10px;
                            color: #fff;
                            border: none;
                            background: #2d8cf0;
                        }
                    }
                }
            }
            .navlist{
                .ivu-menu{
                    .ivu-menu-submenu{
                        .ivu-menu-submenu-title{
                            background: #f5f5f5;
                        }
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
