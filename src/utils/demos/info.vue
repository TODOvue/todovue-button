<template>
  <tv-button
    info
    @click="clickHandler"
  >
    Info
  </tv-button>
</template>

<script setup>
import TvButton from '@todovue/tvbutton';

const clickHandler = () => {
  console.log('clicked');
};
</script>
