<template>
  <tv-button
    full
    @click="clickHandler"
  >
    Full
  </tv-button>
</template>

<script setup>
import TvButton from '@todovue/tvbutton';

const clickHandler = () => {
  console.log('clicked');
};
</script>
