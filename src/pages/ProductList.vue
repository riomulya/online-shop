<template>
  <div class="grid grid-cols-4 w-full p-5 justify-evenly bg-slate-200">
    <product-item
      v-for="prod in products"
      :key="prod.id"
      :id="prod.id"
      :price="prod.price"
      :title="prod.name"
      :image="prod.image"
    ></product-item>
  </div>
</template>

<script setup>
import ProductItem from '../components/product/ProductItem.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const products = computed(() => {
  return store.getters['product/products'];
});
</script>
