<template>
  <tv-button
    rounded
    @click="clickHandler"
  >
    Rounded
  </tv-button>
</template>

<script setup>
import TvButton from '@todovue/tvbutton';

const clickHandler = () => {
  console.log('clicked');
};
</script>
