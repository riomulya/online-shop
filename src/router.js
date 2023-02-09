import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../src/components/pages/ProductList.vue';
import NotFound from '../src/components/pages/NotFound.vue';
import CartList from '../src/components/pages/CartList.vue';
import ThePayment from '../src/components/pages/ThePayment.vue';
import AddProduct from '../src/components/pages/AddProduct.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/product',
      component: ProductList,
      children: { path: ':id', component: '' },
    },
    { path: '/cart', component: CartList },
    { path: '/payment', component: ThePayment },
    { path: '/addProduct', component: AddProduct },
    { path: '/', redirect: '/product' },
    { path: '/:CatchAll(.*)', component: NotFound },
  ],
});

export default router;
