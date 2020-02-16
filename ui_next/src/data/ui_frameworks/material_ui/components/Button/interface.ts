import { TOverride } from "~/interfaces/helper";
import { TPropProperty } from "~/interfaces/material_components";

export enum EPropName {
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

export type TButtonProps = {
  [EPropName.CHILDREN]: TOverride<
    TPropProperty,
    {
      default: "ボタン";
    }
  >;
  [EPropName.CLASSES]: TPropProperty;
  [EPropName.COLOR]: TOverride<
    TPropProperty,
    {
      value: "default" | "inherit" | "primary" | "secondary";
      default: "default";
    }
  >;
  [EPropName.COMPONENT]: TOverride<
    TPropProperty,
    {
      value: "button";
      default: "button";
    }
  >;
  [EPropName.DISABLED]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [EPropName.DISABLE_ELEVATION]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [EPropName.DISABLE_FOCUS_RIPPLE]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [EPropName.DISABLE_RIPPLE]: TOverride<
    TPropProperty,
    {
      value: boolean;
    }
  >;
  [EPropName.END_ICON]: TPropProperty;
  [EPropName.FULL_WIDTH]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [EPropName.HREF]: TOverride<
    TPropProperty,
    {
      value: string;
    }
  >;
  [EPropName.SIZE]: TOverride<
    TPropProperty,
    {
      value: "small" | "medium" | "large";
      default: "medium";
    }
  >;
  [EPropName.START_ICON]: TPropProperty;
  [EPropName.VARIANT]: TOverride<
    TPropProperty,
    {
      value: "text" | "outlined" | "contained";
      default: "text";
    }
  >;
};
