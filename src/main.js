import { createApp } from "vue";
import Demo from "./Demo.vue";
import "vue-highlight-code/dist/style.css";
import "@/assets/scss/_global.scss";
import TvDemo from "todovue-demo";

const app = createApp(Demo);
app.component("TvDemo", TvDemo);
app.mount("#todovue-button");
