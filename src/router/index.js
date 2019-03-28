import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router =  new Router({
    // mode: 'history',
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
                /* ------------------------- 1 相关规范整理：开始 ---------------------------- */ 
                { // 1-1、开发规范整理
                    path: 'specification',
                    name: 'specification',
                    component: e => import('@/mardowns/IdePlatform/GuiFanZhengLi/specification.md')
                },
                { // 1-2、UI参考规范
                    path: 'UIspecification',
                    name: 'UIspecification',
                    component: e => import('@/mardowns/IdePlatform/GuiFanZhengLi/UIspecification.md')
                },
                { // 1-3、开发流程规范
                    path: 'ProcessSpecification',
                    name: 'ProcessSpecification',
                    component: e => import('@/mardowns/IdePlatform/GuiFanZhengLi/ProcessSpecification.md')
                },
                /* -------------------------1 相关规范整理：结束 ---------------------------- */ 
                
                /* ----------------- 2 公共基础文配置及相关文件说明：开始 -------------------- */
                { // 2-1、IDE平台相关配置说明
                    path: 'IDE_Config',
                    name: 'IDE_Config',
                    component: e => import('@/mardowns/IdePlatform/PublicWenJian/ConfigInstro.md')    
                },
                { // 2-2、css文件配置
                    path: 'cssConfig',
                    name: 'cssConfig',
                    component: e => import('@/mardowns/IdePlatform/PublicWenJian/CssConfig.md')    
                },
                { // 2-3、js配置文件
                    path: 'jsConfig',
                    name: 'jsConfig',
                    component: e => import('@/mardowns/IdePlatform/PublicWenJian/JsConfig.md')    
                },
                { // 2-4、API文件配置
                    path: 'API_Config',
                    name: 'API_Config',
                    component: e => import('@/mardowns/IdePlatform/PublicWenJian/APIConfig.md')    
                },
                { // 2-5、API文件配置
                    path: 'otherConfig',
                    name: 'otherConfig',
                    component: e => import('@/mardowns/IdePlatform/PublicWenJian/otherConfig.md')    
                },
                
                /* ----------------- 2 公共基础文配置及相关文件说明：结束 -------------------- */                
                
                /* ------------------------- 3 组件封装: 开始 ------------------------------ */
                { // 定制化组件二次样式封装
                    path: 'customized',
                    name: 'customized',
                    component: e => import('@/mardowns/IdePlatform/ErCiZuJianFengZhuang/customized.md')    
                },
                { // 特殊需求的组件定制化封装
                    path: 'specialCustom',
                    name: 'specialCustom',
                    component: e => import('@/mardowns/IdePlatform/ErCiZuJianFengZhuang/specialCustom.md')    
                },
                /* ------------------------- 3 组件封装: 结束 ------------------------------ */

                /* ---------------------- 3 适配技术难点解析: 开始 -------------------------- */
                { // 动态数据采集问题处理
                    path: 'dynDataPress',
                    name: 'dynDataPress',
                    component: e => import('@/mardowns/IdePlatform/ShiPeiNanDianJieXi/dynamicDataProcessing.md')    
                },

                /* ---------------------- 3 适配技术难点解析: 结束 -------------------------- */
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


