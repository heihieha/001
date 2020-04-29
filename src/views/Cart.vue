<template>
	<div class="cart">
		<div class="top">
			<p>购物车</p>
		</div>
		<div class="conten">
			<img src="../assets/img/data_image_png;base….png" alt="">
			<p>购物车空空如也，赶紧去逛逛吧！</p>
		</div>
		<div class="bot">
			<van-button type="danger" size='small  ' to="/">去逛逛</van-button>
		</div>
	</div>
</template>
<style lang="less">
	.cart{
		font-family: "黑体";
		.top{
			padding: .2rem;
			border-bottom: .01rem solid #f0f0f0;
		}
		.conten{
			width: 100%;
			margin-top: 3rem;
			text-align: center;
			img{
				width: 3rem;
				height: 3rem;
			}
			p{
				padding: .2rem;
			}
		}
	}
</style>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Cart',
  components: {
    // HelloWorld
  },
  methods:{
	  jian(goodid,skuid){
		  this.$store.dispatch("jiAn",{
			  id:goodid,
			  skuid:skuid,
			  num:num
		  })
	  },
	  remove(goodid,skuid){
		  this.$store.dispatch("removeAsync",{
			  id:goodid,
			  skuid:skuid
		  })
	  }
  }
}
</script>
