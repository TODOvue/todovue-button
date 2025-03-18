<template>
  <tv-button
    icon="help"
    type="icon"
    @click="clickHandler"
  />
</template>

<script setup>
import TvButton from '@todovue/tvbutton';

const clickHandler = () => {
  console.log('clicked');
};
</script>
