<template>
  <tv-button
    success
    @click="clickHandler"
  >
    Success
  </tv-button>
</template>

<script setup>
import TvButton from '@todovue/tvbutton';

const clickHandler = () => {
  console.log('clicked');
};
</script>
