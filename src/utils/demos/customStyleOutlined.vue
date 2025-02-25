<template>
  <tv-button :customStyle="customStyle" is-outlined @click-button="clickHandler">
    Is outlined
  </tv-button>
</template>

<script setup>
import { ref } from "vue";
import { defineAsyncComponent } from 'vue'

const TvButton = defineAsyncComponent(() => import('../../components/TvButton.vue'))

const customStyle = ref({
  backgroundColor: "#5f31b7",
  color: "#fff", // The color will be used for the hover.
});

const clickHandler = () => {
  console.log("clicked");
}
</script>
