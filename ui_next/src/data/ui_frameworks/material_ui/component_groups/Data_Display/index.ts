import {
  EComponentGroupTitle,
  EComponentTitle,
  TComponentGroup
} from "~/interfaces/material_components";

const { DATA_DISPLAY } = EComponentGroupTitle;
const {
  AVATAR,
  BADGE,
  CHIP,
  DIVIDER,
  ICONS,
  MATERIAL_ICONS,
  LIST,
  TABLE,
  TOOLTIP,
  TYPOGRAPHY
} = EComponentTitle;

const componentGroup: TComponentGroup = {
  iconType: "user",
  title: DATA_DISPLAY,
  components: [
    { title: AVATAR, props: [] },
    { title: BADGE, props: [] },
    { title: CHIP, props: [] },
    { title: DIVIDER, props: [] },
    { title: ICONS, props: [] },
    { title: MATERIAL_ICONS, props: [] },
    { title: LIST, props: [] },
    { title: TABLE, props: [] },
    { title: TOOLTIP, props: [] },
    { title: TYPOGRAPHY, props: [] }
  ]
};

export default componentGroup;
