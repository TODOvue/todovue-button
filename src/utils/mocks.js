import Default from './demos/default.vue?raw';
import DefaultProps from "./demos/defaultProps.vue?raw";
import CustomStyle from "./demos/customStyle.vue?raw";
import CustomStyleOutlined from "./demos/customStyleOutlined.vue?raw";
import Small from "./demos/small.vue?raw";
import Rounded from "./demos/rounded.vue?raw";
import Full from "./demos/full.vue?raw";
import Outlined from "./demos/outlined.vue?raw";
import Large from "./demos/large.vue?raw";
import Success from "./demos/success.vue?raw";
import Info from "./demos/info.vue?raw";
import Warning from "./demos/warning.vue?raw";
import Error from "./demos/error.vue?raw";
import Disabled from "./demos/disabled.vue?raw";
import Text from "./demos/text.vue?raw";
import Icon from "./demos/icon.vue?raw";
import IconLeft from "./demos/iconLeft.vue?raw";
import TypeIcon from "./demos/typeIcon.vue?raw";
import Various1 from "./demos/various1.vue?raw";
import Various2 from "./demos/various2.vue?raw";
import Various3 from "./demos/various3.vue?raw";
import Various4 from "./demos/various4.vue?raw";
import Various5 from "./demos/various5.vue?raw";

const clickHandler = () => {
  console.log("clicked");
};

const defaultScript = () => {
  return `<script setup>
  const clickHandler = () => {
    console.log("clicked");
  }
</script>`;
};

export const demos = [
  {
    id: 1,
    title: "Default",
    propsData: { buttonText: "Default", onClick: clickHandler },
    html: Default,
  },
  {
    id: 2,
    title: "Default (The text is sent by props)",
    propsData: { buttonText: "Default Props" },
    html: DefaultProps,
  },
  {
    id: 3,
    title: "Custom Style",
    propsData: {
      buttonText: "Custom Style",
      customStyle: { backgroundColor: "#0f2e5b", color: "#fff" },
      onClick: clickHandler,
    },
    html: CustomStyle,
  },
  {
    id: 4,
    title: "Small",
    propsData: { buttonText: "Small", small: true, onClick: clickHandler },
    html: Small,
  },
  {
    id: 5,
    title: "Rounded",
    propsData: {
      buttonText: "Rounded",
      isRounded: true,
      onClick: clickHandler,
    },
    html: Rounded,
  },
  {
    id: 6,
    title: "Full",
    propsData: { buttonText: "Full", full: true, onClick: clickHandler },
    html: Full,
  },
  {
    id: 7,
    title: "Outlined",
    propsData: {
      buttonText: "Outlined",
      isOutlined: true,
      onClick: clickHandler,
    },
    html: Outlined,
  },
  {
    id: 8,
    title: "Custom Style When is Outlined",
    propsData: {
      buttonText: "Is outlined",
      customStyle: { backgroundColor: "#5f31b7", color: "#fff" },
      isOutlined: true,
      onClick: clickHandler,
    },
    html: CustomStyleOutlined,
  },
  {
    id: 9,
    title: "Large",
    propsData: { buttonText: "Large", large: true, onClick: clickHandler },
    html: Large,
  },
  {
    id: 10,
    title: "Success",
    propsData: {
      buttonText: "Success",
      isSuccess: true,
      onClick: clickHandler,
    },
    html:Success,
  },
  {
    id: 11,
    title: "Info",
    propsData: { buttonText: "Info", info: true, onClick: clickHandler },
    html: Info,
  },
  {
    id: 12,
    title: "Warning",
    propsData: {
      buttonText: "Warning",
      isWarning: true,
      onClick: clickHandler,
    },
    html: Warning,
  },
  {
    id: 13,
    title: "Error",
    propsData: { buttonText: "Error", error: true, onClick: clickHandler },
    html: Error,
  },
  {
    id: 14,
    title: "Disabled",
    propsData: {
      buttonText: "Disabled",
      isDisabled: true,
      onClick: clickHandler,
    },
    html: Disabled,
  },
  {
    id: 15,
    title: "Text",
    propsData: { buttonText: "Text", text: true, onClick: clickHandler,  customStyle: {
        color: "#ffffff",
      },
    },
    html: Text,
  },
  {
    id: 16,
    title: "Icon (Edit) - Position: right (is default)",
    propsData: { buttonText: "Icon", icon: "edit", onClick: clickHandler },
    html: Icon,
  },
  {
    id: 17,
    title: "Icon (Plus) - Position: left",
    propsData: {
      buttonText: "Icon",
      icon: "plus",
      iconPosition: "left",
      onClick: clickHandler,
    },
    html: IconLeft,
  },
  {
    id: 18,
    title: "Type icon (Help)",
    propsData: {
      type: 'icon',
      icon: "help",
      onClick: clickHandler,
    },
    html: TypeIcon,
  },
  {
    id: 19,
    title: "Various props 1",
    propsData: {
      buttonText: "Press me",
      isSmall: true,
      isRounded: true,
      isOutlined: true,
      onClick: clickHandler,
    },
    html: Various1,
  },
  {
    id: 20,
    title: "Various props 2",
    propsData: {
      buttonText: "Press me",
      isLarge: true,
      isInfo: true,
      onClick: clickHandler,
    },
    html: Various2,
  },
  {
    id: 21,
    title: "Various props 3",
    propsData: {
      buttonText: "Press me",
      isFull: true,
      isWarning: true,
      isRounded: true,
      onClick: clickHandler,
    },
    html: Various3,
  },
  {
    id: 22,
    title: "Various props 4",
    propsData: {
      buttonText: "Press me",
      isSuccess: true,
      isDisabled: true,
      onClick: clickHandler,
    },
    html: Various4,
  },
  {
    id: 23,
    title: "Various props 5",
    propsData: {
      buttonText: "Press me",
      isRounded: true,
      customStyle: {
        backgroundColor: "#1144b3",
        color: "#ffffff",
      },
      onClick: clickHandler,
    },
    html: Various5,
  },
];
