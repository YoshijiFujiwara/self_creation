import {
  EComponentGroupTitle,
  EComponentTitle,
  TComponentGroup
} from "~/interfaces/material_components";

const { LAYOUT } = EComponentGroupTitle;
const { BOX, GRID, CONTAINER } = EComponentTitle;

const componentGroup: TComponentGroup = {
  iconType: "user",
  title: LAYOUT,
  components: [
    { title: BOX, props: [] },
    { title: CONTAINER, props: [] },
    { title: GRID, props: [] }
  ]
};

export default componentGroup;
