<template>
  <tv-demo :component="component" :variants="demos"></tv-demo>
</template>

<script>
import { shallowRef } from "vue";
import TvButton from "@/component/TvButton.vue";
import { demos } from "@/utils/mocks.js";

export default {
  name: "DemoButton",
  setup() {
    const component = shallowRef(TvButton);

    return {
      component,
      demos,
    };
  },
};
</script>

<style></style>
