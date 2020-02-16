import { TOverride } from "~/interfaces/helper";
import { TPropProperty } from "~/interfaces/material_components";

export enum EPropName {
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
} = EPropName;

export type TFABProps = {
  [CHILDREN]: TPropProperty;
  [CLASSES]: TPropProperty;
  [COLOR]: TOverride<
    TPropProperty,
    {
      value: "default" | "inherit" | "primary" | "secondary";
      default: "default";
    }
  >;
  [COMPONENT]: TOverride<
    TPropProperty,
    {
      value: "div";
      default: "div";
    }
  >;
  [DISABLED]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [DISABLE_FOCUS_RIPPLE]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [DISABLE_RIPPLE]: TOverride<
    TPropProperty,
    {
      value: boolean;
    }
  >;
  [HREF]: TOverride<
    TPropProperty,
    {
      value: string;
    }
  >;
  [SIZE]: TOverride<
    TPropProperty,
    {
      value: "small" | "medium" | "large";
      default: "large";
    }
  >;
  [VARIANT]: TOverride<
    TPropProperty,
    {
      value: "round" | "extended";
      default: "round";
    }
  >;
};
