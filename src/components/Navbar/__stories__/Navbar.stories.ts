import Navbar from "../Navbar.vue";
import {menuOptions as MenuData} from "../../../data/MenuOptions.json";

import { Meta, StoryFn } from "@storybook/vue3";

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
  menuOptions: MenuData
};

export default MetaObject;
