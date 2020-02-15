import {
  EComponentGroupTitle,
  EComponentTitle,
  TComponentGroup
} from "~/interfaces/material_components";

const { FEEDBACK } = EComponentGroupTitle;
const { PROGRESS, DIALOG, SNACKBAR, BACKDROP } = EComponentTitle;

const componentGroup: TComponentGroup = {
  iconType: "user",
  title: FEEDBACK,
  components: [
    { title: PROGRESS, props: [] },
    { title: DIALOG, props: [] },
    { title: SNACKBAR, props: [] },
    { title: BACKDROP, props: [] }
  ]
};

export default componentGroup;
