import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

//e => import('@/views/Launch.vue')

const router =  new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect : "/guideIndex",
            component: e => import('@/components/GuideIndex')
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
// router.beforeEach((to, from, next) => {
//     console.log( "------------- 1 --------------------" );
//     console.log( to );

//     console.log( "------------- 2 --------------------" );
//     console.log( from );

//     if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//         if(JSON.parse(localStorage.getItem('islogin'))){ //判断本地是否存在access_token
//             next();
//         }else {
//             next({
//             path:'/login'
//             })
//         }
//     }
//     else {
//         next();
//     }
//     /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
//     if(to.fullPath == "/login"){
//         if(JSON.parse(localStorage.getItem('islogin'))){
//             next({
//                 path:from.fullPath
//             });
//         }else {
//             next();
//         }
//     }

// });


export default router;


