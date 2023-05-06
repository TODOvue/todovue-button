<template>
  <button
    :class="buttonClasses"
    :disabled="isDisabled"
    @click="handleClick"
    @mouseleave="manageHover(false)"
    @mouseover="manageHover(true)"
    :style="[
      buttonStyleCustom.backgroundColor,
      buttonStyleCustom.color,
      isHover ? buttonStyleHover : '',
    ]"
    class="tv-btn"
    role="button"
    type="button"
  >
    <i
      v-if="icon"
      class="tv-btn-icon"
      :class="`tv-icon-${icon} tv-icon-position-${iconPosition}`"
    ></i>
    <template v-if="buttonText">{{ buttonText }}</template>
    <slot v-else></slot>
  </button>
</template>

<script>
import useButton from "@/composable/useButton";

export default {
  name: "TvButton",
  props: {
    isRounded: {
      type: Boolean,
      default: false,
    },
    isFull: {
      type: Boolean,
      default: false,
    },
    isOutlined: {
      type: Boolean,
      default: false,
    },
    isSmall: {
      type: Boolean,
      default: false,
    },
    isLarge: {
      type: Boolean,
      default: false,
    },
    isSuccess: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    isInfo: {
      type: Boolean,
      default: false,
    },
    isWarning: {
      type: Boolean,
      default: false,
    },
    isError: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isCircle: {
      type: Boolean,
      default: false,
    },
    isText: {
      type: Boolean,
      default: false,
    },
    buttonText: {
      type: String,
      default: "",
    },
    iconPosition: {
      type: String,
      default: "right",
    },
    customStyle: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const {
      isHover,
      handleClick,
      manageHover,
      buttonClasses,
      buttonStyleCustom,
      buttonStyleHover,
    } = useButton(props);

    return {
      isHover,
      handleClick,
      manageHover,
      buttonClasses,
      buttonStyleCustom,
      buttonStyleHover,
    };
  },
  emits: ["clickButton"],
};
</script>

<style scoped lang="scss" src="../assets/scss/style.scss"></style>
