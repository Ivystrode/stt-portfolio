import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/rnet',
    name: 'rnet',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RnetView.vue')
  },
  {
    path: '/homedashboard',
    name: 'homedashboard',
    component: () => import('../views/HomedashboardView.vue')
  },
  {
    path: '/scrapernlp',
    name: 'scrapernlp',
    component: () => import('../views/ScrapernlpView.vue')
  },
  {
    path: '/other',
    name: 'other',
    component: () => import('../views/OtherView.vue')
  },
  {
    path: '/peerfeedback',
    name: 'peerfeedback',
    component: () => import('../views/PeerFeedbackView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
