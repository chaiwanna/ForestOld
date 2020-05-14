import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register'
import Login from '../views/Login'
import Information from "../views/Information"
import History from '../views/History'
import RegisterFrost from '../views/RegisterFrost'

Vue.use(VueRouter)

const routes = [
  {path: '/',name: 'home',component: Home},
  {path:'/register',name:'register',component:Register},
  {path:'/login',name:'login',component:Login},
  {path:'/information',name:'information',component:Information},
  {path:'/history',name:'history',component:History},
  {path:'/registerFrost',name:'registerFrost',component:RegisterFrost},

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
