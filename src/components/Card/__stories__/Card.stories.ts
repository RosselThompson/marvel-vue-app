import { Meta, StoryFn } from "@storybook/vue3";
import Card from "../Card.vue";

const MetaObject: Meta = {
  title: "Controls/Card",
  component: Card,
};

const Template: StoryFn<typeof Card> = (args) => ({
  components: { Card },
  setup() {
    return { args };
  },
  template: '<Card v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  id: 1,
  title: "Card Title",
  image: "https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg",
};

export const Favorited = Template.bind({});
Favorited.args = {
  id: 1,
  title: "Card Title",
  image: "https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg",
  isFavorited: true,
};

export default MetaObject;
