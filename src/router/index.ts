import { createRouter, createWebHistory } from 'vue-router'

const AboutPage = () => import('@/pages/AboutPage.vue')
const FormPage = () => import('@/pages/FormPage.vue')
const ReviewPage = () => import('@/pages/ReviewPage.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'about', component: AboutPage },
    { path: '/form', name: 'form', component: FormPage },
    { path: '/review', name: 'review', component: ReviewPage },
  ],
})

export default router
