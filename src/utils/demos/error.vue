<template>
  <tv-button isError @click-button="clickHandler">
    Error
  </tv-button>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const TvButton = defineAsyncComponent(() => import('../../components/TvButton.vue'))

const clickHandler = () => {
  console.log("clicked");
}
</script>
