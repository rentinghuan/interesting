import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Type from '@/components/Type'
import Buy from '@/components/Buy'
import Addshop from '@/components/Addshop'



Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/type',
      name: 'Type',
      component: Type,
      children:[
        {
          path:'/type/buy/:buyid',
          component:Buy,
          props:true
        },
        {
          path:'/type/addshop',
          name:'Addshop',
          component:Addshop
        }
      ]
    }
  ]
})
