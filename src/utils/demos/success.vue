<template>
  <tv-button isSuccess @click-button="clickHandler">
    Success
  </tv-button>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const TvButton = defineAsyncComponent(() => import('../../components/TvButton.vue'))

const clickHandler = () => {
  console.log("clicked");
}
</script>
