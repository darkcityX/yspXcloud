<template>
	<div class="login">
		<Row class="iviewRow">
			<Col span="8" offset="8" class="iviewCol">
				<div class="loginModel">
					<Form class="loginContent" ref="formInline" :model="formInline" :rules="ruleInline" inline>
						<FormItem prop="user" class="user">
							<Input type="text" v-model="formInline.user" placeholder="请输入用户名">
								<Icon type="ios-person-outline" slot="prepend"></Icon>
							</Input>
						</FormItem>
						<FormItem prop="password" class="password"> 
							<Input  class="login-input" type="password" v-model="formInline.password" placeholder="请输入密码">
								<Icon type="ios-lock-outline" slot="prepend"></Icon>
							</Input>
						</FormItem>
						<FormItem class="submitBtns">
							<Button type="primary" @click="handleSubmit('formInline')">登<span class="nbsp"></span>陆</Button>
						</FormItem>
					</Form>							
				</div>
			</Col>
		</Row>	
	</div>
</template>

<script>
    import {mapState} from 'vuex';
    import store from './../store';
    
	export default {
		name: 'login',
		data(){
			return {
				formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入您的密码', trigger: 'blur' },
                        { type: 'string', min: 6, max: 12, message: '请输入6~12位密码', trigger: 'blur' }
                    ]
                }
			}
        },
        computed : {
            ...mapState([
                'isLogin',
                'userList'
            ]),
            isLogin(){
                return store.state.isLogin;
            },
            userList(){
                return store.state.userList;
            }
        },
        created(){
            // 调用获取用户信息接口
            this.getUserList()
        },
		methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    console.log( valid );
                    if (valid) {
                        console.log( this.checkedFrom(this.userList,this.formInline) );
                        if( this.checkedFrom(this.userList,this.formInline) ){
                            this.$Message.success('登陆成功!');
                            this.$store.dispatch("changeisLogin",true);
                            this.$router.push({
                                path: '/guideIndex'
                            });
                        }else{
                            this.$Message.error('登陆失败!');    
                        }
                    } else {
                        this.$Message.error('登陆失败!');
                    }
                });
            },
            getUserList(){
                this.$axios.get('/user.json')
                    .then(res=>{
                        // this.$store.dispatch("changeisLogin",true);
                        this.$store.dispatch("saveUserLists",res);
                    }).catch(err=>{
                        console.log(err);
                    });
            },
            checkedFrom(arr,item){
                return arr.some((val,index,arr)=>{
                    return item.user == val.username && item.password == val.password;
                });
            }
        }
	}
</script>

<style lang="less" scoped>
	@import "./../assets/css/Util.less"; 
	.login{
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
		.BgImg('./../images/loginBg.png',cover);
		.iviewRow{
			height: 100%;
			.iviewCol{
				position: relative;
				margin-top: 10%;
				padding: 10px;
				.loginModel{
                    padding: 10% 20%;
                    .BgImg('./../images/loginModel.png',cover);
                    background-size: 100% 100%;
					// background: rgba(255,255,255,0.1);
					.loginContent{
						.user,.password,.submitBtns{
							.resize;
							margin-bottom: 40px;
							display: block;
                        }
						.submitBtns{
							margin-top: 60px;
							margin-bottom: 0;	
						}
					}
				}				
			}
			
		}

	}	
</style>

