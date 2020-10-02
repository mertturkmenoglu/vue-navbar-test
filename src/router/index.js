import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Search from '@/components/Search'
import Messages from '@/components/Messages'
import Notifications from '@/components/Notifications'
import Friends from '@/components/Friends'
import Profile from '@/components/Profile'
import Options from '@/components/Options'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications
  },
  {
    path: '/friends',
    name: 'Friends',
    component: Friends
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/options',
    name: 'Options',
    component: Options
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
