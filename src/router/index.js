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
      path: '/mentors',
      name: 'mentors.list',
      component: () => import('@/views/MentorListView/MentorListView.vue')
    },
    {
      path: '/mentors/:id',
      name: 'mentors.details',
      component: () => import('@/views/MentorDetailsView/MentorDetailsView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView/LoginView.vue')
    },
    {
      path: '/sign-up',
      name: 'signup',
      component: () => import('@/views/SignupView/SignUpView.vue')
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import('../views/Payment.vue')
    },
    {
      path: '/success',
      name: 'success',
      component: () => import('../views/Paymentsuccess.vue')
    },
    {
      path: '/fav',
      name: 'fav',
      component: () => import('../views/Favmentor.vue')
    },
    {
      path: '/sessions',
      name: 'sessions',
      component: () => import('../views/SessionManagement/SessionList.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('../views/PurchaseHistory.vue')
    }
  ]
})

export default router
