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
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
			}
		},
		methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
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
		.BgImg('./../images/loginBg2.jpg',cover);
		.iviewRow{
			height: 100%;
			.iviewCol{
				position: relative;
				margin-top: 10%;
				padding: 10px;
				.loginModel{
					padding: 10% 20%;
					background: rgba(255,255,255,0.1);
					.loginContent{
						.user,.password,.submitBtns{
							.resize;
							margin-bottom: 24px;
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

