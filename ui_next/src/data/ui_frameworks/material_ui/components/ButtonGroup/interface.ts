// [FIY] https://stackoverflow.com/questions/43080547/how-to-override-type-properties-in-typescript
// [ex] type HexColorLine = TOverride<Line, { color: number }>
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
} = EPropName;

export type TButtonGroupProps = {
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
      default: false;
    }
  >;
  [FULL_WIDTH]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [ORIENTATION]: TOverride<
    TPropProperty,
    {
      value: "vertical" | "horizontal";
      default: "horizontal";
    }
  >;
  [SIZE]: TOverride<
    TPropProperty,
    {
      value: "small" | "medium" | "large";
      default: "medium";
    }
  >;
  [VARIANT]: TOverride<
    TPropProperty,
    {
      value: "text" | "outlined" | "contained";
      default: "outlined";
    }
  >;
};
