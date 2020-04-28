<template>
  <div class="mine">
	  <div class="coo">
	<div class="top">
		<p class="o2">我的考拉</p>
		<div class="iocn" >
			<img src="https://kaola-haitao.oss.kaolacdn.com/ZnB0PM5xDzXZ2FeVlmT170102401021_150_150.png?x-oss-process=image/resize,w_82,h_0/quality,q_95" alt="">
		<span>用户名</span>
		</div>
	</div>
	</div>
	<div class="conten">
		<div class="timi">
			<div class="ppq">
				<div class="iocn" v-for="(item,index) in goods[12].img">
					<img :src="item.url_img" alt="">
					<p class="o">{{item.name}}</p>
				</div>
			</div>
		</div>
		<div class="timi">
			<div class="ppq">
				<div class="iocn" v-for="(item,index) in goods[13].san">
					<img :src="item.url_img" alt="">
					<p class="o">{{item.name}}</p>
				</div>
			</div>
		</div>
		<div class="timi">
			<div class="ppq">
				<div class="iocn" v-for="(item,index) in goods[14].si">
					<img :src="item.url_img" alt="">
					<p class="o">{{item.name}}</p>
				</div>
			</div>
		</div>
		<div class="timi">
			<div class="bott">
				<div class="topf">
					<p class="left">考拉承诺|正品保障</p>
					<p class="right">12项保障</p>
				</div>
				<div class="com">
					<div class="bottomiocn">
						<div class="i" v-for="(item,index) in goods[15].bottom">
							<img :src="item.url_img" alt="" class="img">
							<p class="spant">{{item.name}}</p>
						</div>
					</div>
					<button>查看详情</button>
				</div>
			</div>
		</div>
	</div>
	
  </div>
</template>
<style lang="less" scoped="scoped">
	*{
		margin: 0;
		padding: 0;
	}
	.mine{
		position: relative;
		width: 100%;

		.top{			
			width: 100%;
			height: 3rem;
			border-bottom-left-radius: 100% 10%;
			border-bottom-right-radius: 100% 10%;
			color: #FFFFFF;
			background-color: #f00;
			.o2{
				padding: .2rem;
				font-size: .4rem;
				font-weight: 900;
			}
		}
		.conten{
			width: 100%;
			position: absolute;
			top: 2.2rem;
		}
		.iocn{

			padding-left: .2rem;
			text-align: left;
			img{
				width: .8rem;
				vertical-align: middle;
			}
			span{
				vertical-align: middle;
				margin-left: .2rem;
				font-size: .46rem;
			}
		}
		.timi{			
			padding: 0 .27rem;
			
			.ppq{
				display: flex;
				justify-content: space-around;
				margin: .2rem 0;
				padding: .2rem;
				border-radius: .1rem;
				background-color: #f0f0f0;
				
			}
			.iocn{
				text-align: center;
				padding: .2rem;
				img{
					width: .55rem;
					height: .55rem;
				}
				.o{
					margin-top: .2rem;
					font-size: .22rem;
				}
			}
		}
		.com{
			display: flex;
			justify-content: space-between;
			margin-top: .1rem;
			
		}
		.bottomiocn{
			display: flex;
			justify-content: space-around;
			width: 80%;
			.i{
				display: flex;
				margin-left: .1rem;
				.img{
					width: .24rem;
					height: .24rem;
				}
				.spant{
					margin-left: .05rem;
					color: #999;
					font-size: .2rem;
				}
				
			}
	}
	.topf{
		display: flex;
		justify-content: space-between;
		width: 100%;
		.left{
			color: #f00;
			font-weight: 900;
		}
		.right{
			color: #999;
			font-size: .22rem;
		}
	}
	.bott{
		margin: .2rem 0;
		padding: .2rem;
		border-radius: .1rem;
		background-color: #f0f0f0;
	}
	button{
		width: 1rem;
		height: .3rem;
		border-radius: .1rem;
		border: none;
		font-size: .18rem;
		line-height: .1rem;
		color: #FFFFFF;
		background-color: #F00;
		}
	}
</style>
<script>
	import data from '../data'
 export default {
   name: 'Mine',
   components: {
   },
   data(){
 	  return{
 		userInfo:null,
 		username:""
 	  }
   },
   created() {
	this.goods = data[0].data.advGood
	let goods = this.goods
	console.log(goods[12])
  }
 }
</script>
