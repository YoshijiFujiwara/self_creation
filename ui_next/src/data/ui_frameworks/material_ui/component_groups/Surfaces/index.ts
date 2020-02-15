import App from "next/app";
import {
  EComponentGroupTitle,
  EComponentTitle,
  TComponentGroup
} from "~/interfaces/material_components";

const { SURFACES } = EComponentGroupTitle;
const { APP_BAR, PAPER, CARD, EXPANSION_PANEL } = EComponentTitle;

const componentGroup: TComponentGroup = {
  iconType: "user",
  title: SURFACES,
  components: [
    { title: APP_BAR, props: [] },
    {
      title: PAPER,
      props: [
        {
          name: "children",
          default: null
        },
        {
          name: "classes",
          default: null
        },
        {
          name: "component",
          default: "div"
        },
        {
          name: "elevation",
          default: 1
        },
        {
          name: "square",
          default: false
        },
        {
          name: "variant",
          default: "elevation"
        }
      ]
    },
    { title: CARD, props: [] },
    { title: EXPANSION_PANEL, props: [] }
  ]
};

export default componentGroup;
