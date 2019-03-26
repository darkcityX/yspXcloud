import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router =  new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect : "/login",
            component: e => import('@/components/Login')
		},
		{
			path: '/login',
			name: 'login',
			component: e => import('@/components/Login')
		},
        { // 指南
            path: '/guideIndex',
            name: 'GuideIndex',
            redirect: '/guideIndex/introduction',
            component: e => import('@/components/GuideIndex'),
            children: [
                { // 介绍
                    path: 'introduction',
                    name: 'introduction',
                    component: e => import('@/mardowns/Guide/Introduction.md')
                },
                { // 示例
                    path: 'example',
                    name: 'example',
                    component: e => import('@/components/Guide/Example')
                },
                { // 版本控制
                    path: 'version',
                    name: 'version',
                    component: e => import('@/components/Guide/Version')
                }  
            ] 
        },
        { // IDE平台
            path: '/IdePlatform',
            name: 'IdePlatform',
            redirect: '/IdePlatform/specification',
            component: e => import('@/components/IdePlatform'),
            children: [
                { // 规范整理
                    path: 'specification',
                    name: 'specification',
                    component: e => import('@/mardowns/IdePlatform/PingTaiWenTiJieXi/specification.md')
                },
                { // IDE平台相关介绍
                    path: 'IDE_Introduction',
                    name: 'IDE_Introduction',
                    component: e => import('@/mardowns/IdePlatform/PingTaiWenTiJieXi/IDE_Introduction.md')    
				},
				{ // 定制化组件二次样式封装
                    path: 'customized',
                    name: 'customized',
                    component: e => import('@/mardowns/IdePlatform/ErCiZuJianFengZhuang/customized.md')    
                },
            ]
        }
    ]
});

//路由守卫
router.beforeEach((to, from, next) => {
	let isLogin = sessionStorage.isLogin ? true : false;
	
	// 不需要进行验证的地址
	let arr = ['/','/login'];

	// 循环遍历：全部为true则返回true
	let checked = (arr,item)=>{
		return arr.every((val,index,arr)=>{
			return item != val;
		})
	}
	if( !checked(arr,to.path) ){
		next();
	}else{
		isLogin ? next() : router.push('/login');
	}

});


export default router;


