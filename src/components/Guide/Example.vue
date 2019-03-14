<template>
    <div class="example">
		<!-- 1、页面标题 -->
		<div class="pageTitle">
			<p>经典案例</p>
		</div>

		<!-- 2、图片列表 -->
        <Row class="listCard">
            <Col class="listContainer" span="8" v-for="(list,index) in exampleList" :key="index">
                <Card class="list">
                    <div class="yesBg" style="text-align:center">
                        <img :src="list.src">
                    </div>
                    <div class="Nobg">
                        <a class="showViewBtn" :href="list.href">点击查看</a>	
                    </div>
                </Card>
            </Col>
        </Row>

        <!-- 3、示例 -->
        <div class="stepView" v-show="stepView">
            <div class="title">
                <p>查看案例引导</p>
            </div>
            <!-- <div class="StepContainer">
                <Carousel v-model="value1" loop style="padding: 0 100px;">
                <CarouselItem>
                    <div class="demo-carousel" style="background: red;">1</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel" style="background: green;">2</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel" style="background: yellow;">3</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel" style="background: bule;">4</div>
                </CarouselItem>
            </Carousel>
            </div> -->
            <div class="exit" @click="closeView();">
                <p>退出引导</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        'name' : 'example',
        data(){
            return {
				type:{
					0 : '政府类',
					1 : '高校类',
					2 : '企业类',
					3 : '商城类',
                    4 : '其它类'
				},
				exampleList: [
					{
						src: require('./../../assets/images/exampleImage/guowuyuan.jpg'),
						href: 'http://www.gov.cn/',
						title: '中华人民共和国中央政府网',
						info: '政府网',
						type: 0
					},
					{
						src: require('./../../assets/images/exampleImage/yinchuanshizhengfu.jpg'),
						href: 'http://www.yinchuan.gov.cn/',
						title: '银川市人民政府',
						info: '政府网',
						type: 0
					},
					{
						src: require('./../../assets/images/exampleImage/zhongguotieta.jpg'),
						href: 'https://www.china-tower.com/index',
						title: '中国铁塔官网',
						info: '企业网',
						type: 2
					},
					{
						src: require('./../../assets/images/exampleImage/minhangkechuang.jpg'),
						href: 'http://kc.shmh.gov.cn/html/DefaultSite/portal/index/index.htm',
						title: '闵行科创',
						info: '企业网',
						type: 2
					},
					{
						src: require('./../../assets/images/exampleImage/xianshidisanyiyuan.jpg'),
						href: 'http://xa3yuan.com/',
						title: '西安市第三医院',
						info: '其它类',
						type: 4
					},
                ],
                
                value1: 0,

                stepView: true
            }    
        },
        created(){

        },
        mounted(){

        },
        methods: {
            closeView(){
                this.stepView = false;
            }
        }

    }
</script>

<style lang="less" scoped>
	.example{
        /* ---- 1、页面标题 ---- */ 
		.pageTitle{
			margin-bottom: 20px;
			p{
				font-size: 24px;
				text-align: center;
			}
        }
        /* ---- 2、图片列表 ---- */ 
		.listCard{
            .listContainer{
                padding: 10px;
                .list{
                    width: 100%;
                    .ivu-card-body{
                        position: relative;
                        .yesBg{
                            img{
                                width: 100%;
                                min-width: 100%;
                            }
                        } 
                        .Nobg{
                            position: absolute;
                            top: 0;
                            left: 0;
                            z-index: 10;
                            width: 0;
                            height: 100%;
                            text-align: center;
                            background: rgba(255,255,255,1);
                            overflow: hidden;
                            transition: all 500ms linear 500ms;
                            &:before{
                    			content: "";
                    			display: inline-block;
                    			vertical-align: middle;
                    			height: 100%;
                            }
                            .showViewBtn{
                                padding: 10px 0;
                                display: inline-block;
                                width: 100%;
                                color: transparent;
                                font-size: 16px;
                                white-space: nowrap;
                                vertical-align: middle;	
                                border-top: 1px solid #e5e5e5;
                                border-bottom: 1px solid #e5e5e5;
                                background: rgba(0,0,0,0.4);
                    		}
                        }   
                    }
                    .ivu-card-body:hover{
                        .Nobg{
                            display: block;
                            width: 50%;
                            background: rgba(0,0,0,0.6);    
                            .showViewBtn{
                                color: #fff;
                            }                        
                        }
                    }
                    
                }
            }
        }
        /* ---- 3、引导框 ---- */  
        .stepView{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            .title{
                margin: 30px 0;
                color: #fff;
                font-size: 24px;
                text-align: center;
            }
            .exit{
                position: fixed;
                right: 20px;
                bottom: 20px;
                width: 160px;
                min-height: 60px;
                cursor: pointer;
                border: 2px dashed #f5f5f5;
                border-radius: 14px 14px 10px 10px;
                box-shadow: 0px 1px 10px 2px #ccc;
                p{
                    width: 100%;
                    color: #fff;
                    font-size: 18px;
                    font-weight: 600;
                    text-align: center;
                    line-height: 60px;
                }
            }
        }

	}
</style>


