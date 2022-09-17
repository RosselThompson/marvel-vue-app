import Navbar from "../Navbar.vue";

import { Meta, StoryFn } from "@storybook/vue3";

const MetaObject: Meta = {
    title: 'Controls/Navbar',
    component: Navbar,
  };

const Template: StoryFn<typeof Navbar> = (args: any, { argTypes } : {argTypes:any}) => ({
  components: { Navbar },
  props: Object.keys(argTypes),
  template: '<Navbar v-bind="$props" />',
});

export const Default = Template.bind({});

export default MetaObject;