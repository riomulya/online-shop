<template>
  <div class="w-full">
    <div class="grid w-full" v-if="amount">
      <div class="font-bold text-xl place-self-center p-3 m-1">
        Total Amount : $
        <span class="text-sky-600">{{ amount.toFixed(2) }} </span>
      </div>
      <ul class="place-self-center p-2 m-2">
        <li>
          <!-- <product-item></product-item> -->
        </li>
      </ul>
    </div>
    <base-dialog
      :show="!amount"
      title="Empty Cart Maybe Add Some"
      @close="goToProduct"
    >
      <div class="grid w-full p-2 m-2">
        <p class="place-self-center text-3xl">
          <router-link to="/product" class="text-sky-600 cursor-pointer"
            >Product In Market</router-link
          >
        </p>
      </div>
    </base-dialog>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
// import ProductItem from '@/components/product/ProductItem.vue';
const store = useStore();

const router = useRouter();
const cart = computed(() => {
  return store.getters['cart/cart'];
});

const amount = ref(0);
const cartArray = ref([]);

cart.value.forEach((el) => {
  const id = el.productId;
  const quantity = el.quantity;
  const addItem = { id: id, quantity: quantity, amount: el.amount };
  cartArray.value.push(addItem);
  amount.value += el.amount;
});

function goToProduct() {
  router.push('/product');
}

console.log(router, amount.value, 'cart Array : ', cartArray.value);
</script>
