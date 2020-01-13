import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: require('@/components/auth/login').default
    },
    {
      path: '/register',
      name: 'register',
      component: require('@/components/auth/register').default
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
