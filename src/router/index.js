import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Project from '../views/Project.vue'
import WorkHistory from '../views/WorkHistory.vue'
import Contact from '../views/Contact.vue'
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Project',
    name: 'Project',
    component: Project
  },
  {
    path: '/WorkHistory',
    name: 'WorkHistory',
    component: WorkHistory
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  routes
})

export default router
