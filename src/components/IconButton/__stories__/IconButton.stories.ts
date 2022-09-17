import { Meta, StoryFn } from "@storybook/vue3";
import IconButton from "../IconButton.vue";

const MetaObject: Meta = {
  title: "Controls/Buttons/IconButton",
  component: IconButton,
};

const FavoriteBorderIcon = `<span class="material-icons-outlined">
                              favorite_border
                            </span>`

const Template: StoryFn<typeof IconButton> = (args) => ({
  components: { IconButton },
  setup() {
    return { args };
  },
  template: ` <IconButton v-bind="args">
                <template v-slot:icon>
                  ${FavoriteBorderIcon}
                </template>
              </IconButton>
            `,
});

export const Default = Template.bind({});

export default MetaObject;
