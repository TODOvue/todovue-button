<script setup>
import { computed } from 'vue';
import useButton from '../composables/useButton';

const props = defineProps({
  buttonText: String,
  customStyle: Object,
  icon: String,
  iconColor: {
    type: String,
    default: 'white',
  },
  iconPosition: {
    type: String,
    default: 'right',
  },
  isCircle: Boolean,
  isDisabled: Boolean,
  isError: Boolean,
  isFull: Boolean,
  isInfo: Boolean,
  isLarge: Boolean,
  isOutlined: Boolean,
  isRounded: Boolean,
  isSmall: Boolean,
  isSuccess: Boolean,
  isText: Boolean,
  isWarning: Boolean,
  type: {
    type: String,
    default: 'button',
  },
  ariaLabel: String,
  circle: Boolean,
  disabled: Boolean,
  error: Boolean,
  full: Boolean,
  info: Boolean,
  large: Boolean,
  outlined: Boolean,
  rounded: Boolean,
  small: Boolean,
  success: Boolean,
  text: Boolean,
  warning: Boolean,
});

const icons = import.meta.glob("../assets/icons/*.svg", { eager: true, query: "?raw", import: "default" });
const emit = defineEmits(['clickButton', 'click']);

const iconContent = computed(() => icons[`../assets/icons/${props.icon}.svg`] || "");

const {
  buttonClasses,
  buttonStyleCustom,
  buttonStyleHover,
  isHover,

  handleClick,
  manageHover,
} = useButton(props, emit);

const buttonStyles = computed(() => ({
  ...buttonStyleCustom.value,
  ...(isHover.value ? buttonStyleHover.value : {}),
}));
</script>

<template>
  <button
    :class="buttonClasses"
    :disabled="isDisabled"
    :role="type"
    :style="buttonStyles"
    :type="type"
    @click="handleClick"
    @mouseleave="manageHover(false)"
    @mouseover="manageHover(true)"
    class="tv-btn"
    :aria-label="ariaLabel"
  >
    <span
      v-if="icon"
      v-html="iconContent"
      class="tv-icon"
      :class="[`tv-icon-position-${iconPosition}`]"
    />
    <template v-if="buttonText">{{ buttonText }}</template>
    <slot v-else></slot>
  </button>
</template>

<style scoped lang="scss" src="../assets/scss/style.scss"></style>
