<template>
  <div class="grid grid-cols-2 mt-10 w-full justify-self-center">
    <base-dialog
      :show="showDialog"
      @close="closeDialog"
      title="Confirm Your Order to Checkout?"
    >
      <div class="flex justify-between">
        <span>
          <base-button
            class="rounded-xl hover:ring-2 hover:ring-gray-600 hover:bg-transparent hover:text-black bg-slate-500 text-white p-2"
            @click="confirmOrder"
            >Confirm</base-button
          >
        </span>
        <span>
          <base-button
            @click="cancelOrder"
            class="inline rounded-xl hover:ring-2 hover:ring-red-600 hover:bg-transparent hover:text-black bg-red-500 text-white p-2"
            >Not Sure</base-button
          >
        </span>
      </div>
    </base-dialog>
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
      <div
        class="flex w-full grid-cols-none place-items-start items-start my-2 mx-0"
      >
        <div>
          <input
            type="number"
            name="productSum"
            id="productSum"
            class="rounded-xl w-1/6 border-2 ring-2 ring-sky-200 ml-0 mr-3"
            min="1"
            v-model="countProduct"
            @keyup.enter="addCart"
          />
          <p
            class="inline w-full cursor-pointer hover:bg-white hover:rounded-lg hover:border-2 hover:border-sky-200 p-1 m-2 hover:font-mono hover:font-bold"
            @click="addCart"
          >
            Add to Cart
          </p>
        </div>
      </div>
    </div>
    <router-view class="mx-16"></router-view>
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
const showDialog = ref(false);

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
function addCart() {
  showDialog.value = true;
}

function closeDialog() {
  showDialog.value = false;
}

function cancelOrder() {
  closeDialog();
}

function confirmOrder() {
  closeDialog();
  store.dispatch('cart/addProduct', {
    productId: selectedProduct.id,
    price: selectedProduct.price,
    image: selectedProduct.image,
    name: selectedProduct.name,
    quantity: countProduct.value,
    amount: priceProd.value,
  });
  console.log(store.getters['cart/cart']);
}
console.log(selectedProduct.id);
console.log(store.getters['cart/cart']);
</script>
