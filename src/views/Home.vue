<template>
 <div>
	  <van-sticky :offset-top="0" class="xi">
	<div class="top">
		<div class="top_left">
			<van-search @click="go" placeholder="请输入搜索关键词" style='width: 100%;height: .5rem;margin: .2rem 0;'/>
		</div>
		<div class="top_right">
			<img src="../assets/img/ZnB0PM5xDzXZ2FeVlmT170102401021_150_150.png">
		</div>
	</div>
	</van-sticky>
	 <div class="home">
	<div class="poit">
	<div class="lun">
		<div class="iocn">
		<van-swipe :autoplay="2000" class="van-swipe">
		  <van-swipe-item v-for="item in goods[0].goods" class="van-swipe-item">
		    <img v-lazy="item.img"  style="width: 100%;"/>
		  </van-swipe-item>
		</van-swipe>
		</div>
	</div>
	<div class="centen">
		<img src="../assets/img/d1fc5869-a1a2-4ab9-91f3-a20d9d57f5d1_1125_68.png" alt="">
	</div>
	<div class="ba">
		<div v-for="item in goods[1].goods" class="xiao">
			<img :src="item.img">
		</div>
	</div>
	<div class="guang">
		<img src="../assets/img/dc80288c-c65e-4903-bbeb-da5a74bff3acT2004091444_900_225.png">
	</div>
	<div class="san">
		<div class="san_left">
			<img src="https://kaola-haitao.oss.kaolacdn.com/fdbcc17a-cc54-427d-9acf-3a92fafca855T2003131808_480_480.gif">
		</div>
		<div class="san_right">
			<div class="top">
				<img src="https://kaola-haitao.oss.kaolacdn.com/1996f3ba-3ee7-4eac-9f6d-a9b81194f68cT1911291646_480_240.gif">
			</div>
			<div class="bottom">
				<img src="https://kaola-haitao.oss.kaolacdn.com/463b3b9b-f7a2-4ac6-bdee-07d8e9cb4dccT2003171437_480_240.gif">
			</div>
		</div>
	</div>
	<div class="liang">
		<div class="iocn" v-for="item in goods[2].wapHomeRowWellViewList[0].rowModules">
			<div>
				<div><span>{{item.title}}</span>  <span style="font-size: .16rem;">{{item.subTitle}}</span></div>
				<div class="tu"><img :src="item.imgUrl1"><img :src="item.imgUrl2"></div>
			</div>
		</div>
	</div>
		<div class="wei">
			<div class="icon" v-for="item in goods[3].home">
				<img :src="item.labelBackgroundImage">
			</div>
		</div>
		<div class="wu">
			<div class="bottom" >
				<div class="bai" v-for="item in goods[3].home[1].globalGoodsItemList">
					<router-link :to="{name:'Detail'}">
					<div><img :src="item.imageUrl"></div>
						<div class="fontu">
							<div class="font"><p>{{item.title}}</p></div>
							<div class="my">￥<span>{{item.currentPrice}}</span></div>
						</div>
						</router-link>
				</div>
				
			</div>
		</div>	

		<div class="wu">
			<div class="bottom" >
				<div class="bai" v-for="item in goods[4].home[0].globalGoodsItemList">
					<div><img :src="item.imageUrl"></div>
						<div class="fontu">
							<div class="font"><p>{{item.title}}</p></div>
							<div class="my">￥<span>{{item.currentPrice}}</span></div>
						</div>
				</div>
			</div>
		</div>	
		
		
		<div class="wu">
			<div class="bottom" >
				<div class="bai" v-for="item in goods[5].home[0].globalGoodsItemList">
					<div><img :src="item.imageUrl"></div>
						<div class="fontu">
							<div class="font"><p>{{item.title}}</p></div>
							<div class="my">￥<span>{{item.currentPrice}}</span></div>
						</div>
				</div>
			</div>
		</div>	
		<div class="wu">
			<div class="bottom" >
				<div class="bai" v-for="item in goods[6].home[0].globalGoodsItemList">
					<div><img :src="item.imageUrl"></div>
						<div class="fontu">
							<div class="font"><p>{{item.title}}</p></div>
							<div class="my">￥<span>{{item.currentPrice}}</span></div>
						</div>
				</div>
			</div>
		</div>
		
		<div class="wu">
			<div class="bottom" >
				<div class="bai" v-for="item in goods[7].home[0].globalGoodsItemList">
					<div><img :src="item.imageUrl"></div>
						<div class="fontu">
							<div class="font"><p>{{item.title}}</p></div>
							<div class="my">￥<span>{{item.currentPrice}}</span></div>
						</div>
				</div>
			</div>
		</div>
		<div class="wu">
			<div class="bottom" >
				<div class="bai" v-for="item in goods[8].home[0].globalGoodsItemList">
					<div><img :src="item.imageUrl"></div>
						<div class="fontu">
							<div class="font"><p>{{item.title}}</p></div>
							<div class="my">￥<span>{{item.currentPrice}}</span></div>
						</div>
				</div>
			</div>
		</div>

		<div class="xiong">
			<i></i>别拉了，到底啦~
		</div>
	<div class="divs">
		<div class="top">
			<span>首页</span>
			<span>|</span>
			<span>客户端</span>
			<span>|</span>
			<span>手机用户</span>
			<span>|</span>
			<span>退出</span>
		</div>
		<p>阿里巴巴版权所有@2003-2020</p>
	</div>
	</div>
  </div>
  </div>
