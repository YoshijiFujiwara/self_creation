import { THiddenProps } from "~/data/ui_frameworks/material_ui/components/Hidden/interface";

const props: THiddenProps = {
  children: {
    value: null,
    default: null,
    description: ""
  },
  implementation: {
    value: "js",
    default: "js",
    description: ""
  },
  initialWidth: {
    value: "sm", // 公式とは違うけども
    default: null,
    description: ""
  },
  lgDown: {
    value: false,
    default: false,
    description: ""
  },
  lgUp: {
    value: false,
    default: false,
    description: ""
  },
  mdDown: {
    value: false,
    default: false,
    description: ""
  },
  mdUp: {
    value: false,
    default: false,
    description: ""
  },
  only: {
    value: "xs",
    default: null,
    description: ""
  },
  smDown: {
    value: false,
    default: false,
    description: ""
  },
  smUp: {
    value: false,
    default: false,
    description: ""
  },
  xlDown: {
    value: false,
    default: false,
    description: ""
  },
  xlUp: {
    value: false,
    default: false,
    description: ""
  },
  xsDown: {
    value: false,
    default: false,
    description: ""
  },
  xsUp: {
    value: false,
    default: false,
    description: ""
  }
};

export default props;
