import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

//e => import('@/views/Launch.vue')

const router =  new Router({
    routes: [
        {
            path: '/',
            name: 'root',
            component: e => import('@/components/GuideIndex')
        },
        { // 指南
            path: '/GuideIndex',
            name: 'GuideIndex',
            component: e => import('@/components/GuideIndex') 
        },
        { // IDE平台
            path: '/IdePlatform',
            name: 'IdePlatform',
            component: e => import('@/components/IdePlatform')
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


