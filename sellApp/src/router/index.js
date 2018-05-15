import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/components/goods/goods'
import rating from '@/components/rating/rating'
import sellers from '@/components/sellers/sellers'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path:'/goods',
      component:goods
    },
    {
      path:'/rating',
      component:rating
    },
    {
      path:'/sellers',
      component:sellers
    }
  ]
})
