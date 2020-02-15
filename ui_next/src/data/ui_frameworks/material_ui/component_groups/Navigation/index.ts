import {
  EComponentGroupTitle,
  EComponentTitle,
  TComponentGroup
} from "~/interfaces/material_components";

const { NAVIGATION } = EComponentGroupTitle;
const {
  BOTTOM_NAVIGATION,
  BREADCRUMBS,
  DRAWER,
  LINK,
  MENU,
  STEPPER,
  TABS
} = EComponentTitle;

const componentGroup: TComponentGroup = {
  iconType: "user",
  title: NAVIGATION,
  components: [
    { title: BOTTOM_NAVIGATION, props: [] },
    { title: BREADCRUMBS, props: [] },
    { title: DRAWER, props: [] },
    { title: LINK, props: [] },
    { title: MENU, props: [] },
    { title: STEPPER, props: [] },
    { title: TABS, props: [] }
  ]
};

export default componentGroup;
