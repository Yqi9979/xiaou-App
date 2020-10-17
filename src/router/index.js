import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const login = () => Promise.resolve(import("../pages/login"))
const register = () => Promise.resolve(import("../pages/register"))
const index = () => Promise.resolve(import("../pages/index"))
const home = () => Promise.resolve(import("../pages/home"))
const classfiy = () => Promise.resolve(import("../pages/classfiy.vue"))

const order = () => Promise.resolve(import("../pages/order"))
// const mine = () => Promise.resolve(import("../pages/mine"))
const mine = () => Promise.resolve(import("../pages/m"))
const detail = () => Promise.resolve(import("../pages/detail"))
const list = () => Promise.resolve(import("../pages/list"))
const sku = () => Promise.resolve(import("../pages/sku"))



export default new Router({
  routes: [
    {
      path: '/login',
      component: login,
      name:'登录'
    },
    {
      path: '/register',
      component: register,
      name:'注册'
    },
    {
      path: '/index',
      component: index,
      children: [
        { path: "home", component: home, name: "首页" },
        { path: 'classfiy', component: classfiy, name: '分类'},
        { path: "order", component: order, name: "购物车" },
        { path: "mine", component: mine, name: "个人中心" },
        { path: "", redirect: "home" }
      ],
      
    },
    {
      path: "/detail/:id",
      component: detail,
      name: "商品详情",
     
    },
    {
      path: '/list/:id/:name',
      component: list,
    },
    {
      path: '/sku',
      component:sku,
    },
    {
      path: '*',
      redirect:'/login'
    }
  ]
})
