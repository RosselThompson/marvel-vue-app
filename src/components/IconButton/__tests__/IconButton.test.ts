import { mount } from "@vue/test-utils";
import IconButton from "../IconButton.vue";

const FavoriteBorderIcon = `<span data-testid="favorite-icon" class="material-icons-outlined">
                              favorite_border
                            </span>`;

const wrapper = mount(IconButton, {
  slots: {
    icon: FavoriteBorderIcon,
  },
});

describe("Test icon button component", () => {
  test("should render component without problems", () => {
    const iconButton = wrapper.find('[data-testid="icon-button"]');
    expect(iconButton.exists()).toBe(true);
  });

  test("should render component with icon slot", () => {
    const favoriteIcon = wrapper.find('[data-testid="favorite-icon"]');
    expect(favoriteIcon.exists()).toBe(true);
  });

  test("should render component with onClick function", () => {
    const iconButton = wrapper.find('[data-testid="icon-button"]');
    iconButton.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('on-click-icon-button');
  });
});
