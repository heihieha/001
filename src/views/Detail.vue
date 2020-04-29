<template>
  <div class="detail">
	  <div class="pppp">
	<div class="lun">
		<div class="iocn">
		<van-swipe :autoplay="2000" class="van-swipe">
		  <van-swipe-item v-for="item in goods[16].basicInfo.webImageList" class="van-swipe-item">
		    <img v-lazy="item.imageUrl"  style="width: 100%;"/>
		  </van-swipe-item>
		</van-swipe>
		</div>
		<div class="go"  @click="go">
			<van-icon name="arrow-left"/>
		</div>
	</div>
	<div class="jiage">
		<div class="jiageiocn"><p class="x">新人价</p><p class="x1">￥59</p><p class="x2">考拉价￥78</p><p class="x3">3期免息</p></div>
		<div class="right"><van-icon name="like-o" /><p class="s">收藏</p></div>
	</div>
	<div class="font">
		<p class="fontp">【升级11片装】SNP 海洋燕窝高倍补水亮白面膜 25毫升</p>
		<p class="fontp1">美妆节目《Beautiful Days》热推！买不起燕窝一两，用得起面膜十盒！只知补水不知“锁”，功课都白做！70%金丝燕窝精华，修护干瘪细胞，内在大口喝水；肌肤水分“保护膜”！</p>
	</div>
	<div class="top_iocn">
		<div class="san">
			<div class="yi">
				<img src="https://kaola-haitao.oss.kaolacdn.com/c0be3e6c11de4adb9ea90df712da9aea1419662386933i46mbwfo10003.png?x-oss-process=image/resize,w_32,h_0/quality,q_75" alt="">
				<span class="yifont">韩国品牌</span>
			</div>
			<div class="yi">
				<img src="https://kaola-haitao.oss.kaolacdn.com/183cb5b6-0edd-45d5-9218-3f5d3ab33244.png?x-oss-process=image/resize,w_32,h_0/quality,q_75" alt="">
				<span class="yifont">考拉自营</span>
			</div>
			<div class="yi">
				<img src="https://kaola-haitao.oss.kaolacdn.com/13bd59e6e29a4f06b278c586629e690d.png?x-oss-process=image/resize,w_32,h_0/quality,q_75" alt="">
				<span class="yifont">跨境商品</span>
			</div>
			
		</div>
	</div>
	<div class="xian"></div>
	<div style="width: 100%;">
		<div class="left"  @click="alertMenu">
			<div class="r1">
				<p class="colo">促销：</p>
				<div class="colo1">
					<p>[满件减] 满2件享7.5折</p>
					<p>[考拉豆抵扣] 单件可用6豆抵3元</p>
					<p>[加价购] 加入购物车，即可低价换购热销商品</p>
				</div>
			</div>
			<p>&gt;</p>
		</div>
		<van-action-sheet v-model="show" title="促销">
		  <div class="content">
				<p>[满件减] 满2件享7.5折</p>
				<p>[考拉豆抵扣] 单件可用6豆抵3元</p>
				<p>[加价购] 加入购物车，即可低价换购热销商品</p></div>
		</van-action-sheet>
  </div>
  <div class="xian"></div>
  	<div style="width: 100%;">
  		<div class="left"  @click="alertMenu2">
  			<div class="r1">
  				<p class="colo">运费：</p>
  					<p style="float: left;">满88元免运费</p>
  			</div>
  			<p>&gt;</p>
  		</div>
  		<van-action-sheet v-model="show2" title="运费说明">
  		  <div class="content">
  				<p>自营订单满88元包邮，不足金额的订单收取10元运费，以商品活动后的总金额为准，不含税费，使用虚拟资产(优惠券、红包、考拉豆等)不影响包邮的计算，特殊商品、自营店铺及入驻商家商品单独计算运费。</p>
		  </div>
  		</van-action-sheet>
  </div>
    <div class="xian"></div>
	<div class="pjia">
		<div class="gun">
			<div class="ptop">
				<p>其他小伙伴说</p>
				<p>&gt;</p>
			</div>
			<div class="lai">
				<div class="piocn" v-for="(item,index) in goods[16].excellentCommentList">
					<div class="pfont">
						<div class="ttop">
							<img :src="item.avatarKaola">
							<span>{{item.accountShow}}</span>
						</div>
						<p>{{item.commentContent}}</p>
					</div>
					<img :src="item.imgUrlListsFor75" alt="" class="ssss">
				</div>
			</div>
		</div>
	</div>
  </div>
  <van-goods-action class="action">
    <van-goods-action-icon icon="chat-o" text="考拉客服" @click="onClickIcon" />
    <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
    <van-goods-action-button
      type="warning"
      text="加入购物车"
      @click="AddCartClicked"
    />
    <van-goods-action-button
      type="danger"
      text="立即购买"
      @click="BuyClicked"
    />
	<van-sku
	v-model="show1"
	  :sku="sku"
	  :goods="goodsw"
	  :goods-id="sku.tree.id"
	  :hide-stock="sku.hide_stock"
	  @sku-selected="onSkuSelect"
	  @buy-clicked="onBuyClicked"
	  @add-cart="onAddCartClicked"
	/>
  </van-goods-action>
  </div>
