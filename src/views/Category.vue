<template>
  <div class="category">
	<div class="left">
		<van-sidebar v-model="activeKey" @change="onChange">
		  <van-sidebar-item :title="item.categoryName"  v-for="(item,index) in goods[11].topLevelFrontCategoryVOList" :key="index" class="font"/>
		</van-sidebar>
	</div>
	<div class="right">
		<div class="cat" v-if=" activeKey==index" v-for="(data,index) in goods[11].topLevelFrontCategoryVOList" :key="index">
			<div class="iocn" v-if="data.categoryId==8171">
				<div class="n" v-for="(item,index) in data.childrenNodeList" :key="index">
				<div class="id" v-if="item.categoryId==16061">
					<!-- <router-link v-if="good.action.type=='product'" :to="{name:'Detail',params:{id:good.action.path }}"> -->
					<div class="iocn_io" v-for="(item,index) in data.childrenNodeList" :key="index">
						<p class="font">{{item.categoryName}}</p>
						<div class="uu">
							<div class="you" v-for="(item,index) in item.childrenNodeList" :key="index">
								<img :src="item.appIcon">
								<p>{{item.categoryName}}</p>
							</div>
						</div>
					</div>
					<!-- </router-link> -->
				</div>	
				</div>
			</div>
			<div class="iocn" v-if="data.categoryId==8181">
				<div class="n" v-for="(item,index) in data.childrenNodeList" :key="index">
				<div class="id" v-if="item.categoryId==20984">
					<div class="iocn_io" v-for="(item,index) in data.childrenNodeList" :key="index">
						<p class="font">{{item.categoryName}}</p>
						<div class="uu">
							<div class="you" v-for="(item,index) in item.childrenNodeList" :key="index">
								<img :src="item.appIcon">
								<p>{{item.categoryName}}</p>
							</div>
						</div>
					</div>
				</div>	
				</div>
			</div>
			<div class="iocn" v-if="data.categoryId==8182">
				<div class="n" v-for="(item,index) in data.childrenNodeList" :key="index">
				<div class="id" v-if="item.categoryId==21031">
					<div class="iocn_io" v-for="(item,index) in data.childrenNodeList" :key="index">
						<p class="font">{{item.categoryName}}</p>
						<div class="uu">
							<div class="you" v-for="(item,index) in item.childrenNodeList" :key="index">
								<img :src="item.appIcon">
								<p>{{item.categoryName}}</p>
							</div>
						</div>
					</div>
				</div>	
				</div>
			</div>
			<div class="iocn" v-if="data.categoryId==8185">
				<div class="n" v-for="(item,index) in data.childrenNodeList" :key="index">
				<div class="id" v-if="item.categoryId==19856">
					<div class="iocn_io" v-for="(item,index) in data.childrenNodeList" :key="index">
						<p class="font">{{item.categoryName}}</p>
						<div class="uu">
							<div class="you" v-for="(item,index) in item.childrenNodeList" :key="index">
								<img :src="item.appIcon">
								<p>{{item.categoryName}}</p>
							</div>
						</div>
					</div>
				</div>	
				</div>
			</div>
			<div class="iocn" v-if="data.categoryId==8188">
				<div class="n" v-for="(item,index) in data.childrenNodeList" :key="index">
				<div class="id" v-if="item.categoryId==26164">
					<div class="iocn_io" v-for="(item,index) in data.childrenNodeList" :key="index">
						<p class="font">{{item.categoryName}}</p>
						<div class="uu">
							<div class="you" v-for="(item,index) in item.childrenNodeList" :key="index">
								<img :src="item.appIcon">
								<p>{{item.categoryName}}</p>
							</div>
						</div>
					</div>
				</div>	
				</div>
			</div>
			<div class="iocn" v-if="data.categoryId==8184">
				<div class="n" v-for="(item,index) in data.childrenNodeList" :key="index">
				<div class="id" v-if="item.categoryId==16042">
					<div class="iocn_io" v-for="(item,index) in data.childrenNodeList" :key="index">
						<p class="font">{{item.categoryName}}</p>
						<div class="uu">
							<div class="you" v-for="(item,index) in item.childrenNodeList" :key="index">
								<img :src="item.appIcon">
								<p>{{item.categoryName}}</p>
							</div>
						</div>
					</div>
				</div>	
				</div>
			</div>
			<div class="iocn" v-if="data.categoryId==8183">
				<div class="n" v-for="(item,index) in data.childrenNodeList" :key="index">
				<div class="id" v-if="item.categoryId==16023">
					<div class="iocn_io" v-for="(item,index) in data.childrenNodeList" :key="index">
						<p class="font">{{item.categoryName}}</p>
						<div class="uu">
							<div class="you" v-for="(item,index) in item.childrenNodeList" :key="index">
								<img :src="item.appIcon">
								<p>{{item.categoryName}}</p>
							</div>
						</div>
					</div>
				</div>	
				</div>
			</div>
			<div class="iocn" v-if="data.categoryId==8186">
				<div class="n" v-for="(item,index) in data.childrenNodeList" :key="index">
				<div class="id" v-if="item.categoryId==8300">
					<div class="iocn_io" v-for="(item,index) in data.childrenNodeList" :key="index">
						<p class="font">{{item.categoryName}}</p>
						<div class="uu">
							<div class="you" v-for="(item,index) in item.childrenNodeList" :key="index">
								<img :src="item.appIcon">
								<p>{{item.categoryName}}</p>
							</div>
						</div>
					</div>
				</div>	
				</div>
			</div>
			<div class="iocn" v-if="data.categoryId==8190">
				<div class="n" v-for="(item,index) in data.childrenNodeList" :key="index">
				<div class="id" v-if="item.categoryId==15984">
					<div class="iocn_io" v-for="(item,index) in data.childrenNodeList" :key="index">
						<p class="font">{{item.categoryName}}</p>
						<div class="uu">
							<div class="you" v-for="(item,index) in item.childrenNodeList" :key="index">
								<img :src="item.appIcon">
								<p>{{item.categoryName}}</p>
							</div>
						</div>
					</div>
				</div>	
				</div>
			</div>
			<div class="iocn" v-if="data.categoryId==8187">
				<div class="n" v-for="(item,index) in data.childrenNodeList" :key="index">
				<div class="id" v-if="item.categoryId==19910">
					<div class="iocn_io" v-for="(item,index) in data.childrenNodeList" :key="index">
						<p class="font">{{item.categoryName}}</p>
						<div class="uu">
							<div class="you" v-for="(item,index) in item.childrenNodeList" :key="index">
								<img :src="item.appIcon">
								<p>{{item.categoryName}}</p>
							</div>
						</div>
					</div>
				</div>	
				</div>
			</div>
			<div class="iocn" v-if="data.categoryId==15413">
				<div class="n" v-for="(item,index) in data.childrenNodeList" :key="index">
				<div class="id" v-if="item.categoryId==15414">
					<div class="iocn_io" v-for="(item,index) in data.childrenNodeList" :key="index">
						<p class="font">{{item.categoryName}}</p>
						<div class="uu">
							<div class="you" v-for="(item,index) in item.childrenNodeList" :key="index">
								<img :src="item.appIcon">
								<p>{{item.categoryName}}</p>
							</div>
						</div>
					</div>
				</div>	
				</div>
			</div>
			<div class="iocn" v-if="data.categoryId==8189">
				<div class="n" v-for="(item,index) in data.childrenNodeList" :key="index">
				<div class="id" v-if="item.categoryId==16080">
					<div class="iocn_io" v-for="(item,index) in data.childrenNodeList" :key="index">
						<p class="font">{{item.categoryName}}</p>
						<div class="uu">
							<div class="you" v-for="(item,index) in item.childrenNodeList" :key="index">
								<img :src="item.appIcon">
								<p>{{item.categoryName}}</p>
							</div>
						</div>
					</div>
				</div>	
				</div>
			</div>
			<div class="iocn" v-if="data.categoryId==17236">
				<div class="n" v-for="(item,index) in data.childrenNodeList" :key="index">
				<div class="id" v-if="item.categoryId==17279">
					<div class="iocn_io" v-for="(item,index) in data.childrenNodeList" :key="index">
						<p class="font">{{item.categoryName}}</p>
						<div class="uu">
							<div class="you" v-for="(item,index) in item.childrenNodeList" :key="index">
								<img :src="item.appIcon">
								<p>{{item.categoryName}}</p>
							</div>
						</div>
					</div>
				</div>	
				</div>
			</div>
			<div class="iocn" v-if="data.categoryId==19990">
				<div class="n" v-for="(item,index) in data.childrenNodeList" :key="index">
				<div class="id" v-if="item.categoryId==21560">
					<div class="iocn_io" v-for="(item,index) in data.childrenNodeList" :key="index">
						<p class="font">{{item.categoryName}}</p>
						<div class="uu">
							<div class="you" v-for="(item,index) in item.childrenNodeList" :key="index">
								<img :src="item.appIcon">
								<p>{{item.categoryName}}</p>
							</div>
						</div>
					</div>
				</div>	
				</div>
			</div>
			<div class="iocn" v-if="data.categoryId==15424">
				<div class="n" v-for="(item,index) in data.childrenNodeList" :key="index">
				<div class="id" v-if="item.categoryId==15425">
					<div class="iocn_io" v-for="(item,index) in data.childrenNodeList" :key="index">
						<p class="font">{{item.categoryName}}</p>
						<div class="uu">
							<div class="you" v-for="(item,index) in item.childrenNodeList" :key="index">
								<img :src="item.appIcon">
								<p>{{item.categoryName}}</p>
							</div>
						</div>
					</div>
				</div>	
				</div>
			</div>
			<div class="iocn" v-if="data.categoryId==21446">
				<div class="n" v-for="(item,index) in data.childrenNodeList" :key="index">
				<div class="id" v-if="item.categoryId==21456">
					<div class="iocn_io" v-for="(item,index) in data.childrenNodeList" :key="index">
						<p class="font">{{item.categoryName}}</p>
						<div class="uu">
							<div class="you" v-for="(item,index) in item.childrenNodeList" :key="index">
								<img :src="item.appIcon">
								<p>{{item.categoryName}}</p>
							</div>
						</div>
					</div>
				</div>	
				</div>
			</div>
			<div class="iocn" v-if="data.categoryId==8191">
				<div class="n" v-for="(item,index) in data.childrenNodeList" :key="index">
				<div class="id" v-if="item.categoryId==8223">
					<div class="iocn_io" v-for="(item,index) in data.childrenNodeList" :key="index">
						<p class="font">{{item.categoryName}}</p>
						<div class="uu">
							<div class="you" v-for="(item,index) in item.childrenNodeList" :key="index">
								<img :src="item.appIcon">
								<p>{{item.categoryName}}</p>
							</div>
						</div>
					</div>
				</div>	
				</div>
			</div>
			<div class="iocn" v-if="data.categoryId==18476">
				<div class="n" v-for="(item,index) in data.childrenNodeList" :key="index">
				<div class="id" v-if="item.categoryId==20343">
					<div class="iocn_io" v-for="(item,index) in data.childrenNodeList" :key="index">
						<p class="font">{{item.categoryName}}</p>
						<div class="uu">
							<div class="you" v-for="(item,index) in item.childrenNodeList" :key="index">
								<img :src="item.appIcon">
								<p>{{item.categoryName}}</p>
							</div>
						</div>
					</div>
				</div>	
				</div>
			</div>
			<div class="iocn" v-if="data.categoryId==14757">
				<div class="n" v-for="(item,index) in data.childrenNodeList" :key="index">
				<div class="id" v-if="item.categoryId==14758">
					<div class="iocn_io" v-for="(item,index) in data.childrenNodeList" :key="index">
						<p class="font">{{item.categoryName}}</p>
						<div class="uu">
							<div class="you" v-for="(item,index) in item.childrenNodeList" :key="index">
								<img :src="item.appIcon">
								<p>{{item.categoryName}}</p>
							</div>
						</div>
					</div>
				</div>	
				</div>
			</div>
		</div>
	</div>
  </div>
</template>
<style  scoped lang="less">
	.category{
		.left{
			position: absolute;
			left: 0;
			width: 25%;
			top:0;
			bottom: 1rem;
			overflow-y: scroll;
			.font{
				font-size: .16rem;
			}
			
		}
		.right{
			position: absolute;
			left: 25%;
			top: 0;
			bottom:1rem;
			right: 0;
			overflow-y: scroll;
			font-size: .26rem;
			.cat{
				width: 100%;
				.iocn{
					.font{
						text-align: left;
						font-weight: 900;
					}
					.uu{
						display: flex;
						flex-wrap: wrap;
						.you{
							width: 30%;
							padding: 0 .05rem;
						}
						
						
					}
				}
			}
			img{
				width: 100%;
			}
		}
	}
</style>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import data from '../data'
export default {
  name: 'Category',
  data(){
	  return {
		  activeKey: 0
	  }
	   
  },
  components: {
    // HelloWorld
  },
  created(){
    this.goods = data[0].data.advGood
    let goods = this.goods
    console.log(goods[11].topLevelFrontCategoryVOList[0].appIcon)
    console.log(goods[11].topLevelFrontCategoryVOList)
  },
   methods: {
      onChange(index) {
       
      },
    },
}
</script>
