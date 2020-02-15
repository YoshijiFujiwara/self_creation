import { TButtonProps } from "./interface";

const props: TButtonProps = {
  children: {
    value: "ボタン",
    default: "ボタン",
    description: "The content of the button."
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
    value: "button",
    default: "button",
    description: ""
  },
  disabled: {
    value: false,
    default: false,
    description: ""
  },
  disableElevation: {
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
    default: null,
    description: ""
  },
  endIcon: {
    value: null,
    default: null,
    description: ""
  },
  fullWidth: {
    value: false,
    default: false,
    description: ""
  },
  href: {
    value: "",
    default: null,
    description: ""
  },
  size: {
    value: "medium",
    default: "medium",
    description: ""
  },
  startIcon: {
    value: null,
    default: null,
    description: ""
  },
  variant: {
    value: "contained",
    default: "text",
    description: ""
  }
};

export default props;
