<script setup>
import { defineAsyncComponent } from 'vue'
import TvDemo from '@todovue/tvdemo'
import { demos } from "../utils/mocks.js";

const TvButton = defineAsyncComponent(/* webpackChunkName: "TvButton" */() => import('../components/TvButton.vue'))

</script>

<template>
  <tv-demo
    :component="TvButton"
    :variants="demos"
    nameComponent="TvButton"
    npmInstall="@todovue/tvbuttoon"
    sourceLink="https://github.com/TODOvue/todovue-button"
    urlClone="https://github.com/TODOvue/todovue-button.git"
  ></tv-demo>
</template>

<style scoped>

</style>
