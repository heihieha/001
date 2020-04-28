<template>
	<div class="login">
		<div class="iocn">
			<img src="../assets/img/TB1sJWbjhv1gK0jSZFFXXb0sXXa-312-60.png">
		</div>
		<div class="yomg" v-if="loginType==1">

			  <van-field
				v-model="username"
				name="用户名"
				placeholder="用户名"
				style="height: 50px;"
				:rules="[{ required: true, message: '请填写用户名' }]"
			  />
			  <van-field
				v-model="password"
				type="password"
				name="密码"
				placeholder="密码"
				:rules="[{ required: true, message: '请填写密码' }]"
			  />
			  <div style="margin: 16px;">
				<van-button round block type="info" native-type="submit" @click="dl(1)">
				  登录
				</van-button>
			  </div>

		
		<div class="font">
			<p>忘记密码</p>
			<p @click="zc(2)" >手机短信登录/注册</p>
			
		</div>
		</div>
		<div class="yomg" v-if="loginType==2">

			 <van-field  class="formitem" v-model="tel" type="tel" placeholder="手机号码" />	
			  <van-field
				v-model="sms"
				type="password"
				placeholder="验证码"
				:rules="[{ required: true, message: '请填写密码' }]"
			  />
			  <van-button size="small" type="primary" @click="yzm">发送验证码</van-button>
			  <div style="margin: 16px;">
				<van-button round block type="info" native-type="submit" @click="dl(2)">
				  登录
				</van-button>
				
			  </div>

			<div class="font">
					<p @click="zc(1)">用户名密码登录</p>
			</div>
		</div>
		<div class="zhu">
			<router-link to="/regist"> 立即注册 </router-link>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Form } from 'vant';
	
	Vue.use(Form);
	export default {
	  data() {
	    return {
			tel:"",
			sms:"",
			loginType: 1,
			username: '1122',
			password: '1122',
	    };
	  },
	  methods: {
		zc(tyle){
			this.loginType=tyle
		},
		yzm(){
			if (this.tel.length<=0) {
				this.$toast("请输入手机号")
			} else{
				this.$api.sendSMSAPI({
					tel:this.tel,
					type:"regist"
				}).then(res=>{
					
					if(res.data.code==0){
						this.$toast("验证码已发送")
					}
				}).catch(err=>{
					console.log("出错",err);
				})
			}
		},
		dl(type){
			if (type==1) {
				this.$api.loginAPI({
					fmdo:"normal",
					dopost:"login",
					userid:this.username,
					pwd:this.password
				}).then(res=>{
					if(res.data.code==0){
						this.$jsCookie.set('token', this.userid, { expires: 7 }) 
						this.$jsCookie.set('username', this.pwd, { expires: 7 }) 
						let next = this.$route.query.next;
						if (next) {
							this.$router.push(next)
						} else{
							this.$router.push('/')
						}
					}
				}).catch(err=>{
					console.log("登录失败2",err);
				})
			} else if(type==2){
				this.$api.loginAPI({
					fmdo:"telphone",
					dopost:"login",
					telphone:this.tel,
					sms:this.sms
					}).then(res=>{
						if(res.data.code==0){
							this.$jsCookie.set('token', res.data.token, { expires: 7 }) 
							this.$jsCookie.set('username', this.tel, { expires: 7 }) 
							let next =  this.$route.query.next;
							if (next) {
								this.$router.push(next)
							} else{
								this.$router.push('/')
							}
						}
					}).catch(err=>{
						console.log("登录失败4",err);
					})
			}else if(type==3||type==4||type==5){
				this.$api.loginAPI({
					fmdo:"third",
					dopost:"login",
					token:""
				
				}).then(res=>{
					if(res.data.code==0){
						this.$jsCookie.set('token', res.data.token, { expires: 7 }) 
						this.$jsCookie.set('username', this.username, { expires: 7 }) 
						let next= this.$route.query.next;
						if(next){
							this.$router.push(next)
						}
						else{
							this.$router.push('/')
						}
					}
					
				}).catch(err=>{
					console.log("登录失败1",err);
				})
			}
		},
	  },
	};
</script>

<style lang="less" scoped="scoped">
	.ligin{
		position: relative;
	}
	.iocn{
		height: 1.8rem;
		padding: 1 .2rem;
		line-height: .8rem;
		overflow: hidden;
		img{
			height: .6rem;
			margin-top: .6rem;
		}
	}
	.font{
		display: flex;
		justify-content: space-between;
		padding: 0 .5rem;
		p{
			margin: 0;
			padding: 0;
			font-size: .26rem;
		}
	}
	.zhu{
		position: absolute;
		top: 7rem;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
