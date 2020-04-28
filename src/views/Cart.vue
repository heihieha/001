<template>
  <div class="cart">
	  <p>购物车</p>
	<van-card
	 v-for="(good,index) in $store.getters.getGoodList" :key="index"
	  :num="good.num"
	  :price="good.price"
	  :desc="good.dasc"
	  :title="good.name"
	  :thumb="good.image"
	>
	  <template #footer>
	    <van-button size="mini" @click="jian(good.goodid,good.skuid,good.num-1)">-</van-button>
	    <van-button size="mini" @click="jian(good.goodid,good.skuid,good.num+1)">+</van-button>
	    <van-button size="mini" @click="remove(good.goodid,good.skuid)">移除</van-button>
	  </template>
	</van-card>
  </div>
</template>
<style lang="less">
	.cart{
		margin-top:10px;
		padding: 10px;
		p{
			background-color: #0570DB;
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
