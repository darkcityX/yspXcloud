<template>
    <div id="app">
        <!-- 1、导入head组件 -->
        <v-header v-show="isShow"></v-header>

        <!-- 2、一级路由入口 -->
        <router-view/>

        <!-- 3、导入foot组件 -->

    </div>
</template>

<script>
    // import {mapState} from 'vuex';
    // import store from './store';

    import Head from '@/components/common/Head';


    export default {
		name: 'App',
		data(){
			return {
				isShow : true
			}
        },
        components:{
            'v-header': Head
		},
		created(){
			location.pathname == '/' ||
			location.pathname == '/login'
                ? this.isShow = false : this.isShow = true;
                
            // // 调用获取用户信息接口
            // this.getUserList();
        },
        mounted(){

        },
		watch: {
			$route(to,from){
				to.path == '/' ||
				to.path == '/login'
					? ( this.isShow = false ) : (this.isShow = true);
			}
        },
        methods:{
			
        }
    }
</script>

<style lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #333;
        font-size: 14px;

	}
	// 重置iview样式
	.ivu-form{ // 登陆页表单样式重置
		.ivu-form-item-content{
			.ivu-input-wrapper{
				.ivu-input-group-prepend{
					color: #fff;
					background: rgba(6,166,180,0.6);
					i{
						font-size: 24px;
					}
				}
				input{
					height: 56px;
					color: #fff;// #06A6B4;
					font-size: 16px;
					background: rgba(6,166,180,0.6);
				}
			}
			.ivu-form-item-error-tip{
				font-size: 14px;
				right: 0;
				left: auto;
			}
			.ivu-btn{
				margin: 0 auto;
				display: block;
				width: 50%;
				height: 40px;
				font-size: 16px;
				background: rgba(12,185,201,0.8);
    			border: 1px solid #0CB9C9;
				.nbsp{
					display: inline-block;
					width: 20px;
				}
			}
			.ivu-btn:hover{
				background: rgba(12,185,201,1);	
			}
		}
		// 提示
		.ivu-form-item-erro{

		}
	}
</style>
