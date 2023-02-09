<template>
  <div class="w-full">
    <the-header></the-header>
    <div class="w-full top-20 flex scroll-smooth">
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import TheHeader from './components/UI/TheHeader.vue';
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
