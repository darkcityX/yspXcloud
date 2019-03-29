// 1、导入axios插件
import axios from "axios";

// 2、配置基础https://wd5250432225ohpyaw.wilddogio.com/user.json
axios.defaults = Object.assign(axios.defaults,{
    baseURL : 'https://wd5250432225ohpyaw.wilddogio.com',
    headers: { 										// 添加请求头部所需类型生命
		"Content-Type": "application/json",
	}
});

// console.log(axios.defaults);

// 3、添加请求拦截器
axios.interceptors.request.use(
    config => {
        let userInfo = sessionStorage.userInfo;
        if( userInfo ){
            config.headers.accessToken = JSON.parse(userInfo).user.token;
        }

        return config;
    },

    error => {
        return Promise.reject(error);
    }


);

// 4、添加响应拦截器
axios.interceptors.response.use(
    res =>{
        console.log( res );
        if( res.status === 200 ){ // 请求头状态码200
            if( res.data ){
                setTimeout(()=>{ // 隐藏加载状态

                },1000);
                // console.log("-------1:请求状态码正常：200-------");
                switch ( res.data.code ){
                    case "100": // 正常
                        // console.log("--- 2:code码正常：100 -----");
                        return res.data.data;
                    default:
                        return Promise.reject(res);
                }
            }
        } else {
            alert(`网络错误!(${res.status})`);
        }
    }
);

export default axios;