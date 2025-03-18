<template>
  <tv-button
    full
    warning
    rounded
    @click="clickHandler"
  >
    Press me
  </tv-button>
</template>

<script setup>
import TvButton from '@todovue/tvbutton';

const clickHandler = () => {
  console.log('clicked');
};
</script>
