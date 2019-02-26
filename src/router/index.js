import Vue from 'vue'
import Router from 'vue-router'
import authorization from '@/components/authorization'
import dashboard from '@/components/dashboard'
import cats from '@/components/cats'
import dog from '@/components/dog'
import nba from '@/components/nba'
import show from '@/components/show'
import spacex from '@/components/spacex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/auth/',
      name: 'AUTHORIZATION',
      component: authorization
    },
    {
      path: '/dashboard/',
      name: 'DASHBOARD',
      component: dashboard
    },
    {
      path: '/cats/',
      name: 'CATS',
      component: cats
    },
    {
      path: '/dog/',
      name: 'DOG',
      component: dog
    },
    {
      path: '/nba/',
      name: 'NBA',
      component: nba
    },
    {
      path: '/show/',
      name: 'SHOW',
      component: show
    },
    {
      path: '/spacex/',
      name: 'SPACEX',
      component: spacex
    }
  ]
})