</template>
<style scoped lang="less">
	.home{    
		position: relative;
		top: 50px;
		.poit{
			position: relative;
			bottom: 50px;
		}
	.van-swipe{
		height: 100%;
	}

		.lun{
			width: 100%;
			
			.iocn{
				height: 4.5rem;
			}
		}
	}
	.top{

		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #FFFFFF;
		.top_left{
			width: 80%;
		}
		.top_right{
			img{
				width: 50%;	
			}
		}
	}
	 .custom-indicator {
	    position: absolute;
	    right: 5px;
	    bottom: 5px;
	    padding: 2px 5px;
	    font-size: 12px;
	    background: rgba(0, 0, 0, 0.1);
	  }
	  .van-swipe-item{
		  img{
			  width: 100%;
			}
	  }
	  .centen{
		  img{
			  width: 100%;
		  }
	  }
	  .ba{
		  display: flex;
		  flex-wrap: wrap;
		  .xiao{
			  width: 20%;
		  }
		  img{
			  width: 100%;
		  }
	  }
	.guang{
		img{
			width: 100%;
		}
	}
	.san{
		display: flex;
		img{
			width: 100%;
		}
	}
	.liang{
		display: flex;
		justify-content: space-around;
		.iocn{
			width: 50%;
			img{
				width: 43%;
			}
		}
	}
	.wei{
		background-color: #f2f2f2;
		.icon{
			img{
				width: 100%;
			}
		}
	}
	.wu{
		background-color: #f2f2f2;		
	}
	.bottom{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;

		.bai{
			width: 45%;
			background-color: #FFFFFF;
			margin-bottom: .2rem;
			
			img{
				width:100%;
			}
			.fontu{
				padding:  .2rem;
			}
			.my{
				text-align: left;
				color: #f00;
			}
			p{
				margin: 0;
				padding: 0;
				font-size: .26rem;
				color: #333333;
				overflow : hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}
		}
		.xiong{
			padding: .2rem 0;
			color: #999;
			background-color: #f2f2f2;		
			font-size: .25rem;
			i{
				display:inline-block;
				width: .25rem;
				height: .25rem;
				margin-right: .1rem;
				background: url(../assets/img/7a70300e-bc8d-4d7f-8590-954dd47820e1.png);
				background-size: .25rem;
			}
		}
		.divs{
			.top{
				text-align: center;
				font-size: .25rem;
			}
			padding: .22rem 1rem;
			color: #848689;
			p{
				padding: 5px 0 0;
				font-size: 12px;
				color: #999;
				text-align: center;
			}
		}
		
</style>
		
<script >
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
	import Vue from 'vue';
	import { Lazyload } from 'vant';
	
	Vue.use(Lazyload);
import data from '../data'
export default {
  name: 'Home',
   data() {
    return {
		value:"",
		goods: [],
      }
    },
	created(){
	  this.goods = data[0].data.advGood
	  let goods = this.goods
	  console.log(goods[4].home[0].globalGoodsItemList)
	},
	methods:{
		go(){
			this.$router.push("/search")
		}
	}
  
  }
</script>
