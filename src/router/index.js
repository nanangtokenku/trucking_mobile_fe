import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),  
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/add-income',
    name: 'AddIncome',
    component: () => import('../views/AddIncome.vue'),
  },
  {
    path: '/add-outcome',
    name: 'AddOutcome',
    component: () => import('../views/AddOutcome.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, _from, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));
  if (to.name !== 'Login' && to.name !== 'Register' && !isAuthenticated) {
    next('/login')
  } else if (to.name === 'Login' && isAuthenticated) {
    next('/')
  } else {
    next()
  }
})
export default router
