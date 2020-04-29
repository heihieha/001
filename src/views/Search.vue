<template>
	<div class="search">
		<form action="/">
		  <van-search
		    v-model="value"
		    show-action
		    placeholder="请输入搜索关键词"
		    @search="onSearch"
		    @cancel="onCancel"
		  />
		</form>
		<div class="co">
			<p class="h">热门搜索</p>
			<van-tag @click="timi(item)" plain :type=" yans[Math.floor(Math.random()*yans.length)]  " v-for="(item,index) in po" class="biao">{{item}}</van-tag>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Search',
		 data() {
		  return {
			value:"",
			po:["Move Free超级品牌日","嘉宝米粉","mlb帽子","简爱酸奶","安佳奶粉","贝亲奶瓶","华为手机","蔻驰女包","雅诗兰黛眼霜","大希地牛排","欧舒丹护手霜","虎牌保温杯","飞利浦电动牙刷","碧然德滤芯","卡乐比麦片","菲力牛排","mac口红","mk女包","苹果手机","兰蔻眼霜"],
			yans:["primary","success","danger","warning"]
		    }
		  },
		  methods:{
			  onCancel(){
				  this.$router.go(-1)
			  },
			  onSearch() {
				  console.log(this.value)
				  if(this.value.length>0){
					  this.timi(this.value)
				  }
			  },
			  timi(timiTxet){
			  		   this.$router.push({
			  			   name:"Searchjie",
			  			   query:{
			  				   key:timiTxet
			  			   }
			  		   })
			  },
		  },
		  created(){
		   
		  },
	}
</script>

<style lang="less">
	*{
		margin: 0;
		padding: 0;
	}
	.co{
		text-align: left;
		padding: 0 .1rem ;
		.h{
			padding: 0 .1rem ;
		}
		.biao{
			margin:  .1rem;
			font-size: .26rem;
		}
	}
	.van-ellipsis{
		max-width: 74%;
	}
	.header{
		input{
			width: 100%;
			height: .5rem;
			border: none;
			text-indent: .5rem;
			font-size: .28rem;
			background-color: #F2F2F2;
			
		}
		
		
	}
</style>
