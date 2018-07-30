import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@components/Index.vue'
import list from '@components/List'
import sublist1 from '@/components/sublist1'
import sublist2 from '@/components/sublist2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Index',
      name: 'HelloWorld',
      component: index
    },{
      path: '/List',
      name: 'HelloWorld',
      component: list,
      children:[
        {
          path: '/List/sublist1',
          component: sublist1
        },
        {
          path: '/List/sublist2',
          component: sublist2
        }
      ]
    }
  ]
})
