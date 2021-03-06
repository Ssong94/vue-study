import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView //
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 화면을 눌렀을 때 그때 페이지를 가져옴
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // webpackPrefetch를 쓰게 되면 캐시에 저장한 후 눌렀을 때 캐시에 저장된 걸 보여준다.
    // component: () => import(/* webpackChunkName: "about", webpackPrefetch: true */ '../views/AboutView.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: () => import(/* webpackChunkName: "DataBindingStringView" */ '../views/DataBindingStringView.vue')
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtmlView',
    component: () => import(/* webpackChunkName: "DataBindingStringView" */ '../views/DataBindingHtmlView.vue')
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInputView',
    component: () => import(/* webpackChunkName: "DataBindingStringView" */ '../views/DataBindingInputView.vue')
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelectView',
    component: () => import(/* webpackChunkName: "DataBindingStringView" */ '../views/DataBindingSelectView.vue')
  },
  {
    path: '/databinding/attr',
    name: 'DataBindingAttrView',
    component: () => import(/* webpackChunkName: "DataBindingStringView" */ '../views/DataBindingAttrView.vue')
  },
  {
    path: '/change',
    name: 'EventChangeView',
    component: () => import(/* webpackChunkName: "DataBindingStringView" */ '../views/EventChangeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
