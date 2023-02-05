import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsAnnouncement.vue')
    },
    {
      path: '/listofsubjects',
      name: '/listofsubjects',
      component: () => import('../views/ListOfSubjects.vue')
    },
    {
      path: '/addwithdrawcourses',
      name: '/addwithdrawcourses',
      component: () => import('../views/AddWithdrawCourses.vue')
    },
  ]
})

export default router
