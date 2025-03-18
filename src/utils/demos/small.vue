<template>
  <tv-button
    small
    @click="clickHandler"
  >
    Small
  </tv-button>
</template>

<script setup>
import TvButton from '@todovue/tvbutton';

const clickHandler = () => {
  console.log('clicked');
};
</script>
