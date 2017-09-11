import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Linked from '@/components/Linked'
import Me from '@/components/Me'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Linked',
      name: 'Linked',
      component: Linked
    },
    {
      path: '/Me',
      name: 'Me',
      component: Me
    },
  ]
})
