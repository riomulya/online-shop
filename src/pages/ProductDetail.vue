<template>
  <div>
    <div class="grid grid-cols-2 mt-10 w-full">
      <div
        class="border-2 ring-slate-400 ring-2 shadow rounded-lg text-center mx-11 w-full"
      >
        <img
          :src="image"
          :alt="title"
          class="bg-clip-border rounded-t-lg h-96 w-full"
        />
        <div class="font-bold font-serif">{{ title }}</div>
        <div>{{ desc }}</div>
        <div class="font-bold">
          $
          <p class="hover:cursor-pointer text-sky-600 inline">
            {{ priceProd }}
          </p>
        </div>
        <!-- <base-button
          mode="flex w-full grid-cols-none place-items-start items-start"
          @click="addCart"
        > -->
        <div class="flex w-full grid-cols-none place-items-start items-start">
          <div>
            <input
              type="number"
              name="productSum"
              id="productSum"
              class="rounded-xl w-1/6 border-2 ring-2 ring-sky-200 ml-0 mr-3"
              min="1"
              v-model="countProduct"
            />
            <p class="inline w-full cursor-pointer">Add to Cart</p>
          </div>
        </div>
        <!-- </base-button> -->
      </div>
      <router-view class="mx-16"></router-view>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue';
import { useStore } from 'vuex';
import useCustomText from '@/script/customText';

const props = defineProps(['id']);
const store = useStore();

const countProduct = ref(1);
let selectedProduct = null;

selectedProduct = store.getters['product/products'].find(
  (prod) => prod.id === props.id
);

const image = selectedProduct.image;
let title = selectedProduct.name;
const price = selectedProduct.price;
const priceProd = ref(price);
const desc = selectedProduct.desc;

watch(countProduct, (newVal) => {
  priceProd.value = +(price * newVal).toFixed(2);
});

title = useCustomText().toCapitalize(title);
// function addCart() {
//   showDialog.value = true;
// }
</script>
