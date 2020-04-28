<template>
	<div class="regist">
		<div class="top">
			<p>注册账号</p>
		</div>
		<div class="iocn">
			<img src="../assets/img/TB1sJWbjhv1gK0jSZFFXXb0sXXa-312-60.png">
		</div>
		<div class="tel" v-if="!hassend">
			<van-field class="formitem" v-model="tel" type="tel"  placeholder="请输入手机号码" />
			<van-button color="#ff6700" size="large" @click="sendsms()">立即登录/注册</van-button>
			
		</div>
		<div class="tel" v-if="hassend">
			<div >我们已经发送一条验证短信至 {{tel}}</div>
			<div >请输入短信中的验证码</div> 
			<van-field
			  v-model="sms"
			  center
			  clearable
			  placeholder="请输入短信验证码"
			>
			  <template #button>
				<van-button size="small" type="primary">发送验证码</van-button>
			  </template>
			</van-field>
			
			<van-button  type="warning" size="large" @click="xyb">下一步</van-button>
			<van-button type="warning" size="large" @click="returnTo">返回</van-button>
			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tel:"",
				hassend:false,
				sms:"",
			}
		},
		methods:{
			xyb(){
				this.$api.registAPI({
				tel:this.tel,
				sms:this.sms
			}).then(res=>{
				if(res.data.code==0){
					this.$router.push("/login")
				}
			}).catch(err=>{
					console.log("注册失败")
			})
			},
			returnTo(){
				this.hassend=false
			},
			sendsms(){
				this.$api.sendSMSAPI({
					tel:this.tel,
					type:"regist"
				}).then(res=>{
					if(res.data.code==0){
						this.hassend=true
					}
					else{
						console.log("注册失败");
					}
				}).catch(err=>{
					console.log("发送短信出错");
				})
			}
			
		}
	}
</script>

<style lang="less" scoped="scoped">
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
</style>
