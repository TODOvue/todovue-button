<template>
  <tv-button
    large
    @click="clickHandler"
  >
    Large
  </tv-button>
</template>

<script setup>
import TvButton from '@todovue/tvbutton';

const clickHandler = () => {
  console.log('clicked');
};
</script>
