<template>
  <div>
    <base-dialog :show="showDialog" @close="closeDialog" :title="title">
      <ProductItem
        :image="image"
        :title="title"
        :id="props.id"
        :price="price"
      ></ProductItem>
      <base-button class="bg-sky-300 p-3 rounded-xl" @click="closeDialog"
        >Add</base-button
      >
    </base-dialog>
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
        <div>{{ price }}</div>
        <base-button
          mode="flex w-full grid-cols-none place-items-start items-end"
          @click="addCart"
        >
          <div>
            <span class="material-symbols-outlined mx-2"> add_circle </span>
            <p class="inline w-full">Add to Cart</p>
          </div>
        </base-button>
      </div>
      <router-view class="ml-20"></router-view>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import { useStore } from 'vuex';
import useCustomText from '@/script/customText';
import ProductItem from '@/components/product/ProductItem.vue';

const props = defineProps(['id']);
const store = useStore();
let showDialog = ref(false);

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
function addCart() {
  showDialog.value = true;
}

function closeDialog() {
  showDialog.value = false;
}
</script>
