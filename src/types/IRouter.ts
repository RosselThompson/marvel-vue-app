import { RouteComponent } from "vue-router";

export interface IRoutes {
  path: string;
  name?: string;
  alias?: string;
  component: RouteComponent;
}
