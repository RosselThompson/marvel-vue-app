import { mount } from "@vue/test-utils";
import Card from "../Card.vue";

const defaultProps = {
  id: 1,
  title: "Card Title",
  image: "https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg",
  isFavorited: true,
};

const wrapper = mount(Card, {
  props: defaultProps,
});

describe("Test card component", () => {
  test("should render component without problems", () => {
    const card = wrapper.find('[data-testid="card"]');
    expect(card.exists()).toBe(true);
  });

  test("should render component with title", () => {
    const card = wrapper.find('[data-testid="card"]');
    expect(card.text()).toContain(defaultProps.title);
  });

  test("should render component with image", () => {
    const cardImage = wrapper.find('[data-testid="card-image"]');
    expect(cardImage.attributes("style")).toContain(defaultProps.image);
  });

  test("should render component with isFavorited", () => {
    const favoriteIcon = wrapper.find('[data-testid="card-favorite-icon"]');
    expect(favoriteIcon.exists()).toBe(true);
  });

  test("should render component with onclick favorite button function", () => {
    const favoriteButton = wrapper.find('[data-testid="card-button"]');
    favoriteButton.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("on-click-favorite");
  });

  test("should render component with onclick favorite button function", () => {
    const cardImageButton = wrapper.find('[data-testid="card-image-button"]');
    cardImageButton.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("on-click-card");
  });
});
