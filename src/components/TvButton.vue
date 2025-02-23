<script setup>
import { computed } from 'vue';
import useButton from '../composables/useButton';

const icons = import.meta.glob('../assets/icons/*.svg', { eager: true });

const processedIcons = Object.keys(icons).reduce((acc, path) => {
  const key = path.split('/').pop().replace('.svg', '');
  acc[key] = new URL(icons[path].default, import.meta.url).href;
  return acc;
}, {});

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
});

const iconSrc = computed(() => processedIcons[props.icon] || null);
const emit = defineEmits(['clickButton']);
const iconColorClass = computed(() => {
  return props.iconColor ? `tv-icon-${props.iconColor.replace('#', '')}` : 'tv-icon-white';
});

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
  >
    <img
      :alt="`${icon}-icon`"
      :class="[
        `tv-icon-position-${iconPosition}`,
        iconColorClass
      ]"
      :src="iconSrc"
      class="tv-icon"
      v-if="iconSrc"
    />
    <template v-if="buttonText || type === 'icon'">{{ buttonText }}</template>
    <slot v-else></slot>
  </button>
</template>

<style scoped lang="scss" src="../assets/scss/style.scss"></style>
