<template>
  <div>
    <p class="font-bold">Review Product {{ titleProd }}</p>
    <ul v-if="hasReviewed > 0">
      <li>
        <review-product
          v-for="rev in selectedReviews"
          :key="rev.id"
          :name="rev.name"
          :rating="rev.rating"
          :opinion="rev.opinion"
        >
        </review-product>
      </li>
    </ul>
    <p class="font-bold text-red-600" v-else>This Product has no reviews</p>
  </div>
</template>

<script setup>
import ReviewProduct from '@/components/reviews/ReviewProduct.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
const route = useRoute();
const store = useStore();
const idProd = route.params.id;

const reviews = computed(() => {
  return store.getters['product/reviews'];
});

const selectedReviews = reviews.value.filter(
  (prod) => prod.idProduct === idProd
);

const selectedProduct = store.getters['product/products'].find(
  (prod) => prod.id === idProd
);
const titleProd = selectedProduct.name;
const hasReviewed = selectedReviews.length;
console.log(route.params.id);
console.log(hasReviewed);
console.log(titleProd.name);
</script>
