// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入store状态管理
import store from './store';

// 第三方axios请求插件
import axios from './http'
Vue.prototype.$axios = axios;

// 引入iView------全局引用
import iView from 'iview';
import 'iview/dist/styles/iview.css';


// 引用base.css
import '@/assets/css/Reset.css';



Vue.use(iView);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store, // 注册全局store：可将store实例注入所有的子组件
    components: { App },
    template: '<App/>'
})
