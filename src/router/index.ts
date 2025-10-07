import { createRouter, createWebHistory } from 'vue-router'

const FormPage = () => import('@/pages/FormPage.vue')
const ReviewPage = () => import('@/pages/ReviewPage.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'form', component: FormPage },
    { path: '/review', name: 'review', component: ReviewPage },
  ],
})

export default router
