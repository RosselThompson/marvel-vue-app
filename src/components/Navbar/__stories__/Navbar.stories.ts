import { Meta, StoryFn } from "@storybook/vue3";
import {menuOptionsData } from "@/data/MenuOptions";
import Navbar from "../Navbar.vue";

const MetaObject: Meta = {
  title: "Controls/Navbar",
  component: Navbar,
};

const Template: StoryFn<typeof Navbar> = (args) => ({
  components: { Navbar },
  setup() {
    return { args };
  },
  template: '<Navbar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  menuOptions: menuOptionsData
};

export default MetaObject;
