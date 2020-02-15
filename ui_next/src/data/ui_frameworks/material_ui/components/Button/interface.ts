// [FIY] https://stackoverflow.com/questions/43080547/how-to-override-type-properties-in-typescript
// [ex] type HexColorLine = Override<Line, { color: number }>
import { PropProperty } from "~/interfaces/material_components";

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
    PropProperty,
    {
      default: "ボタン";
    }
  >;
  [EPropName.CLASSES]: PropProperty;
  [EPropName.COLOR]: Override<
    PropProperty,
    {
      value: "default" | "inherit" | "primary" | "secondary";
      default: "default";
    }
  >;
  [EPropName.COMPONENT]: Override<
    PropProperty,
    {
      value: "button";
      default: "button";
    }
  >;
  [EPropName.DISABLED]: Override<
    PropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [EPropName.DISABLE_ELEVATION]: Override<
    PropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [EPropName.DISABLE_FOCUS_RIPPLE]: Override<
    PropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [EPropName.DISABLE_RIPPLE]: Override<
    PropProperty,
    {
      value: boolean;
    }
  >;
  [EPropName.END_ICON]: PropProperty;
  [EPropName.FULL_WIDTH]: Override<
    PropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [EPropName.HREF]: Override<
    PropProperty,
    {
      value: string;
    }
  >;
  [EPropName.SIZE]: Override<
    PropProperty,
    {
      value: "small" | "medium" | "large";
      default: "medium";
    }
  >;
  [EPropName.START_ICON]: PropProperty;
  [EPropName.VARIANT]: Override<
    PropProperty,
    {
      value: "text" | "outlined" | "contained";
      default: "text";
    }
  >;
};
