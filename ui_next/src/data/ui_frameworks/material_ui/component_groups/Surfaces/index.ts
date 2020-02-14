import { TComponentGroup } from "~/interfaces/material_components";

const componentGroup: TComponentGroup = {
  iconType: "user",
  title: "Surfaces",
  components: [
    { title: "App Bar", props: [] },
    {
      title: "Paper",
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
    { title: "Card", props: [] },
    { title: "Expansion Panel", props: [] }
  ]
};

export default componentGroup;
