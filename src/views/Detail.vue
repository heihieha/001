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
	<div >
	<van-sku
	  v-model="show"
	  :sku="sku"
	  :goods="goods"
	  :goods-id="goodsId"
	  :quota="quota"
	  :quota-used="quotaUsed"
	  :hide-stock="sku.hide_stock"
	  :message-config="messageConfig"
	  @buy-clicked="onBuyClicked"
	  @add-cart="onAddCartClicked"
	/>
	</div>
  </div>
  <van-goods-action class="action">
    <van-goods-action-icon icon="chat-o" text="考拉客服" @click="onClickIcon" />
    <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
    <van-goods-action-button
      type="warning"
      text="加入购物车"
      @click="onClickButton"
    />
    <van-goods-action-button
      type="danger"
      text="立即购买"
      @click="onClickButton"
    />
  </van-goods-action>
  </div>
</template>
<style lang="less" scoped="scoped">
	.detail{	
		position: relative;
		top: 50px;
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
		bottom: 50px;
	}
</style>
<script>
	import Vue from 'vue';
	import { Lazyload } from 'vant';
	
	import { Toast } from 'vant';
	Vue.use(Lazyload);
	
import { Sku } from 'vant';

Vue.use(Sku);
import data from '../data'
export default {
  name: 'Detail',
   data() {
    return {
		value:"",

		show:false,
		 sku: {
			 tree: [
			     {
			       k: '颜色', // skuKeyName：规格类目名称
			       v: [
			         {
			           id: '30349', // skuValueId：规格值 id
			           name: '红色', // skuValueName：规格值名称
			           imgUrl: 'https://img.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
			           previewImgUrl: 'https://img.yzcdn.cn/1p.jpg', // 用于预览显示的规格类目图片
			         },
			         {
			           id: '1215',
			           name: '蓝色',
			           imgUrl: 'https://img.yzcdn.cn/2.jpg',
			           previewImgUrl: 'https://img.yzcdn.cn/2p.jpg',
			         }
			       ],
			       k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
			     }
			   ],
			   // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
			   list: [
			     {
			       id: 2259, // skuId，下单时后端需要
			       price: 100, // 价格（单位分）
			       s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
			       s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
			       s3: '0', // 最多包含3个规格值，为0表示不存在该规格
			       stock_num: 110 // 当前 sku 组合对应的库存
			     }
			   ],
			   price: '1.00', // 默认价格（单位元）
			   stock_num: 227, // 商品总库存
			   collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
			   none_sku: false, // 是否无规格商品
			   messages: [
			     {
			       // 商品留言
			       datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
			       multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
			       name: '留言', // 留言名称
			       type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
			       required: '1', // 是否必填 '1' 表示必填
			       placeholder: '' // 可选值，占位文本
			     }
			   ],
			   hide_stock: false // 是否隐藏剩余库存
		 },
		 goods:{
			   picture: 'https://img.yzcdn.cn/1.jpg'
		 },
		 messageConfig:{
			   // 自定义限购文案
			   quotaText: '每次限购xxx件',
			   // 自定义步进器超过限制时的回调
			   handleOverLimit: (data) => {
			     const { action, limitType, quota, quotaUsed, startSaleNum } = data;
			 
			     if (action === 'minus') {
			       Toast(startSaleNum > 1  ? `${startSaleNum}件起售` : '至少选择一件商品');
			     } else if (action === 'plus') {
			       // const { LIMIT_TYPE } = Sku.skuConstants;
			       if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
			         let msg = `单次限购${quota}件`;
			         if (quotaUsed > 0) msg += `，你已购买${quotaUsed}`;
			         Toast(msg);
			       } else {
			         Toast('库存不够了');
			       }
			     }
		 }
      },
    }
	},
	created(){
	  this.goods = data[0].data.advGood
	  let goods = this.goods
	  console.log(goods[16])
	},
	methods:{
		onSelect(option) {
		  Toast(option.name);
		  this.showShare = false;
		 },
		go(){
			 this.$router.go(-1)
		},
		onClickIcon() {
		      Toast('点击图标');
		 },
		    onClickButton() {
		      Toast('点击按钮');
		},
	}
  
  }
</script>
