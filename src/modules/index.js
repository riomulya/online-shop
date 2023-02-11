import { createStore } from 'vuex';
import productModule from '../modules/product/index.js';
import cartModule from '@/modules/cart/index.js';

const store = createStore({
  modules: {
    product: productModule,
    cart: cartModule,
  },
  state() {
    return {};
  },
});

export default store;