</template>
<style lang="less" scoped="scoped">
	.detail{	
		.content {
		   padding: 16px 16px 160px;
		   p{
			   text-align: left;
		   }
		 }
		position: relative;
		top: 100px;
		.lun{
			position: relative;
			.go{
				position: absolute;
				left: .2rem;
				top: .2rem;
			}
		}
		.jiage{
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			padding:  0 .2rem;
			.jiageiocn{
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
			}
			.x{
				color: #f00;
				font-weight: 900;
				font-size: .3rem;
			}
			.x1{
				color: #f00;
				font-weight: 900;
				font-size: .5rem;
			}
			.x2{
				margin-left: .1rem;
				font-size: .2rem;
			}
			.x3{
				width: .9rem;
				height: .3rem;
				border-radius: .1rem;
				margin-left: .1rem;
				font-size: .2rem;
				color: #FFFFFF;
				background-color: #ff9839;
			}
			.right{
				padding-right: .2rem;
				font-weight: 900;
				.s{
				font-size: .2rem;
			}	
			}
		
		}
		.font{
			width: 100%;
				.fontp{
					padding-top: 10px;
					margin: 0 10px 6px;
					font-size: .25rem;
					color: #333;
					font-weight: 700;
					text-align: left;
				}
				.fontp1{
					margin: 0 10px 6px;
					font-size: .26rem;
					color: #333;
					text-align: left;
				}
		}
		.top_iocn{
			padding: .2rem;
		}
		.san{
			width: 100%;
			padding: .2rem 0;
			background-color: #f7f7f7;
		}
		.left{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: .2rem;
			.r1{
				.colo{
					float: left;
				}
				.colo1{
					float: left;
					p{
						text-align: left;
						color: #f00;
						font-size: .22rem;
					}
				}
			}
		}
		.yi{
			margin-left: .1rem;
			img{
				width: .28rem;
				vertical-align:middle;
			}
			.yifont{
				margin-left: .05rem;
				font-size: .28rem;
			}
		}
		.xian{
			width: 100%;
			height: .2rem;
			background-color: #f1f1f1;
		}
	.action{
		z-index: 99;
	}
	}
	.pppp{
		position: relative;
		bottom: 100px;
	}
	.pjia{

		overflow: hidden;
		padding: .2rem;
		.gun{
			width: 100%;
			overflow-x: scroll;
		}
		.ptop{
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: absolute;
			width: 94.5%;
		}
		.lai{
				display: flex;
				padding-top: .5rem;
			}
		.piocn{
			display: flex;
			img.ssss{
				width: 3rem;
				height: 3rem;
			}
			.pfont{
				padding:  .2rem;
				p{
					width: 3.5rem;
					padding:.2rem 0 ;
				}
			}
		}
		.ttop{
			display: flex;
			align-items: center;
			img{
				width: .5rem;
			}
			span{
				padding-left: .1rem;
			}
		}
	}

</style>
<script>
	import Vue from 'vue';
	import { Lazyload } from 'vant';
	
	import { Toast } from 'vant';
	Vue.use(Lazyload);
	import { ActionSheet } from 'vant';
	Vue.use(ActionSheet);
	import { Sku } from 'vant';

Vue.use(Sku);
import data from '../data'
export default {
  name: 'Detail',
   data() {
    return {
		value:"",
		show:false,
		show1:false,
		show2:false,
		
		 sku: {
			 tree: [
			   {
			     k: '规格', // skuKeyName：规格类目名称
			     v: [
			   	{
			   	  id: '1167', // skuValueId：规格值 id
			   	  name: '面膜20片装', // skuValueName：规格值名称
			   	}
			     ],
			     k_s: 's381' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
			   },
			   {
			     k: '搭配', // skuKeyName：规格类目名称
			     v: [
			   	{
			   	  id: '1164', // skuValueId：规格值 id
			   	  name: '面霜6件套', // skuValueName：规格值名称
			   	},

			     ],
			     k_s: 's380' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
			   }
			   ],
			   // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
			   list: [
			   
			      {
			        id: 2194700016, // skuId，下单时后端需要
			        price: 1699*100, // 价格（单位分）
			        s380: '1164', // 规格类目 k_s 为 s1 的对应规格值 id
			        s381: '1167', // 规格类目 k_s 为 s2 的对应规格值 id
			        stock_num: 100 // 当前 sku 组合对应的库存
			      },

			   ],
			   hide_stock: false // 是否隐藏剩余库存
		 },
		 goodsw:{
		
		 },
		 // 商品的详细数据
		 data:null,
		 // 选中商品的sku规格
		 selectGood:null
    }
	},
	created(){
	  this.goods = data[0].data.advGood
	  let goods = this.goods
	  console.log(goods[16])
	},
	methods:{
		alertMenu(){
			this.show=true
		},
		alertMenu2(){
			this.show2=true
		},
		onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Toast(item.name);
    },
		BuyClicked(){
				  
		},
		AddCartClicked(good){
			this.show1=true
			this.$store.dispatch("addGoodAsync",{
				goodid:this.id,
				sukid:this.id,
				name:this.name,
				price:this.price,
				num:1
			}).then(()=>{
				this.$toast("ss")
			})
		},
		onAddCartClicked(good){
			 this.$store.dispatch("addGoodAsync",{
				goodid:this.id,
				sukid:this.id,
				name:this.name,
				price:this.price,
				num:1
			 }).then(()=>{
				this.$toast("ss")
			 })
		},
		onSelect(option) {
		  Toast(option.name);
		  this.showShare = false;
		 },
		go(){
			 this.$router.go(-1)
		},
		onClickIcon() {
		       this.$router.push("/cart")
		 },
		 onClickButton() {
		      Toast('点击按钮');
		},
		onBuyClicked(good){
				  console.log("购买商品",good.selectedSkuComb);
				 // this.$toast('点击了购买');
		},
		onSkuSelect(good){
		  // console.log("选择了规格结果为",good.);
			  console.log("选择了规格结果为",good.selectedSkuComb.id);
			  
			  
			  

		},
	}
  
  }
</script>
