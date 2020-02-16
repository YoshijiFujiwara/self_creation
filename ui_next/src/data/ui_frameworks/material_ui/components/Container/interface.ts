import { TOverride } from "~/interfaces/helper";
import { TPropProperty } from "~/interfaces/material_components";

export enum EPropName {
  CHILDREN = "children",
  CLASSES = "classes",
  COMPONENT = "component",
  DISABLE_GUTTERS = "disableGutters",
  FIXED = "fixed",
  MAX_WIDTH = "maxWidth"
}

const {
  CHILDREN,
  CLASSES,
  COMPONENT,
  DISABLE_GUTTERS,
  FIXED,
  MAX_WIDTH
} = EPropName;

export type TContainerProps = {
  [CHILDREN]: TPropProperty;
  [CLASSES]: TPropProperty;
  [COMPONENT]: TOverride<
    TPropProperty,
    {
      value: "div";
      default: "div";
    }
  >;
  [DISABLE_GUTTERS]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [FIXED]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [MAX_WIDTH]: TOverride<
    TPropProperty,
    {
      value: "xs" | "sm" | "md" | "lg" | "xl" | false;
      default: "lg";
    }
  >;
};
