<template>
  <tv-button
    outlined
    @click="clickHandler"
  >
    Outlined
  </tv-button>
</template>

<script setup>
import TvButton from '@todovue/tvbutton';

const clickHandler = () => {
  console.log('clicked');
};
</script>
