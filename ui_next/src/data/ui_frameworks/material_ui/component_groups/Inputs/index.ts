import { component as buttonComponent } from "~/data/ui_frameworks/material_ui/components/Button";
import {
  EComponentGroupTitle,
  EComponentTitle,
  TComponentGroup
} from "~/interfaces/material_components";

const { INPUTS } = EComponentGroupTitle;
const {
  CHECKBOX,
  DATE_TIME,
  RADIO,
  SELECT,
  SLIDER,
  SWITCH,
  TEXT_FIELD,
  TRANSFER_LIST
} = EComponentTitle;

const componentGroup: TComponentGroup = {
  iconType: "user",
  title: INPUTS,
  components: [
    buttonComponent,
    { title: CHECKBOX, props: [] },
    { title: DATE_TIME, props: [] },
    { title: RADIO, props: [] },
    { title: SELECT, props: [] },
    { title: SLIDER, props: [] },
    { title: SWITCH, props: [] },
    { title: TEXT_FIELD, props: [] },
    { title: TRANSFER_LIST, props: [] }
  ]
};

export default componentGroup;
