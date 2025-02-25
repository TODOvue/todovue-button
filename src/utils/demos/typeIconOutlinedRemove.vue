<template>
  <tv-button icon="remove" type="icon" outlined @click-button="clickHandler" />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const TvButton = defineAsyncComponent(() => import('../../components/TvButton.vue'))

const clickHandler = () => {
  console.log("clicked");
}
</script>
