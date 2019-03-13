<template>
    <div class="GuideIndex">
        <Row>
            <Col span="4">
                <div class="leftNavList">
                    <div class="ad">
                        <img src="./../assets/images/math.gif" alt="">       
                    </div>  
                    <div class="navlist">
                        <Menu :active-name="activeMenu" width="auto" @on-select="routerParams">
                            <MenuItem 
                                v-for="(list,index) in leftNav" 
                                :key="index" 
                                :name="list.name" 
                                :to="list.href"
                                >
                                    {{list.title}}
                            </MenuItem>
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
        name : 'GuideIndex',
        data(){
            return {
                // 左侧导航菜单栏
                leftNav: [
                    { solt: '0' , title: '介绍' , name : '介绍' , href: '/guideIndex/introduction' },
                    { solt: '1' , title: '示例' , name : '示例' , href: '/guideIndex/example' },
                    { solt: '2' , title: '版本' , name : '版本' , href: '/guideIndex/version' },
                ],

                // 当前菜单栏动态标签
                activeMenu: '介绍'

            }
        },
        created(){

            // 调用页面刷新状态函数
            this.getActiveMenu();
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
                console.log( "------ 调用初始路由判断函数 ------" );
                console.log( name );  
                localStorage.setItem( "activeMenu" , name );           
            },
            getActiveMenu(){ // 当页面刷新，根据本地存储激活的菜单栏进行状态存储
                let activeMenu = !localStorage.getItem("activeMenu") ? '' : localStorage.getItem("activeMenu");
                console.log( activeMenu );
                switch( activeMenu ){
                    case '':
                        this.activeMenu = '介绍'; 
                        this.$router.push({path:'/guideIndex/introduction'});
                        break;  
                    case '介绍':
                        this.activeMenu = activeMenu;
                        break; 
                    case '示例':
                        this.activeMenu = activeMenu;
                        break; 
                    case '版本':
                        this.activeMenu = activeMenu;
                        break;
                }
            }    
        }

    }
</script>

<style lang="less">
    .GuideIndex{
        background: #f5f5f5;
        .leftNavList{
            min-width: 160px;
            border-right: 1px solid #e5e5e5;
            background: #fff;
            .ad{
                width: 100%;
                min-height: 100px;
                max-height: 200px;
                border: 1px solid #e5e5e5;
                border-radius: 4px;
                overflow: hidden;
                background: #f5f5f5;
            }
            .navlist{

            }   
        }
        .rightContent{
            padding: 20px 10px;
            min-height: 760px;
            background: #fff;
        }    
    }
</style>


