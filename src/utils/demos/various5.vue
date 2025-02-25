<template>
  <tv-button
    rounded
    :customStyle="customStyle"
    @click="clickHandler"
  >
    Press me
  </tv-button>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue';

const TvButton = defineAsyncComponent(() => import('../../components/TvButton.vue'));

const customStyle = ref({
  backgroundColor: '#1144b3',
  color: '#fff',
});

const clickHandler = () => {
  console.log('clicked');
};
</script>
