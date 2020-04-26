import mock from 'mockjs'

// 使用mock拦截ajax请求  当请求该路由时 会执行匿名函数
mock.mock("http://520mg.com/mi/search.php", function(){
	let result = [];
	for( let i=0;i< (Math.floor(Math.random()*20) +5); i++){
		let obj = {
			img:mock.Random.image('250x250'),
			name:mock.Random.ctitle(),
			desc:mock.Random.ctitle(20),
			price:mock.Random.float(60, 100)
		}
		result.push(obj);
	}
	return result
	
	
})
//  模拟发送短信接口

mock.mock("http://520mg.com/mi/sms.php",function(){
	let result ={
		"code":0,
		"result":"ok"
	}
	return result
})

//  模拟登录接口
mock.mock("http://520mg.com/mi/login.php",function(){
	let result ={
		"code":0,
		"result":"ok"
	}
	return result
})

//  模拟注册接口
mock.mock("http://520mg.com/mi/regist.php",function(){
	let result ={
		"code":0,
		"result":"ok"
	}
	return result
})
export {mock}