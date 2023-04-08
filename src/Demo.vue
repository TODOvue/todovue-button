<template>
  <tv-demo :component="component" :variants="demos"></tv-demo>
</template>

<script>
import { defineComponent, shallowRef } from "vue";
import TvButton from "@/component/TvButton.vue";
import TvDemo from "todovue-demo";
import { demos } from "@/utils/mocks.js";

export default defineComponent({
  name: "DemoButton",
  setup() {
    const component = shallowRef(TvButton);

    return {
      component,
      demos,
    };
  },
  components: {
    TvDemo,
  },
});
</script>

<style lang="scss"></style>
