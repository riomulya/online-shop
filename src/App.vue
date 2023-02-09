<template>
  <div class="container w-full">
    <the-header></the-header>
    <div class="w-full top-20 flex scroll-smooth">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import TheHeader from './components/UI/TheHeader.vue';
// import { useStore } from 'vuex';
// import { computed } from 'vue';
</script>
