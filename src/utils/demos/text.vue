<template>
  <tv-button isText :customStyle="customStyle" @click-button="clickHandler">
    Text
  </tv-button>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const TvButton = defineAsyncComponent(() => import('../../components/TvButton.vue'))

const customStyle = {
  color: "#ffffff",
}

const clickHandler = () => {
  console.log("clicked");
}
</script>
