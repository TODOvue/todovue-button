<template>
  <button
    class="tv-btn"
    :class="{
      'tv-btn-rounded': isRounded,
      'tv-btn-full': isFull,
      'tv-btn-outlined': isOutlined,
      'tv-btn-small': isSmall,
      'tv-btn-large': isLarge,
      'tv-btn-success': isSuccess,
      'tv-btn-info': isInfo,
      'tv-btn-warning': isWarning,
      'tv-btn-error': isError,
      'tv-btn-disabled': isDisabled,
      'tv-btn-circle': isCircle,
      'tv-btn-text': isText,
    }"
    @click="handleClick"
  >
    <i
      v-if="icon"
      class="tv-btn-icon"
      :class="`tv-icon-${icon} tv-icon-position-${iconPosition}`"
    ></i>
    <slot v-if="!buttonText"></slot>
    <template v-if="buttonText">{{ buttonText }}</template>
  </button>
</template>

<script>
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
  },
  setup(_, { emit }) {
    const handleClick = () => {
      emit("click", {});
    };

    return {
      handleClick,
    };
  },
  emits: ["click"],
};
</script>

<style scoped></style>
