<p align="center"><img width="150" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/logo.png?alt=media&token=d8eb592f-e4a9-4b02-8aff-62d337745f41" alt="TODOvue logo">
</p>

# TODOvue Button
###### TvButton is a custom button component for web applications.

[![npm](https://img.shields.io/npm/v/todovue-button.svg)](https://www.npmjs.com/package/todovue-button) [![Netlify Status](https://api.netlify.com/api/v1/badges/3c413109-63aa-41d7-8126-a527435f5512/deploy-status)](https://app.netlify.com/sites/todovue-button/deploys) [![Pipeline](https://github.com/TODOvue/todovue-button/actions/workflows/pipeline.yml/badge.svg?branch=master)](https://github.com/TODOvue/todovue-button/actions/workflows/pipeline.yml) [![npm](https://img.shields.io/npm/dm/todovue-button.svg)](https://www.npmjs.com/package/todovue-button)
[![npm](https://img.shields.io/npm/dt/todovue-button.svg)](https://www.npmjs.com/package/todovue-button) ![GitHub](https://img.shields.io/github/license/TODOvue/todovue-button) ![GitHub Release Date](https://img.shields.io/github/release-date/TODOvue/todovue-button)

<img width="100" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/imagesGit%2Ftodovue-button.png?alt=media&token=bf562982-4fb8-49e4-a7ce-34b61f165135" alt="TODOvue Button default"> <img width="100" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/imagesGit%2FTvButton%2Ftvbutton-disabled.png?alt=media&token=d83b6653-49c0-4877-b12b-6ef19665bdc2" alt="TODOvue Button Disabled"> <img width="100" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/imagesGit%2FTvButton%2Ftvbutton-error.png?alt=media&token=2f97706e-20e8-4cab-90cb-1ded7dc6edac" alt="TODOvue Button error"> <img width="100" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/imagesGit%2FTvButton%2Ftvbutton-icon-left.png?alt=media&token=af9220a9-11eb-465f-8ff4-46611be8e896" alt="TODOvue Button icon left"> <img width="100" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/imagesGit%2FTvButton%2Ftvbutton-icon-right.png?alt=media&token=c0034359-101f-4ef8-a6e7-eb73bae0bdd4" alt="TODOvue Button icon right"> <img width="100" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/imagesGit%2FTvButton%2Ftvbutton-info.png?alt=media&token=9eff644e-6da8-47dd-8334-4939359dc89e" alt="TODOvue Button info"> <img width="100" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/imagesGit%2FTvButton%2Ftvbutton-rounded.png?alt=media&token=60f56765-a32e-4194-9182-83ed544ecfc1" alt="TODOvue Button rounded"> <img width="80" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/imagesGit%2FTvButton%2Ftvbutton-small.png?alt=media&token=b504901c-2d37-4211-acff-87060d0463b3" alt="TODOvue Button small"> <img width="100" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/imagesGit%2FTvButton%2Ftvbutton-success.png?alt=media&token=832b0190-8132-4396-9148-4a433da44e86" alt="TODOvue Button success"> <img width="100" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/imagesGit%2FTvButton%2Ftvbutton-text.png?alt=media&token=f9e02c22-6fd3-4563-ac12-1891aac52552" alt="TODOvue Button text"> <img width="100" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/imagesGit%2FTvButton%2Ftvbutton-warning.png?alt=media&token=1806518e-09dc-4803-b581-615869adf985" alt="TODOvue Button warning"> <img width="150" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/imagesGit%2FTvButton%2Ftvbutton-large.png?alt=media&token=26bfd6c1-c9ae-416c-bf91-8386eebd3301" alt="TODOvue Button large">

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
npm install todovue-button
```
```bash
yarn add todovue-button
```

Import the component:
```js
import { TvButton } from "todovue-button";
```

You can also register it globally in **main.js**:
```js
import { createApp } from "vue";
import App from "./App.vue";
import TvButton from "todovue-button";

const app = createApp(App);
app.component("TvButton", TvButton);
app.mount("#app");
```

---

## Usage
```html
<script setup>
import TvButton from "todovue-button"; // Only if not imported in main.js
    
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
| Name         | Type    | Default  | Description                                                                        |
|--------------|---------|----------|------------------------------------------------------------------------------------|
| type         | String  | `button` | Defines the button type: `"button"` or `"icon"` (icon-only button).                |
| customStyle  | Object  | `{}`     | Custom styles for the button (e.g., `{ backgroundColor: "#000", color: "#fff" }`). |
| isOutlined   | Boolean | `false`  | If `true`, the button will be outlined instead of filled.                          |
| isSmall      | Boolean | `false`  | If `true`, the button will be small.                                               |
| isLarge      | Boolean | `false`  | If `true`, the button will be large.                                               |
| isSuccess    | Boolean | `false`  | If `true`, the button will be styled as a success button.                          |
| isInfo       | Boolean | `false`  | If `true`, the button will be styled as an info button.                            |
| isWarning    | Boolean | `false`  | If `true`, the button will be styled as a warning button.                          |
| isError      | Boolean | `false`  | If `true`, the button will be styled as an error button.                           |
| isDisabled   | Boolean | `false`  | If `true`, the button will be disabled.                                            |
| isText       | Boolean | `false`  | If `true`, the button will be text-only (similar to Bootstrap's text button).      |
| icon         | String  | `null`   | The name of the icon to be displayed inside the button.                            |
| iconPosition | String  | `right`  | The position of the icon (`left` or `right`).                                      |
| buttonText   | String  | `null`   | The text inside the button (alternative to using `slot`).                          |

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
- `cancel-light`
- `edit`
- `dark`
- `favorite`
- `help`
- `light`
- `menu`
- `menu-light`
- `minus`
- `plus`
- `remove`
- `search`
- `search-light`
- `settings`
- `share`
- `star`

---

## Events
| Name         | Description                                                                 |
|--------------|-----------------------------------------------------------------------------|
| click-button | Emitted when the button is clicked. You can use it to call a function, etc. |

---

## Customize
You can customize the button style using `customStyle`. You can include `backgroundColor` and `color`.

```html
<script setup>
import TvButton from "todovue-button";

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
