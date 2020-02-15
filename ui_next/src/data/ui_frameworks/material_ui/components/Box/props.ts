import { TBoxProps } from "~/data/ui_frameworks/material_ui/components/Box/interface";

const props: TBoxProps = {
  children: {
    value: null,
    default: null,
    description: ""
  },
  clone: {
    value: false,
    default: false,
    description: ""
  },
  component: {
    value: "div",
    default: "div",
    description: ""
  }
};

export default props;
