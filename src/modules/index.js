import { createStore } from 'vuex';
import productModule from '../modules/product/index.js';

const store = createStore({
  modules: {
    product: productModule,
  },
});

export default store;
