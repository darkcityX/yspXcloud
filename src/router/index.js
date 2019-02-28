import Vue from 'vue'
import Router from 'vue-router'




// 1、指南页面
import GuideIndex from '@/components/GuideIndex_1';

// 2、IDE平台解决方案
import HelloWorld from '@/components/HelloWorld';

// 3、教程

// 4、社区

// 5、相关技术


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path: '/GuideIndex',
        name: 'GuideIndex',
        component: GuideIndex       
    }
  ]
})
