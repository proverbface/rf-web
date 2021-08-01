import VueRouter from 'vue-router';
import routes from './routes';

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes, // short for routes: routes
  linkExactActiveClass: 'nav-item active',
});

export default router;
