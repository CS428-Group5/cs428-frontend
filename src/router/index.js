import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BaseView from '@/views/BaseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/',
      component: BaseView,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: '/mentors',
          name: 'mentors.list',
          component: () => import('@/views/MentorListView/MentorListView.vue')
        },
        {
          path: '/mentors/:mentor_id',
          name: 'mentors.details',
          component: () => import('@/views/MentorDetailsView/MentorDetailsView.vue')
        },
        {
          path: '/users/:id',
          name: 'users',
          component: () => import('@/views/UserProfileView/UserProfileView.vue')
        },
        {
          path: '/payment',
          name: 'payment',
          component: () => import('@/views/Payment/Payment.vue')
        },
        {
          path: '/payment_return',
          name: 'success',
          component: () => import('@/views/Payment/PaymentReturn.vue')
        },
        {
          path: '/fav',
          name: 'fav',
          component: () => import('../views/Favmentor.vue')
        },
        {
          path: '/session/:mentor_id/add-session',
          name: 'mentor.addSession',
          component: () => import('../views/SessionManagement/AddSession.vue')
        },
        {
          path: '/session/:mentor_id/choose-session',
          name: 'mentee.chooseSession',
          component: () => import('../views/SessionManagement/ChooseSession.vue')
        },
        {
          path: '/history',
          name: 'history',
          component: () => import('../views/PurchaseHistoryView/PurchaseHistory.vue')
        },
        {
          path: '/manage-booking',
          name: 'manage.booking',
          component: () => import('../views/BookingManagement/BookingManagement.vue')
        }
      ]
    }
  ]
})

export default router
