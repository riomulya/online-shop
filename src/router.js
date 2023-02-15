import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../src/pages/ProductList.vue';
import NotFound from '../src/pages/NotFound.vue';
import CartList from '../src/pages/CartList.vue';
import ThePayment from '../src/pages/ThePayment.vue';
import AddProduct from '../src/pages/AddProduct.vue';
import ProductDetail from '../src/pages/ProductDetail.vue';
import ReviewList from '../src/pages/ReviewList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/product',
      component: ProductList,
    },
    {
      path: '/product/:id',
      component: ProductDetail,
      props: true,
      children: [
        {
          path: 'review',
          component: ReviewList,
        },
      ],
    },
    { path: '/cart', component: CartList },
    { path: '/payment', component: ThePayment },
    { path: '/addProduct', component: AddProduct },
    { path: '/', redirect: '/product' },
    { path: '/:CatchAll(.*)', component: NotFound },
  ],
});

export default router;
