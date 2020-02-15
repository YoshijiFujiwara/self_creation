import { TContainerProps } from "./interface";

const props: TContainerProps = {
  children: {
    value: null,
    default: null,
    description: ""
  },
  classes: {
    value: null,
    default: null,
    description: ""
  },
  component: {
    value: "div",
    default: "div",
    description: ""
  },
  disableGutters: {
    value: false,
    default: false,
    description: ""
  },
  fixed: {
    value: false,
    default: false,
    description: ""
  },
  maxWidth: {
    value: "lg",
    default: "lg",
    description: ""
  }
};

export default props;
