import { computed, getCurrentInstance, ref } from "vue";

const useButton = (props) => {
  const instance = getCurrentInstance();
  const isHover = ref(false);

  const handleClick = () => {
    instance.emit("clickButton", {});
  };

  const manageHover = (value) => {
    isHover.value = value;
  };

  const _getDarkerColor = (colorHex) => {
    const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colorHex);
    let r = parseInt(rgb[1], 16);
    let g = parseInt(rgb[2], 16);
    let b = parseInt(rgb[3], 16);

    r = Math.floor(r * 0.9);
    g = Math.floor(g * 0.9);
    b = Math.floor(b * 0.9);

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };

  const buttonClasses = computed(() => {
    return {
      "tv-btn-rounded": props.isRounded,
      "tv-btn-full": props.isFull,
      "tv-btn-outlined": props.isOutlined,
      "tv-btn-small": props.isSmall,
      "tv-btn-large": props.isLarge,
      "tv-btn-success": props.isSuccess,
      "tv-btn-info": props.isInfo,
      "tv-btn-warning": props.isWarning,
      "tv-btn-error": props.isError,
      "tv-btn-disabled": props.isDisabled,
      "tv-btn-text": props.isText,
    };
  });

  const buttonStyleCustom = computed(() => {
    if (!props.customStyle) {
      return {};
    }
    if (props.isOutlined) {
      return {
        backgroundColor: {
          backgroundColor: "transparent",
          boxShadow: `0 0 5px ${props.customStyle?.backgroundColor}`,
          border: `1px solid ${props.customStyle?.backgroundColor}`,
        },
        color: {
          color: props.customStyle?.backgroundColor,
        },
      };
    }
    return {
      backgroundColor: {
        backgroundColor: props.customStyle?.backgroundColor,
        boxShadow: `0 0 5px ${props.customStyle?.backgroundColor}`,
      },
      color: {
        color: props.customStyle?.color,
      },
    };
  });

  const buttonStyleHover = computed(() => {
    if (!props.customStyle) {
      return {};
    }
    if (props.isOutlined) {
      return {
        backgroundColor: props.customStyle?.backgroundColor,
        color: props.customStyle?.color,
      };
    }
    return {
      backgroundColor: _getDarkerColor(props.customStyle?.backgroundColor),
      boxShadow: "none",
    };
  });

  return {
    isHover,
    handleClick,
    manageHover,
    buttonClasses,
    buttonStyleCustom,
    buttonStyleHover,
  };
};

export default useButton;
