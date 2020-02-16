import { TColorValue } from "~/data/ui_frameworks/material_ui/components/share/interface";
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
} = EPropName;

export type TButtonProps = {
  [CHILDREN]: TOverride<
    TPropProperty,
    {
      default: "ボタン";
    }
  >;
  [CLASSES]: TPropProperty;
  [COLOR]: TOverride<
    TPropProperty,
    {
      value: TColorValue;
      default: "default";
    }
  >;
  [COMPONENT]: TOverride<
    TPropProperty,
    {
      value: "button";
      default: "button";
    }
  >;
  [DISABLED]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [DISABLE_ELEVATION]: TOverride<
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
  [END_ICON]: TPropProperty;
  [FULL_WIDTH]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
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
      default: "medium";
    }
  >;
  [START_ICON]: TPropProperty;
  [VARIANT]: TOverride<
    TPropProperty,
    {
      value: "text" | "outlined" | "contained";
      default: "text";
    }
  >;
};
