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
    expect(wrapper.emitted("clickButton")).toBeTruthy();
  });

  describe("manage hover class", () => {
    it("You should change the value of isHover to false if mouseleave is triggered", async () => {
      const wrapper = shallowMount(TvButton);
      await wrapper.find("button").trigger("mouseleave");
      expect(wrapper.vm.isHover).toBe(false);
    });

    it("You should change the value of isHover to true if mouseover is triggered", async () => {
      const wrapper = shallowMount(TvButton);
      await wrapper.find("button").trigger("mouseover");
      expect(wrapper.vm.isHover).toBe(true);
    });
  });

  describe("buttonStyleCustom", () => {
    it("Should returns an empty object if customStyle is falsy", () => {
      const props = {
        customStyle: null,
        isOutlined: false,
      };
      const wrapper = shallowMount(TvButton, { props });
      expect(wrapper.vm.buttonStyleCustom).toEqual({});
    });

    it("Should returns an object with the correct properties if isOutlined is true", () => {
      const props = {
        customStyle: {
          backgroundColor: "blue",
          color: "white",
        },
        isOutlined: true,
      };
      const wrapper = shallowMount(TvButton, { props });
      const expected = {
        backgroundColor: {
          backgroundColor: "transparent",
          boxShadow: `0 0 5px ${props.customStyle.backgroundColor}`,
          border: `1px solid ${props.customStyle.backgroundColor}`,
        },
        color: {
          color: props.customStyle.backgroundColor,
        },
      };
      expect(wrapper.vm.buttonStyleCustom).toEqual(expected);
    });

    it("Should returns an object with the correct properties if isOutlined is false", () => {
      const props = {
        customStyle: {
          backgroundColor: "blue",
          color: "white",
        },
        isOutlined: false,
      };
      const wrapper = shallowMount(TvButton, { props });
      const expected = {
        backgroundColor: {
          backgroundColor: props.customStyle.backgroundColor,
          boxShadow: `0 0 5px ${props.customStyle.backgroundColor}`,
        },
        color: {
          color: props.customStyle.color,
        },
      };
      expect(wrapper.vm.buttonStyleCustom).toEqual(expected);
    });
  });

  describe("buttonStyleHover", () => {
    const wrapper = shallowMount(TvButton);
    const buttonStyleHover = wrapper.vm.buttonStyleHover;

    it("Should returns an empty object if customStyle is falsy", () => {
      wrapper.setProps({
        customStyle: null,
        isOutlined: false,
      });
      expect(buttonStyleHover).toEqual({});
    });

    it("Should correctly calculates the hover style when props.customStyle is a valid object", () => {
      const props = {
        customStyle: {
          backgroundColor: "#5f31b7",
          color: "#c8c7c8",
        },
        isOutlined: true,
      };
      const wrapper = shallowMount(TvButton, { props });
      const expected = {
        backgroundColor: "#5f31b7",
        color: "#c8c7c8",
      };
      expect(wrapper.vm.buttonStyleHover).toEqual(expected);
    });

    it("It should return the darker color", () => {
      const props = {
        customStyle: {
          backgroundColor: "#5f31b7",
          color: "#c8c7c8",
        },
        isOutlined: false,
      };
      const wrapper = shallowMount(TvButton, { props });
      const expected = {
        backgroundColor: "#552ca4",
        boxShadow: "none",
      };
      expect(wrapper.vm.buttonStyleHover).toEqual(expected);
    });
  });
});
