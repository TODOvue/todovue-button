<template>
  <tv-button
    buttonText="Default Props"
    @click="clickHandler"
  />
</template>

<script setup>
import TvButton from '@todovue/tvbutton';

const clickHandler = () => {
  console.log('clicked');
};
</script>
