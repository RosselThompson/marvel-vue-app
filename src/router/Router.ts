import { IRoutes } from "@/types/IRouter";
import { createRouter, createWebHistory } from "vue-router";
import {
  CharactersPage,
  CharactersIdPage,
  ComicsPage,
  ComicsPageId,
  StoriesPage,
  StoriesPageId,
  FavoritesPage,
  NotFoundPage,
} from "@/pages";
import {
  CHARACTERS_URL,
  COMICS_URL,
  FAVORITES_URL,
  INDEX_URL,
  STORIES_URL,
} from "@/constants/Urls";

export const NOT_FOUND_NAME = "notFound";

const routes: IRoutes[] = [
  {
    path: INDEX_URL,
    alias: CHARACTERS_URL,
    name: "characters",
    component: CharactersPage,
  },
  {
    path: `${CHARACTERS_URL}/:id`,
    name: "charactersId",
    component: CharactersIdPage,
  },
  { path: COMICS_URL, name: "comics", component: ComicsPage },
  { path: `${COMICS_URL}/:id`, name: "comicsId", component: ComicsPageId },

  { path: STORIES_URL, name: "stories", component: StoriesPage },
  { path: `${STORIES_URL}/:id`, name: "storiesId", component: StoriesPageId },

  { path: FAVORITES_URL, name: "favorites", component: FavoritesPage },
  { path: "/:pathMatch(.*)*", name: NOT_FOUND_NAME, component: NotFoundPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
