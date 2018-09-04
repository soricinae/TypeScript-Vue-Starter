import Vue from 'vue';
import Router from 'vue-router';
import PrivateComponent from '../components/Private.vue';
import PublicComponent from '../components/Public.vue';
import CallbackComponent from "../components/Callback.vue";
import { requireAuth } from '../../utils/auth';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Public',
      component: PublicComponent,
    },
    {
      path: '/private',
      name: 'Private',
      beforeEnter: requireAuth,
      component: PrivateComponent,
    },
    {
      path: '/callback',
      component: CallbackComponent,
    },
  ],
});