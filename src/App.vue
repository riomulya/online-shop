<template>
  <div class="bg-[#A5AEB5] bg-opacity-25 h-screen">
    <the-header></the-header>
    <div class="max-w-screen-2xl top-20 flex scroll-smooth max-h-screen">
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import TheHeader from './components/layout/TheHeader.vue';
// import { useStore } from 'vuex';
// import { computed } from 'vue';
</script>

<style scoped>
.route-enter-from,
.route-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.route-enter-active {
  transition: all 0.3s ease-in;
}

.route-leave-active {
  transition: all 0.3s ease-out;
}
</style>
