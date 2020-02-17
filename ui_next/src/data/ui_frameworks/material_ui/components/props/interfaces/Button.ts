import { TOverride } from "~/interfaces/helper";
import {
  TDontChange,
  TEMPPropProperty,
  TBooleanFalseProp,
  TStringNull
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  COLOR = "color",
  COMPONENT = "component",
  DISABLED = "disabled",
  DISABLE_ELEVATION = "disableElevation",
  DISABLE_FOCUS_RIPPLE = "disableFocusRipple",
  DISABLE_RIPPLE = "disableRipple",
  END_ICON = "endIcon",
  FULL_WIDTH = "fullWidth",
  HREF = "href",
  SIZE = "size",
  START_ICON = "startIcon",
  VARIANT = "variant"
}

const {
  CHILDREN,
  CLASSES,
  COLOR,
  COMPONENT,
  DISABLED,
  DISABLE_ELEVATION,
  DISABLE_FOCUS_RIPPLE,
  DISABLE_RIPPLE,
  END_ICON,
  FULL_WIDTH,
  HREF,
  SIZE,
  START_ICON,
  VARIANT
} = EProps;

export type TButtonProps = {
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
  [DISABLE_ELEVATION]: TBooleanFalseProp;
  [DISABLE_FOCUS_RIPPLE]: TBooleanFalseProp;
  [DISABLE_RIPPLE]: TOverride<
    TEMPPropProperty,
    {
      value: boolean | null;
    }
  >;
  [END_ICON]: TDontChange;
  [FULL_WIDTH]: TBooleanFalseProp;
  [HREF]: TStringNull;
  [SIZE]: TOverride<
    TEMPPropProperty,
    {
      value: "small" | "medium" | "large";
      default: "medium";
    }
  >;
  [START_ICON]: TDontChange;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "text" | "outlined" | "contained";
      default: "text";
    }
  >;
};
