<template>
  <tv-button isRounded :customStyle="customStyle">
    Press me
  </tv-button>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue'

const TvButton = defineAsyncComponent(() => import('../../components/TvButton.vue'))

const customStyle = ref({
  backgroundColor: "#1144b3",
  color: "#ffffff",
});

const clickHandler = () => {
  console.log("clicked");
}
</script>
