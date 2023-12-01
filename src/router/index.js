// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/input-kartu-bimbingan',
    component: () => import('@/views/InputKartuBimbingan.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
