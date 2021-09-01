import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/:current*',
    props: true,
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/service/:current',
    name: 'ServicePage',
    props: true,
    component: () => import('@/views/ServicePage.vue')
  },
  {
    path: '/photo_gallery',
    name: 'PhotoGallery',
    component: () => import('@/views/PhotoGallery.vue')
  },
  {
    path: '/watch_online',
    name: 'WatchOnline',
    component: () => import('@/views/WatchOnline.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { el: to.hash }
    } else {
      return { top: 0 }
    }
  },
  routes
})

export default router
