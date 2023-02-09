<template>
  <div
    class="hover:animate-pulse h-56 hover:shadow-2xl hover:bg-zinc-200 shadow-lg rounded-lg bg-neutral-100 text-start hover:cursor-pointer border-4 ring-2 ring-slate-400 hover:ring-4 hover:ring-sky-300"
  >
    <img :src="image" :alt="title" class="h-40 w-full rounded-t-lg" />
    <div class="font-semibold font-mono">{{ customTitle }}</div>
    <!-- <div class="">{{ desc }}</div> -->
    <div class="font-bold hover:cursor-pointer">
      $ <span class="text-sky-600">{{ price }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
const props = defineProps(['image', 'title', 'price']);

const customTitle = computed(() => {
  return props.title.charAt(0).toUpperCase() + props.title.slice(1);
});
</script>
