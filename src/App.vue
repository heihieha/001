<template>
  <div id="app">
    <router-view/>
	
	
	<van-tabbar  active-color="#ff6700" inactive-color="#999" v-model="active">
	  <van-tabbar-item to="/">
		<template #icon="props">
		      <img :src="props.active ? icon.homeactive : icon.homeinactive"  class="a"/>
		</template>  
	  </van-tabbar-item>
	  <van-tabbar-item to="/category">
		  <template #icon="props">
		        <img :src="props.active ? icon.categoryactive : icon.categoryinactive" />
		  </template>  
	  </van-tabbar-item>
	  <van-tabbar-item to="/cart">
		  <template #icon="props">
		        <img :src="props.active ? icon.cartactive :icon.cartinactive " />
		  </template> 
	  </van-tabbar-item>
	  <van-tabbar-item to="/mine">
		  <template #icon="props">
		        <img :src="props.active ? icon.mineactive :icon.mineinactive" />
		  </template> 
	  </van-tabbar-item>
	</van-tabbar>
  </div>
</template>
<script>
	export default {
	  data() {
		return {
		  active: 0,
		  icon: {
		          homeactive: require('./assets/img/homesel.png'),
		          homeinactive: require('./assets/img/home.png'),
				  categoryactive:require('./assets/img/categorysel.png'),
				  categoryinactive:require('./assets/img/category.png'),
				  cartactive:require('./assets/img/cartsel.png'),
				  cartinactive:require('./assets/img/cart.png'),
				  mineactive:require('./assets/img/minesel.png'),
				  mineinactive:require('./assets/img/mine.png')
				  
		        }
		};
	  },
	  watch:{
		  $route(newvalue,oldvalue){
			  
		  }
	  }
	};
</script>



<style  lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.van-tabbar-item{
	.van-tabbar-item__icon{
		width: 60%;
		height: 1rem;
		img{
			width: 100%;	
			height: 1rem;
		}
	}
}
// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
