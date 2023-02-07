import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../src/components/pages/ProductList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: ProductList }],
});

export default router;
