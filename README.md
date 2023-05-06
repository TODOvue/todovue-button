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
Import
```js
import { TvButton } from 'todovue-button'
```


You can also import it directly in the **main.js** file, so you don't have to import it in the pages
```js
import { createApp } from "vue";
import App from "./App.vue";
import TvButton from "todovue-button";

const app = createApp(App);
app.component("TvButton", TvButton);
app.mount("#app");
```

## Usage
```html
<template>
  <tv-button @click-button="clickHandler">
    Default
  </tv-button>
</template>

<script>
  import TvButton from "todovue-button"; // Only if you have not imported it from main
  export default {
    components: {
      TvButton // Only if you have not imported it from main
    },
    setup() {
      const clickHandler = () => {
        console.log("clicked");
      }

      return {
        clickHandler
      }
    }
  }
</script>
```

## Props
| Name         | Type    | Default  | Description                                                                                        |
|--------------|---------|----------|----------------------------------------------------------------------------------------------------|
| type         | String  | `button` | The type of button                                                                                 |
| customStyle  | Object  | `{}`     | object that defines the custom style of the button. You can include `backgroundColor` and `color`. |
| isOutlined   | Boolean | `false`  | If `true`, the button will be outlined.                                                            |
| isSmall      | Boolean | `false`  | If `true`, the button will be small.                                                               |
| isLarge      | Boolean | `false`  | If `true`, the button will be large.                                                               |
| isSuccess    | Boolean | `false`  | If `true`, the button will be success.                                                             |
| icon         | String  | `null`   | The icon of the button.                                                                            |
| isInfo       | Boolean | `false`  | If `true`, the button will be info.                                                                |
| isWarning    | Boolean | `false`  | If `true`, the button will be warning.                                                             |
| isError      | Boolean | `false`  | If `true`, the button will be error.                                                               |
| isDisabled   | Boolean | `false`  | If `true`, the button will be disabled.                                                            |
| isText       | Boolean | `false`  | If `true`, the button will be text.                                                                |
| iconPosition | String  | `left`   | The position of the icon. You can use `left` and `right`.                                          |
| buttonText   | String  | `null`   | The text of the button.                                                                            |

### Icons
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

## Events
| Name         | Description                                                                 |
|--------------|-----------------------------------------------------------------------------|
| click-button | Emitted when the button is clicked. You can use it to call a function, etc. |

## Customize
You can customize the button style by passing an object to the `customStyle` prop. You can include `backgroundColor` and `color`.
```html
<template>
  <tv-button :customStyle="customStyle" @click-button="clickHandler">
    Default
  </tv-button>
</template>

<script>
  import { ref } from "vue";
  export default {
    setup() {
      const customStyle = ref({
        backgroundColor: "#000",
        color: "#fff"
      })
      
      const clickHandler = () => {
        console.log("clicked");
      }

      return {
        customStyle,
        clickHandler
      }
    }
  }
</script>
```

## Development
Clone the repository and install the dependencies
```bash
git clone https://github.com/TODOvue/todovue-button.git
```
```bash
cd todovue-button
```

Install the dependencies
```bash
yarn install
```
Run the project
```bash
yarn demo
```
Run the tests
```bash
yarn test:unit
```
Run the linter
```bash
yarn lint
```
Run the build It is not necessary to generate build, since it is generated when you do PR to the master branch
```bash
yarn build
```

## License
[MIT](https://github.com/TODOvue/todovue-button/blob/master/LICENSE)
