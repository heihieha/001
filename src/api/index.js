// //  封装API 

// import axios from 'axios'
// // 配置默认域名
// axios.defaults.baseURL = 'http://520mg.com';


// // 首页数据API
// let getHomeDataAPI = (data)=>{
// 	return axios.get("/mi/page.php",{
// 		params:{
// 			page_type:data.page_type,
// 			page_id:data.page_id
// 		}
// 	})
// }
// //搜索
// let searchAPI = (data)=>{
// 	return axios.post("/mi/search.php",data)
// }
// //
// import './mock.js'


// //fl
// let getCategoryDataAPI = ()=>{
// 	return axios.get("/mi/category.php")
// }

// //xq
// let getProductDataAPI = (data) =>{
// 	return axios.get("/mi/product.php",{
// 		params:{
// 			id:data.id
// 		}
// 	})
// }

// // 发送验证码
// let sendSMSAPI = (data)=>{
// 	return axios.post("mi/sms.php",data)
// }

// // 发送登录
// let loginAPI = (data)=>{
// 	return axios.post("mi/login.php",data)
// }

// // 注册
// let registAPI = (data)=>{
// 	return axios.post("mi/regist.php",data)
// }

// //中心
// let userInAPI = (data)=>{
// 	return axios.post("mi/mine.php",data)
// }

// let getUserInfo = ()=>{
// 	return axios.get("mi/userinfo.php")
// }
// export {
// getHomeDataAPI,
// searchAPI,
// getCategoryDataAPI,
// getProductDataAPI,
// sendSMSAPI,
// loginAPI,
// registAPI,
// userInAPI,
// getUserInfo
// }