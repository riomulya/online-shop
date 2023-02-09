<template>
  <div class="grid grid-cols-4 w-full p-5 justify-evenly bg-slate-200">
    <the-card
      class="mt-10 mx-5"
      v-for="prod in products"
      :key="prod.id"
      :image="prod.image"
      :title="prod.name"
      :price="prod.price"
      :desc="prod.desc"
    ></the-card>
  </div>
</template>

<script setup>
import TheCard from '../layout/TheCard.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const products = computed(() => {
  return store.getters['product/products'];
});
</script>
