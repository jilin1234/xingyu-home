import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResourcesView from '../views/ResourcesView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: '星语家园' } },
    { path: '/resources', name: 'resources', component: ResourcesView, meta: { title: '家庭训练视频墙' } },
    { path: '/about', name: 'about', component: AboutView, meta: { title: '关于与免责' } },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

router.afterEach((to) => {
  const base = '星语家园'
  document.title = to.meta.title ? `${to.meta.title} · ${base}` : base
})

export default router
