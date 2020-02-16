import { TFABProps } from "~/data/ui_frameworks/material_ui/components/FloatingActionButton/interface";

const props: TFABProps = {
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
    default: null,
    description: ""
  },
  href: {
    value: "",
    default: null,
    description: ""
  },
  size: {
    value: "large",
    default: "large",
    description: ""
  },
  variant: {
    value: "round",
    default: "round",
    description: ""
  }
};

export default props;
