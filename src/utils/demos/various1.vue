<template>
  <tv-button
    small
    rounded
    outlined
    @click="clickHandler"
  >
    Press me
  </tv-button>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const TvButton = defineAsyncComponent(() => import('../../components/TvButton.vue'));

const clickHandler = () => {
  console.log('clicked');
};
</script>
