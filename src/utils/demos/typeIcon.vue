<template>
  <tv-button
    icon="help"
    type="icon"
    @click="clickHandler"
  />
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const TvButton = defineAsyncComponent(() => import('../../components/TvButton.vue'));

const clickHandler = () => {
  console.log('clicked');
};
</script>
