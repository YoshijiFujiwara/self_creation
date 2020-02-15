import { TOverride } from "~/interfaces/helper";
import { TPropProperty } from "~/interfaces/material_components";

export enum EPropName {
  CELL_HEIGHT = "cellHeight",
  CHILDREN = "children",
  CLASSES = "classes",
  COLS = "cols",
  COMPONENT = "component",
  SPACING = "spacing"
}

const { CELL_HEIGHT, CHILDREN, CLASSES, COLS, COMPONENT, SPACING } = EPropName;

export type TGridListProps = {
  [CELL_HEIGHT]: TOverride<
    TPropProperty,
    {
      value: number | "auto";
      default: 180;
    }
  >;
  [CHILDREN]: TPropProperty;
  [CLASSES]: TPropProperty;
  [COLS]: TOverride<
    TPropProperty,
    {
      value: number;
      default: 2;
    }
  >;
  [COMPONENT]: TOverride<
    TPropProperty,
    {
      value: "ul";
      default: "ul";
    }
  >;
  [SPACING]: TOverride<
    TPropProperty,
    {
      value: number;
      default: 4;
    }
  >;
};
