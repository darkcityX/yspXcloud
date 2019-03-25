// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入iView------全局引用
import iView from 'iview';
import 'iview/dist/styles/iview.css';

// 引用base.css
import '@/assets/css/Reset.css';



Vue.use(iView);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
