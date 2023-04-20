export const demos = [
  {
    id: 1,
    title: "TvButton Default",
    propsData: { buttonText: "Default" },
    html: `<tv-button>
  Default
</tv-button>`,
  },
  {
    id: 20,
    title: "TvButton Default (The text is sent by props)",
    propsData: { buttonText: "Default Props" },
    html: `<tv-button buttonText="Default Props" />`,
  },
  {
    id: 2,
    title: "TvButton Small",
    propsData: { buttonText: "Small", isSmall: true },
    html: `<tv-button isSmall>
  Small
</tv-button>`,
  },
  {
    id: 3,
    title: "TvButton Rounded",
    propsData: { buttonText: "Rounded", isRounded: true },
    html: `<tv-button isRounded>
  Rounded
</tv-button>`,
  },
  {
    id: 4,
    title: "TvButton Full",
    propsData: { buttonText: "Full", isFull: true },
    html: `<tv-button isFull>
  Full
</tv-button>`,
  },
  {
    id: 5,
    title: "TvButton Outlined",
    propsData: { buttonText: "Outlined", isOutlined: true },
    html: `<tv-button isOutlined>
  Outlined
</tv-button>`,
  },
  {
    id: 6,
    title: "TvButton Large",
    propsData: { buttonText: "Large", isLarge: true },
    html: `<tv-button isLarge>
  Large
</tv-button>`,
  },
  {
    id: 7,
    title: "TvButton Success",
    propsData: { buttonText: "Success", isSuccess: true },
    html: `<tv-button isSuccess>
  Success
</tv-button>`,
  },
  {
    id: 8,
    title: "TvButton Info",
    propsData: { buttonText: "Info", isInfo: true },
    html: `<tv-button isInfo>
  Info
</tv-button>`,
  },
  {
    id: 9,
    title: "TvButton Warning",
    propsData: { buttonText: "Warning", isWarning: true },
    html: `<tv-button isWarning>
  Warning
</tv-button>`,
  },
  {
    id: 10,
    title: "TvButton Error",
    propsData: { buttonText: "Error", isError: true },
    html: `<tv-button isError>
  Error
</tv-button>`,
  },
  {
    id: 11,
    title: "TvButton Disabled",
    propsData: { buttonText: "Disabled", isDisabled: true },
    html: `<tv-button isDisabled>
  Disabled
</tv-button>`,
  },
  {
    id: 12,
    title: "TvButton Circle",
    propsData: { buttonText: "X", isCircle: true },
    html: `<tv-button isCircle>
  X
</tv-button>`,
  },
  {
    id: 13,
    title: "TvButton Text",
    propsData: { buttonText: "Text", isText: true },
    html: `<tv-button isbuttonText>
  Text
</tv-button>`,
  },
  {
    id: 14,
    title: "TvButton Icon Edit position: Right (Default)",
    propsData: { buttonText: "Icon", icon: "edit" },
    html: `<tv-button icon="edit">
  Icon
</tv-button>`,
  },
  {
    id: 15,
    title: "TvButton Icon PLus (Position: Left)",
    propsData: { buttonText: "Icon", icon: "plus", iconPosition: "left" },
    html: `<tv-button icon="add" iconPosition="left">
  Icon
</tv-button>`,
  },
  {
    id: 16,
    title: "TvButton: various props 1",
    propsData: {
      buttonText: "Press me",
      isSmall: true,
      isRounded: true,
      isOutlined: true,
    },
    html: `<tv-button isSmall isRounded isOutlined>
  Press me
</tv-button>`,
  },
  {
    id: 17,
    title: "TvButton: various props 2",
    propsData: {
      buttonText: "Press me",
      isLarge: true,
      isInfo: true,
      isOutlined: true,
    },
    html: `<tv-button isLarge isInfo isOutlined>
  Press me
</tv-button>`,
  },
  {
    id: 18,
    title: "TvButton: various props 3",
    propsData: {
      buttonText: "Press me",
      isFull: true,
      isWarning: true,
      isRounded: true,
    },
    html: `<tv-button isFull isWarning isRounded>
  Press me
</tv-button>`,
  },
  {
    id: 19,
    title: "TvButton: various props 4",
    propsData: {
      buttonText: "Press me",
      isSuccess: true,
      isRounded: true,
      isDisabled: true,
    },
    html: `<tv-button isSuccess isRounded isDisabled>
  Press me
</tv-button>`,
  },
];
