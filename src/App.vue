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
        // computed : {
        //     ...mapState([
        //         'isLogin',
        //         'userList'
        //     ]),
        //     isLogin(){
        //         return store.state.isLogin;
        //     },
        //     userList(){
        //         return store.state.userList;
        //     }
        // },
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
            // console.log( "/* ---- 挂载完毕！测试store  ---- */");
            // console.log( this.isLogin );
            // console.log( this.userList );
        },
		watch: {
			$route(to,from){
				to.path == '/' ||
				to.path == '/login'
					? ( this.isShow = false ) : (this.isShow = true);
			}
        },
        methods:{
            // getUserList(){
            //     this.$axios.get('/user.json')
            //         .then(res=>{
            //             // console.log( "--- 3:调用封装的axios ----" );
            //             // console.log( res );
            //             // this.$store.dispatch("changeisLogin",true);
            //             this.$store.dispatch("changeisLogin",true);
            //             console.log( "---store-----:" + this.isLogin );
            //             console.log( "ajax---------开始---" );
            //             console.log( res );
            //             console.log( "ajax---------结束---" );
            //             this.$store.dispatch("saveUserLists",res);
            //             console.log( "完成状态管理---------------" );
            //             console.log( this.userList );
            //         }).catch(err=>{
            //             // console.log("--- 4:调用封装的axios报错 ---");
            //             console.log(err);
            //         });
            // }
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
