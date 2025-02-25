<template>
  <tv-button
    icon="edit"
    @click="clickHandler"
  >
    Icon
  </tv-button>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const TvButton = defineAsyncComponent(() => import('../../components/TvButton.vue'));

const clickHandler = () => {
  console.log('clicked');
};
</script>
