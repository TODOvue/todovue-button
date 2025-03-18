<template>
  <tv-button
    small
    rounded
    outlined
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
