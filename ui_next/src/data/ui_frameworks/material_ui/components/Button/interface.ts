// [FIY] https://stackoverflow.com/questions/43080547/how-to-override-type-properties-in-typescript
// [ex] type HexColorLine = Override<Line, { color: number }>
import { TPropProperty } from "~/interfaces/material_components";

type Override<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;

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
  [EPropName.CHILDREN]: Override<
    TPropProperty,
    {
      default: "ボタン";
    }
  >;
  [EPropName.CLASSES]: TPropProperty;
  [EPropName.COLOR]: Override<
    TPropProperty,
    {
      value: "default" | "inherit" | "primary" | "secondary";
      default: "default";
    }
  >;
  [EPropName.COMPONENT]: Override<
    TPropProperty,
    {
      value: "button";
      default: "button";
    }
  >;
  [EPropName.DISABLED]: Override<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [EPropName.DISABLE_ELEVATION]: Override<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [EPropName.DISABLE_FOCUS_RIPPLE]: Override<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [EPropName.DISABLE_RIPPLE]: Override<
    TPropProperty,
    {
      value: boolean;
    }
  >;
  [EPropName.END_ICON]: TPropProperty;
  [EPropName.FULL_WIDTH]: Override<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [EPropName.HREF]: Override<
    TPropProperty,
    {
      value: string;
    }
  >;
  [EPropName.SIZE]: Override<
    TPropProperty,
    {
      value: "small" | "medium" | "large";
      default: "medium";
    }
  >;
  [EPropName.START_ICON]: TPropProperty;
  [EPropName.VARIANT]: Override<
    TPropProperty,
    {
      value: "text" | "outlined" | "contained";
      default: "text";
    }
  >;
};
