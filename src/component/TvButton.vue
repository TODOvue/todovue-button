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
    @click="$emit('handleClick')"
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
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/mixins.scss";

.dark-mode {
  & button {
    @include defaultButton(
      $color-background-button-dark,
      $color-text-button-dark
    );

    &.is-outlined {
      background-color: transparent;
      border: 3px solid $color-background-button-dark;

      &:hover {
        background: $color-background-button-dark;
      }
    }
  }
}

.light-mode {
  & button {
    @include defaultButton(
      $color-background-button-light,
      $color-text-button-light
    );

    &.is-outlined {
      background-color: transparent;
      border: 3px solid $color-background-button-light;
      color: $color-background-button-light;

      &:hover {
        background: $color-background-button-light;
        color: $color-text-button-dark;
      }
    }
  }
}

button {
  width: 150px;
  &.is-success {
    background: $color-background-button-success;
    box-shadow: 0 0 5px $color-background-button-success;
    &:hover {
      background-color: darken($color-background-button-success, 10%);
    }
  }

  &.is-full {
    width: 100%;
  }

  &.is-rounded {
    border-radius: 10px;
  }

  &.is-small {
    min-width: 120px !important;
    width: 80px !important;
    font-size: 14px;
    padding: 0.7rem 0.5rem;
    white-space: nowrap;
  }

  &.is-large {
    width: 300px;
  }

  & .icon-add {
    @include defaultIcon("@/assets/icons/add.svg", 18px);
  }

  & .icon-remove {
    @include defaultIcon("@/assets/icons/remove.svg", 18px);
  }

  &.is-outlined {
    font-weight: 600;
  }

  & i {
    float: right;
    margin-right: 8px;
  }
}
</style>
