import TvButton from "./component/TvButton.vue";

const Button = {
  install(Vue, args = {}) {
    if (this.installed) {
      return;
    }

    this.installed = true;
    this.params = args;

    Vue.component(args.componentName || "TvButton", TvButton);
  },
};

export default Button;
