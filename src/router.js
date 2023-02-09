import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../src/components/pages/ProductList.vue';
import NotFound from '../src/components/pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/product', component: ProductList },
    { path: '/', redirect: '/product' },
    { path: '/:CatchAll(.*)', component: NotFound },
  ],
});

export default router;
