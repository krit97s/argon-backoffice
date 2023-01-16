import { componentsPlugin } from 'bootstrap-vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from "../store/"
Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  mode: "history",
  routes, // short for routes: routes
  linkActiveClass: 'active',
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token")
  if (!token && to.fullPath !== '/login') {
    router.push('/login')
  } else if (token && to.fullPath == '/login') {
    router.push('/')
  } else {
    next()
  }
});


export default router;
