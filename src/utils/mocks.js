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
    title: "TvButton Default",
    propsData: { buttonText: "Default", onClick: clickHandler },
    html: `<template>
  <tv-button @click-button="clickHandler">
    Default
  </tv-button>
</template>

${defaultScript()}`,
  },
  {
    id: 20,
    title: "TvButton Default (The text is sent by props)",
    propsData: { buttonText: "Default Props" },
    html: `<template>
  <tv-button buttonText="Default Props" @click-button="clickHandler"/>
</template>

${defaultScript()}`,
  },
  {
    id: 21,
    title: "TvButton custom style",
    propsData: {
      buttonText: "Custom Style",
      customStyle: { backgroundColor: "#0f2e5b", color: "#fff" },
      onClick: clickHandler,
    },
    // language=HTML
    html: `<template>
  <tv-button :customStyle="customStyle" @click-button="clickHandler">
    Custom Style
  </tv-button>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const customStyle = ref({
      backgroundColor: "#0f2e5b",
      color: "#fff",
    });

    const clickHandler = () => {
      console.log("clicked");
    }
    
    return {
      customStyle,
      clickHandler
    }
  }
}
</script>`,
  },
  {
    id: 22,
    title: "TvButton custom style is outlined",
    propsData: {
      buttonText: "Is outlined",
      customStyle: { backgroundColor: "#5f31b7", color: "#fff" },
      isOutlined: true,
      onClick: clickHandler,
    },
    html: `<template>
  <tv-button :customStyle="customStyle" is-outlined @click-button="clickHandler">
    Is outlined"
  </tv-button>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const customStyle = ref({
      backgroundColor: "#5f31b7",
      color: "#fff", // The color will be used for the hover.
    });
    
    const clickHandler = () => {
      console.log("clicked");
    }
    
    return {
      customStyle,
      clickHandler
    }
  }
}
</script>`,
  },
  {
    id: 2,
    title: "TvButton Small",
    propsData: { buttonText: "Small", isSmall: true, onClick: clickHandler },
    html: `<template>
  <tv-button isSmall @click-button="clickHandler">
    Small
  </tv-button>
</template>

${defaultScript()}`,
  },
  {
    id: 3,
    title: "TvButton Rounded",
    propsData: {
      buttonText: "Rounded",
      isRounded: true,
      onClick: clickHandler,
    },
    html: `<template>
  <tv-button isRounded @click-button="clickHandler">
    Rounded
  </tv-button>
</template>

${defaultScript()}`,
  },
  {
    id: 4,
    title: "TvButton Full",
    propsData: { buttonText: "Full", isFull: true, onClick: clickHandler },
    html: `<template>
  <tv-button isFull @click-button="clickHandler">
    Full
  </tv-button>
</template>

${defaultScript()}`,
  },
  {
    id: 5,
    title: "TvButton Outlined",
    propsData: {
      buttonText: "Outlined",
      isOutlined: true,
      onClick: clickHandler,
    },
    html: `<template>
  <tv-button isOutlined @click-button="clickHandler">
    Outlined
  </tv-button>
</template>

${defaultScript()}`,
  },
  {
    id: 6,
    title: "TvButton Large",
    propsData: { buttonText: "Large", isLarge: true, onClick: clickHandler },
    html: `<template>
  <tv-button isLarge @click-button="clickHandler">
    Large
  </tv-button>
</template>

${defaultScript()}`,
  },
  {
    id: 7,
    title: "TvButton Success",
    propsData: {
      buttonText: "Success",
      isSuccess: true,
      onClick: clickHandler,
    },
    html: `<template>
  <tv-button isSuccess @click-button="clickHandler">
    Success
  </tv-button>
</template>

${defaultScript()}`,
  },
  {
    id: 8,
    title: "TvButton Info",
    propsData: { buttonText: "Info", isInfo: true, onClick: clickHandler },
    html: `<template>
  <tv-button isInfo @click-button="clickHandler">
    Info
  </tv-button>
</template>

${defaultScript()}`,
  },
  {
    id: 9,
    title: "TvButton Warning",
    propsData: {
      buttonText: "Warning",
      isWarning: true,
      onClick: clickHandler,
    },
    html: `<template>
  <tv-button isWarning @click-button="clickHandler">
    Warning
  </tv-button>
</template>

${defaultScript()}`,
  },
  {
    id: 10,
    title: "TvButton Error",
    propsData: { buttonText: "Error", isError: true, onClick: clickHandler },
    html: `<template>
  <tv-button isError @click-button="clickHandler">
    Error
  </tv-button>
</template>

${defaultScript()}`,
  },
  {
    id: 11,
    title: "TvButton Disabled",
    propsData: {
      buttonText: "Disabled",
      isDisabled: true,
      onClick: clickHandler,
    },
    html: `<template>
  <tv-button isDisabled @click-button="clickHandler">
    Disabled
  </tv-button>
</template>

${defaultScript()}`,
  },
  {
    id: 13,
    title: "TvButton Text",
    propsData: { buttonText: "Text", isText: true, onClick: clickHandler },
    html: `<template>
  <tv-button isbuttonText @click-button="clickHandler">
    Text
  </tv-button>
</template>

${defaultScript()}`,
  },
  {
    id: 14,
    title: "TvButton Icon Edit position: Right (Default)",
    propsData: { buttonText: "Icon", icon: "edit", onClick: clickHandler },
    html: `<template>
  <tv-button icon="edit" @click-button="clickHandler">
    Icon
  </tv-button>
</template>

${defaultScript()}`,
  },
  {
    id: 15,
    title: "TvButton Icon PLus (Position: Left)",
    propsData: {
      buttonText: "Icon",
      icon: "plus",
      iconPosition: "left",
      onClick: clickHandler,
    },
    html: `<template>
  <tv-button icon="add" iconPosition="left" @click-button="clickHandler">
    Icon
  </tv-button>
</template>

${defaultScript()}`,
  },
  {
    id: 24,
    title: "TvButton type icon",
    propsData: {
      type: 'icon',
      icon: "help",
      onClick: clickHandler,
    },
    html: `<template>
  <tv-button icon="help" type="icon" @click-button="clickHandler">
  </tv-button>
</template>

${defaultScript()}`,
  },
  {
    id: 16,
    title: "TvButton: various props 1",
    propsData: {
      buttonText: "Press me",
      isSmall: true,
      isRounded: true,
      isOutlined: true,
      onClick: clickHandler,
    },
    html: `<template>
  <tv-button isSmall isRounded isOutlined @click-button="clickHandler">
    Press me
  </tv-button>
</template>

${defaultScript()}`,
  },
  {
    id: 17,
    title: "TvButton: various props 2",
    propsData: {
      buttonText: "Press me",
      isLarge: true,
      isInfo: true,
      onClick: clickHandler,
    },
    html: `<template>
  <tv-button isLarge isInfo @click-button="clickHandler">
    Press me
  </tv-button>
</template>

${defaultScript()}`,
  },
  {
    id: 18,
    title: "TvButton: various props 3",
    propsData: {
      buttonText: "Press me",
      isFull: true,
      isWarning: true,
      isRounded: true,
      onClick: clickHandler,
    },
    html: `<template>
  <tv-button isFull isWarning isRounded @click-button="clickHandler">
    Press me
  </tv-button>
</template>

${defaultScript()}`,
  },
  {
    id: 19,
    title: "TvButton: various props 4",
    propsData: {
      buttonText: "Press me",
      isSuccess: true,
      isDisabled: true,
      onClick: clickHandler,
    },
    html: `<template>
  <tv-button isSuccess isDisabled @click-button="clickHandler">
    Press me
  </tv-button>
</template>

${defaultScript()}`,
  },
  {
    id: 23,
    title: "TvButton: various props 5",
    propsData: {
      buttonText: "Press me",
      isRounded: true,
      customStyle: {
        backgroundColor: "#1144b3",
        color: "#ffffff",
      },
      onClick: clickHandler,
    },
    html: `<template>
  <tv-button isRounded :customStyle="customStyle">
    Press me
  </tv-button>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const customStyle = ref({
      backgroundColor: "#1144b3",
      color: "#ffffff",
    });
   const clickHandler = () => {
      console.log("clicked");
    }
    return {
      customStyle,
      clickHandler
    };
  }
}
</script>`,
  },
];
