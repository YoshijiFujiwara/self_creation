import { TButtonGroupProps } from "./interface";

const props: TButtonGroupProps = {
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
  color: {
    value: "default",
    default: "default",
    description: ""
  },
  component: {
    value: "div",
    default: "div",
    description: ""
  },
  disabled: {
    value: false,
    default: false,
    description: ""
  },
  disableFocusRipple: {
    value: false,
    default: false,
    description: ""
  },
  disableRipple: {
    value: false,
    default: false,
    description: ""
  },
  fullWidth: {
    value: false,
    default: false,
    description: ""
  },
  orientation: {
    value: "horizontal",
    default: "horizontal",
    description: ""
  },
  size: {
    value: "medium",
    default: "medium",
    description: ""
  },
  variant: {
    value: "outlined",
    default: "outlined",
    description: ""
  }
};

export default props;
