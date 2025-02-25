<template>
  <tv-button
    text
    :customStyle="customStyle"
    @click="clickHandler"
  >
    Text
  </tv-button>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue';

const TvButton = defineAsyncComponent(() => import('../../components/TvButton.vue'));

const customStyle = ref({
  color: "#ffffff",
});

const clickHandler = () => {
  console.log('clicked');
};
</script>
