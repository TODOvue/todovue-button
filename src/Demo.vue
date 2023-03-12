<template>
  <tv-demo>
    <h2 class="title">TODOvue Button</h2>
    <div v-for="(demo, index) in demos" :key="`demo-${index}`" class="demo">
      <h2>{{ demo.title }}</h2>
      <tv-button
        :is-small="demo.buttonProps.isSmall"
        :is-large="demo.buttonProps.isLarge"
        :is-rounded="demo.buttonProps.isRounded"
        :is-outlined="demo.buttonProps.isOutlined"
        :is-success="demo.buttonProps.isSuccess"
        :icon="demo.buttonProps.icon"
        :is-full="demo.buttonProps.isFull"
      >
        {{ demo.buttonText }}
      </tv-button>
    </div>
  </tv-demo>
</template>

<script>
import TvButton from "@/component/TvButton.vue";
import TvDemo from "todovue-demo";
export default {
  name: "DemoButton",
  data() {
    return {
      demos: [
        {
          title: "TvButton Small",
          buttonProps: { isSmall: true },
          buttonText: "Press me",
        },
        {
          title: "TvButton Default",
          buttonProps: {},
          buttonText: "Press me",
        },
        {
          title: "TvButton Large",
          buttonProps: { isLarge: true },
          buttonText: "Press me",
        },
        {
          title: "TvButton Rounded",
          buttonProps: { isRounded: true },
          buttonText: "Press me",
        },
        {
          title: "TvButton Outlined",
          buttonProps: { isOutlined: true },
          buttonText: "Press me",
        },
        {
          title: "TvButton Success",
          buttonProps: { isSuccess: true },
          buttonText: "Press me",
        },
        {
          title: "TvButton Icon (Add)",
          buttonProps: { icon: "add", isSuccess: true },
          buttonText: "Press me",
        },
        {
          title: "TvButton Icon (remove)",
          buttonProps: { icon: "remove" },
          buttonText: "Press me",
        },
        {
          title: "TvButton Full",
          buttonProps: { isFull: true },
          buttonText: "Press me",
        },
      ],
    };
  },
  components: {
    TvDemo,
    TvButton,
  },
};
</script>

<style lang="scss"></style>
