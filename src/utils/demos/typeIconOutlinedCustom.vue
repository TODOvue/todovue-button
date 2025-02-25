<template>
  <tv-button
    icon="edit"
    type="icon"
    outlined
    :customStyle="customStyle"
    @click-button="clickHandler"
  />
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue'

const TvButton = defineAsyncComponent(() => import('../../components/TvButton.vue'))

const customStyle = ref({
  backgroundColor: "#5f31b7",
  color: "#fff", // The color will be used for the hover.
});

const clickHandler = () => {
  console.log("clicked");
}
</script>
