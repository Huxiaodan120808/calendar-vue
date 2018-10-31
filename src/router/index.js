import Vue from 'vue'
import Router from 'vue-router'
import selectRoom from '../components/selectRoom'
import occupyRoom from '../components/occupyRoom'
import home from '../home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/selectRoom',
      name: 'selectRoom',
      component: selectRoom
    }, {
      path: '/occupyRoom',
      name: 'occupyRoom',
      component: occupyRoom
    }
  ]
})
