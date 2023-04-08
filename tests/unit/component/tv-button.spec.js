import { shallowMount } from "@vue/test-utils";
import TvButton from "@/component/TvButton.vue";

describe("TvButton Component", () => {
  it("should matches snapshot", () => {
    const wrapper = shallowMount(TvButton, {
      props: {
        text: "Press me",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("emits a click event when the button is clicked", () => {
    const wrapper = shallowMount(TvButton);
    wrapper.find("button").trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });
});
