<template>
	<div class="a">
		<div class="searchjie">
			<form action="/">
			  <van-search
			    v-model="value"
			    show-action
			    placeholder="请输入搜索关键词"
			    @search="onSearch"
			    @cancel="onCancel"
			  />
			</form>
			<div class="csrt">
				<div v-for="(item,index) in datas" :key="index" class="pdd">
					<div class="l">
						<img :src="item.img" class="img1">
					</div>
					<div class="r">
						<p>{{item.name}}</p>
						<p>{{item.desc}}</p>
						<p>{{item.price}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script >
	export default{
		data(){
			return{
				value:"",
				datas:[]
			}
			
		},
		created(){
			this.value = this.$route.query.key;
			this.$api.searchAPI({
				key:this.$route.query.key
			}).then(res=>{
				this.datas=res.data
			}).catch(err=>{
				this.$toast("请重试")
			})
		},
		methods: {
			   timi(timiTxet){
				   this.$router.push({
					   name:"Searchjie",
					   query:{
						   key:timiTxet
					   }
				   })
			   },
		   onCancel() {
			   this.$router.go(-1)
		   },
		   onSearch() {
				  if(this.value.length>0){
					  this.search(this.value)
				  }
		   },
		   onClickRight() {
		   		  console.log(this.value)
		   		  if(this.value.length>0){
		   			  this.timi(this.value)
		   		  }
		     
		   },
		 }
	}
</script>

<style  lang="less" scoped="scoped">
	.header{
		
		background-color: #FFFFFF;
	}
	.a{
		position: absolute;
		top: .6rem;
	}
	input{
			border: 0.01rem solid #e5e5e5;
			border-radius: .04rem;
			width: 100%;
			padding: 0 .2rem;
			outline: 0;
			font-size: .3rem;
			font-weight: 400;
			height: .5rem;
			line-height: normal;
			margin-top: 0.2rem;
	}
	.searchjie{
		position: relative;
		bottom: .65rem;
	}
/* 	.csrt{
		position: absolute;
		top: .5rem;
	} */
	.pdd{
		display: flex;
		align-items: center;
	}
	.l{
		flex-basis: 40%;
		max-width: 40%;
		
	}
	.img1{
		width: 100%;
	}
	.r{
		padding-left: 0.3rem;
		text-align: left;
	}
	p{
		margin: .1rem;
		padding: 0;
		font-family: "宋体";
	}
	p:nth-child(3){
		color: red;
	}
</style>
