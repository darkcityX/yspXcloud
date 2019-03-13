<template>
    <div class="example">
		<!-- 1、页面标题 -->
		<div class="title">
			<p>经典案例</p>
		</div>

		<!-- 2、图片列表 -->
		<div class="listCard">
			<Card class="list" v-for="(list,index) in exampleList" :key="index">
				<div class="yesBg" style="text-align:center">
					<img :src="list.src">
				</div>
				<div class="Nobg">
					<Button class="showViewBtn">点击查看</Button>	
				</div>
			</Card>
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
						href: 'http://www.gov.cn/',
						title: '中国铁塔官网',
						info: '政府网',
						type: 0
					},
					{
						src: require('./../../assets/images/exampleImage/minhangkechuang.jpg'),
						href: 'http://www.gov.cn/',
						title: '闵行科创',
						info: '企业网',
						type: 0
					},
					{
						src: require('./../../assets/images/exampleImage/xianshidisanyiyuan.jpg'),
						href: 'http://www.gov.cn/',
						title: '西安市第三医院',
						info: '政府网',
						type: 0
					},
				]
            }    
        },

    }
</script>

<style lang="less" scoped>
	.example{
		.title{
			margin-bottom: 20px;
			p{
				font-size: 24px;
				text-align: center;
			}
		}

		.listCard{
			padding-left: 30px;
			width: 100%;
			width: 100%;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: left;
			
			.list{
				margin: 20px;
				position: relative;
				display: inline-block;
				.yesBg{
					img{
						max-width: 300px;
					}	
					h3{
						font-size: 14px;
					}				
				}
				.Nobg{
					position: absolute;
					top: 0;
					left: 0;
					width: 0;
					height: 100%;
					text-align: center;
					background: rgba(255,255,255,1);
					overflow: hidden;
					transition: all 1000ms linear 500ms;
					&:before{
						content: "";
						display: inline-block;
						vertical-align: middle;
						height: 100%;
					}
					.showViewBtn{
						display: inline-block;
						vertical-align: middle;	
					}
				}

			}
			.list:hover{
				.Nobg{
					display: block;
					width: 50%;
					background: rgba(0,0,0,0.6)
				}	
			}
		}

	}
</style>


