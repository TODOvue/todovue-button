<template>
  <button
    :class="{
      'is-rounded': isRounded,
      'is-full': isFull,
      'is-outlined': isOutlined,
      'is-small': isSmall,
      'is-large': isLarge,
      'is-success': isSuccess,
    }"
    @click="handleClick"
  >
    <i v-if="icon" :class="`icon-${icon}`"></i>
    <slot></slot>
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
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.dark-mode button {
  background-color: var(--color-background-button-dark);
  color: var(--color-text-button-dark);
}

.light-mode button {
  background-color: var(--color-background-button-light);
  color: var(--color-text-button-light);
}

button {
  width: 150px;
  border: none;
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: inline-block;
  font-size: 16px;
  box-shadow: 0 0 5px var(--color-background-button-dark);
}

button:hover {
  box-shadow: none;
}

button:active {
  background-color: var(--color-background-button-dark-darken);
  transform: translateY(2px);
}

button.is-outlined {
  font-weight: 600;
  background-color: transparent;
  border: 3px solid var(--color-background-button-dark);
}

button.is-outlined:hover {
  background: var(--color-background-button-dark);
}

.light-mode button.is-outlined {
  color: var(--color-background-button-light);
}

.light-mode button.is-outlined:hover {
  color: var(--color-text-button-dark);
}

button.is-success {
  background: var(--color-background-button-success);
  box-shadow: 0 0 5px var(--color-background-button-success);
}

button.is-success:hover {
  box-shadow: none;
  background-color: var(--color-background-button-success-darken);
}

button.is-full {
  width: 100%;
}

button.is-rounded {
  border-radius: 10px;
}

button.is-small {
  min-width: 120px;
  width: 80px;
  font-size: 14px;
  padding: 0.7rem 0.5rem;
  white-space: nowrap;
}

button.is-large {
  width: 300px;
}

button i {
  float: right;
  margin-right: 8px;
}

button .icon-add {
  background-image: url("@/assets/icons/add.svg");
  background-size: cover;
  width: 18px;
  height: 18px;
}

button .icon-remove {
  background-image: url("@/assets/icons/remove.svg");
  background-size: cover;
  width: 18px;
  height: 18px;
}
</style>
