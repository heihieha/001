import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Category from '../views/Category.vue'
import Detail from '../views/Detail.vue'
import Mine from '../views/Mine.vue'


import Login  from '../views/Login.vue'
import Regist  from '../views/Regist.vue'

import Searchjie  from  '../views/Searchjie.vue'
import Search  from  '../views/Search.vue'

import JsCookie from 'js-cookie'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
	meta:{
		showtabbar:true
	}
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
	meta:{
		showtabbar:true,
		auth:true
	}
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/search/list',
    name: 'Searchjie',
    component: Searchjie
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine,
	meta:{
		showtabbar:true,
		auth:true
	}
  },
  {
    path: '/login',
    name:'Login',
    component: Login
  }, 
  {
    path: '/regist',
    name:'Regist',
    component: Regist
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior:function(t,f,s){
  	return{
		x:0,
		y:0
	}
  }
});
//导航守卫
router.beforeEach( (t,f,n)=>{
	if(t.meta.auth){
		let logined = JsCookie.get("username");
		if(!logined){
			n("/login?next="+t.path)
			
		}
		else{
			n();
		}
		
	}
	else{
		n();
	}
	
} )
export default router
