<template>
    <div class="GuideIndex">
        <Row>
            <Col span="4" style="background: red;">
                <div class="leftNavList">
                    <div class="ad">
                        对的，你没看错 我是小广告    
                    </div>  
                    <div class="navlist">
                        <Menu :active-name="leftNav[0].title" width="auto">
                            <MenuItem v-for="(list,index) in leftNav" :key="index" :name="list.name" ::to="list.href">{{list.title}}</MenuItem>
                        </Menu>
                    </div>   
                </div>    
            </Col>
            <Col span="20">
                <div class="rightContent">
                    
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name : 'GuideIndex',
        data(){
            return {
                leftNav: [
                    { title: '介绍' , name : '介绍' , href: '#' },
                    { title: '示例' , name : '示例' , href: '#' },
                ]
            }
        }
    }
</script>

<style lang="less">
    .GuideIndex{
        .leftNavList{
            .ad{
                width: 100%;
                min-height: 200px;
            }
            .navlist{

            }   
        }
        .rightContent{

        }    
    }
</style>


