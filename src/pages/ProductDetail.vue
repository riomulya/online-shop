<template>
  <div>
    <img :src="image" :alt="title" />
    <div>{{ title }}</div>
    <div>{{ desc }}</div>
    <div>{{ price }}</div>
    <base-button v-if="reviewBtnVisible" link mode="base-btn" :to="reviewLink"
      >Product Review</base-button
    >
    <router-view></router-view>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const props = defineProps(['id']);
const route = useRoute();
const store = useStore();

let selectedProduct = null;
let reviewBtnVisible = true;

selectedProduct = store.getters['product/products'].find(
  (prod) => prod.id === props.id
);

console.log(props.id, selectedProduct);
const image = selectedProduct.image;
const title = selectedProduct.name;
const price = selectedProduct.price;
const desc = selectedProduct.desc;

const reviewLink = computed(() => {
  reviewBtnVisible = false;
  if (route.path.includes('review')) {
    reviewBtnVisible = false;
    return route.path;
  }
  return route.path + '/review';
});
</script>
