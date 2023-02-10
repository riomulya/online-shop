<template>
  <div class="grid grid-cols-2">
    <div
      class="border-2 ring-slate-400 ring-2 shadow rounded-lg text-center max-h-screen"
    >
      <img
        :src="image"
        :alt="title"
        class="bg-clip-border rounded-t-lg h-96 w-full object-cover"
      />
      <div class="font-bold font-serif">{{ title }}</div>
      <div>{{ desc }}</div>
      <div>{{ price }}</div>
    </div>
    <router-view class="text-center w-full"></router-view>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useStore } from 'vuex';
import useCustomText from '@/script/customText';

const props = defineProps(['id']);
const store = useStore();

localStorage.setItem('reviewBtnVisible', true);
let selectedProduct = null;

selectedProduct = store.getters['product/products'].find(
  (prod) => prod.id === props.id
);

const image = selectedProduct.image;
let title = selectedProduct.name;
const price = selectedProduct.price;
const desc = selectedProduct.desc;

title = useCustomText().toCapitalize(title);
</script>
