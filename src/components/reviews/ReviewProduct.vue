<template>
  <div
    class="border-[3px] border-sky-100 rounded-lg m-3 p-3 bg-stone-50 shadow-md"
  >
    <p>Name : {{ name }}</p>
    <span>Rating : </span>
    <p class="inline text-slate-900 font-bold">{{ rating }}</p>
    <span class="inline"> / 5</span>
    <p>Review : {{ opinion }}</p>
  </div>
</template>

<script setup>
import defineProps from 'vue';
defineProps(['name', 'rating', 'opinion']);
</script>
