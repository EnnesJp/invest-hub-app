import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: () => import('../layouts/GuestLayout.vue'),
      children: [
        {
          path: '',
          name: 'login',
          component: () => import('../views/auth/LoginView.vue'),
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('../views/auth/RegisterView.vue'),
        },
      ]
    },
    {
      path: '',
      component: () => import('../layouts/AuthenticatedLayout.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('../views/DashboardView.vue'),
        },
        {
          path: '/wallet',
          name: 'wallet',
          component: () => import('../views/WalletView.vue'),
        },
        {
          path: '/transactions',
          name: 'transactions',
          component: () => import('../views/TransactionsView.vue'),
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import('../views/ProfileView.vue'),
        },
        {
          path: '/settings',
          name: 'settings',
          component: () => import('../views/SettingsView.vue'),
        },
        {
          path: '/help',
          name: 'help',
          component: () => import('../views/HelpView.vue'),
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    }
  ]
})

router.beforeEach((to, from, next) => {
  const store = useAuthStore()
  store.checkAuth()

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !store.isAuthenticated
  ) {
    next({
      name: 'login',
      query: { next: to.fullPath },
    })
  } else {
    next()
  }
})

export default router
