import NotFound from '@/pages/NotFound.vue';
import Code from '@/pages/code/index.vue';
import Public from '@/pages/public/index.vue';
import store from '@/store';

const routes = [
  {
    path: '/check',
    component: Code,
    name: 'code',
  },
  {
    path: '/public/:orgId/:interactionId',
    component: Public,
    name: 'public',
  },
  {
    path: '*',
    component: NotFound,
    beforeEnter: (to: any, from: any, next: any) => {
      const code = to.path.slice(1);
      if (code.split('.').length === 3) {
        store.dispatch('core/setCode', code);

        setTimeout(() => {
          next({
            name: 'code',
            replace: true,
          });
        }, 1000);
      } else {
        next();
      }
    },
  },
];

export default routes;
