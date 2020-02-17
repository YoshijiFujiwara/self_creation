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
  DISABLE_FOCUS_RIPPLE = "disableFocusRipple",
  DISABLE_RIPPLE = "disableRipple",
  HREF = "href",
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
  HREF,
  SIZE,
  VARIANT
} = EProps;

export type TFabProps = {
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
  [DISABLE_RIPPLE]: TOverride<
    TEMPPropProperty,
    {
      value: boolean | null;
    }
  >;
  [HREF]: TStringNull;
  [SIZE]: TOverride<
    TEMPPropProperty,
    {
      value: "small" | "medium" | "large";
      default: "large";
    }
  >;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "round" | "expanded";
      default: "round";
    }
  >;
};
