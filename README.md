<p align="center"><img width="150" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/logo.png?alt=media&token=d8eb592f-e4a9-4b02-8aff-62d337745f41" alt="TODOvue logo">
</p>

# TODOvue Button
###### TvButton is a custom button component for web applications.

[![npm](https://img.shields.io/npm/v/@todovue/tvbutton.svg)](https://www.npmjs.com/package/@todovue/tvbutton) [![Netlify Status](https://api.netlify.com/api/v1/badges/3c413109-63aa-41d7-8126-a527435f5512/deploy-status)](https://app.netlify.com/sites/todovue-button/deploys) [![npm](https://img.shields.io/npm/dm/@todovue/tvbutton.svg)](https://www.npmjs.com/package/@todovue/tvbutton)
[![npm](https://img.shields.io/npm/d18m/@todovue/tvbutton.svg)](https://www.npmjs.com/package/@todovue/tvbutton) ![GitHub](https://img.shields.io/github/license/TODOvue/todovue-button) ![GitHub Release Date](https://img.shields.io/github/release-date/TODOvue/todovue-button)

## Table of Contents
- [Demo](https://todovue-button.netlify.app/)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Events](#events)
- [Customize](#customize)
- [Development](#development)
- [Changelog](https://github.com/TODOvue/todovue-button/blob/master/CHANGELOG.md)
- [Contributing](https://github.com/TODOvue/todovue-button/blob/master/CONTRIBUTING.md)
- [License](https://github.com/TODOvue/todovue-button/blob/master/LICENSE)

## Installation
Install with npm or yarn
```bash
npm install @todovue/tvbutton
```
```bash
yarn add @todovue/tvbutton
```

Import the component:
```js
import { TvButton } from "@todovue/tvbutton";
```

You can also register it globally in **main.js**:
```js
import { createApp } from "vue";
import App from "./App.vue";
import TvButton from "@todovue/tvbutton";

const app = createApp(App);
app.component("TvButton", TvButton);
app.mount("#app");
```

---

## Usage
```html
<script setup>
import TvButton from "@todovue/tvbutton"; // Only if not imported in main.js
    
const handleClick = () => {
  console.log("Clicked!");
};
</script>

<template>
  <tv-button @click-button="handleClick">
    Click me
  </tv-button>
</template>
```

---

## Props
| Name                       | Type    | Default  | Description                                                                        |
|----------------------------|---------|----------|------------------------------------------------------------------------------------|
| type                       | String  | `button` | Defines the button type: `"button"` or `"icon"` (icon-only button).                |
| customStyle                | Object  | `{}`     | Custom styles for the button (e.g., `{ backgroundColor: "#000", color: "#fff" }`). |
| `isOutlined` or `outlined` | Boolean | `false`  | If `true`, the button will be outlined instead of filled.                          |
| `isSmall` or `small`       | Boolean | `false`  | If `true`, the button will be small.                                               |
| `isLarge` or `large`       | Boolean | `false`  | If `true`, the button will be large.                                               |
| `isSuccess` or `success`   | Boolean | `false`  | If `true`, the button will be styled as a success button.                          |
| `isInfo` or `info`         | Boolean | `false`  | If `true`, the button will be styled as an info button.                            |
| `isWarning` or `warning`   | Boolean | `false`  | If `true`, the button will be styled as a warning button.                          |
| `isError` or `error`       | Boolean | `false`  | If `true`, the button will be styled as an error button.                           |
| `isDisabled` or `disabled` | Boolean | `false`  | If `true`, the button will be disabled.                                            |
| `isText` or `text`         | Boolean | `false`  | If `true`, the button will be styled as a text button.                             |
| icon                       | String  | `null`   | The name of the icon to be displayed inside the button.                            |
| iconPosition               | String  | `right`  | The position of the icon (`left` or `right`).                                      |
| buttonText                 | String  | `''`     | The text inside the button (alternative to using `slot`).                          |
| ariaLabel                  | String  | `''`     | The aria-label attribute for the button.                                           |

---

### 🔹 **Icons**
You can use the following icons (`icon="account"`):
- `account`
- `alert`
- `arrow-down`
- `arrow-left`
- `arrow-right`
- `arrow-up`
- `cancel`
- `clone`
- `dark`
- `download`
- `edit`
- `favorite`
- `help`
- `light`
- `menu`
- `minus`
- `plus`
- `remove`
- `search`
- `settings`
- `share`
- `star`
- `update`

---

## Events
| Name         | Description                                                                 |
|--------------|-----------------------------------------------------------------------------|
| click-button | Emitted when the button is clicked. You can use it to call a function, etc. |
| click        | Emitted when the button is clicked. You can use it to call a function, etc. |

---

## Customize
You can customize the button style using `customStyle`. You can include `backgroundColor` and `color`.

```html
<script setup>
import TvButton from "@todovue/tvbutton";

const customStyle = {
  backgroundColor: "#0f2e5b",
  color: "#fff",
};
</script>

<template>
  <tv-button :customStyle="customStyle">
    Custom Button
  </tv-button>
</template>
```

---

## 🔥 **Icon-Only Button (`type="icon"`)**
If you want a button with only an icon, use `type="icon"`. The button will automatically adjust its size.

```html
<tv-button icon="trash" type="icon" />
<tv-button icon="check" type="icon" iconColor="green" />
<tv-button icon="info" type="icon" iconColor="blue" />
```

---

## Development
Clone the repository and install the dependencies:
```bash
git clone https://github.com/TODOvue/todovue-button.git
cd todovue-button
yarn install
```

### 🔹 Run the demo
```bash
yarn demo
```
### 🔹 Run tests
```bash
yarn test:unit
```
### 🔹 Run the linter
```bash
yarn lint
```
### 🔹 Build the project (Not required for PRs)
```bash
yarn build
```

---

## License
[MIT](https://github.com/TODOvue/todovue-button/blob/master/LICENSE)
