import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/gayButton',
  },
  {
    path: '/gayButton',
    name: 'gayButton',
    component: () => import('@/views/gayButton.vue'),
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
