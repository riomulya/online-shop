<template>
  <div class="border-[3px] border-sky-200 rounded-lg m-3 p-3">
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
