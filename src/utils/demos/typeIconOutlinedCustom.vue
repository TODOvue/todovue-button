<template>
  <tv-button
    icon="edit"
    type="icon"
    outlined
    :customStyle="customStyle"
    @click-button="clickHandler"
  />
</template>

<script setup>
import { ref } from 'vue';
import TvButton from '@todovue/tvbutton';

const customStyle = ref({
  backgroundColor: '#5f31b7',
  color: '#fff', // The color will be used for the hover.
});

const clickHandler = () => {
  console.log('clicked');
};
</script>
