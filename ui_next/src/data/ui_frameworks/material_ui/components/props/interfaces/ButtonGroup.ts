import { TOverride } from "~/interfaces/helper";
import {
  TDontChange,
  TEMPPropProperty,
  TBooleanFalseProp
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  COLOR = "color",
  COMPONENT = "component",
  DISABLED = "disabled",
  DISABLE_FOCUS_RIPPLE = "disableFocusRipple",
  DISABLE_RIPPLE = "disableRipple",
  FULL_WIDTH = "fullWidth",
  ORIENTATION = "orientation",
  SIZE = "size",
  VARIANT = "variant"
}

const {
  CHILDREN,
  CLASSES,
  COLOR,
  COMPONENT,
  DISABLED,
  DISABLE_FOCUS_RIPPLE,
  DISABLE_RIPPLE,
  FULL_WIDTH,
  ORIENTATION,
  SIZE,
  VARIANT
} = EProps;

export type TButtonGroupProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [COLOR]: TOverride<
    TEMPPropProperty,
    {
      value: "default" | "inherit" | "primary" | "secondary";
      default: "default";
    }
  >;
  [COMPONENT]: TDontChange;
  [DISABLED]: TBooleanFalseProp;
  [DISABLE_FOCUS_RIPPLE]: TBooleanFalseProp;
  [DISABLE_RIPPLE]: TBooleanFalseProp;
  [DISABLE_RIPPLE]: TBooleanFalseProp;
  [FULL_WIDTH]: TBooleanFalseProp;
  [ORIENTATION]: TOverride<
    TEMPPropProperty,
    {
      value: "vertical" | "horizontal";
      default: "horizontal";
    }
  >;
  [SIZE]: TOverride<
    TEMPPropProperty,
    {
      value: "small" | "medium" | "large";
      default: "medium";
    }
  >;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "text" | "outlined" | "contained";
      default: "outlined";
    }
  >;
};
