import { TOverride } from "~/interfaces/helper";
import {
  TDontChange,
  TEMPPropProperty
} from "~/interfaces/material_components";

export enum EProps {
  CELL_HEIGHT = "cellHeight",
  CHILDREN = "children",
  CLASSES = "classes",
  COLS = "color",
  COMPONENT = "component",
  SPACING = "spacing"
}

const { CELL_HEIGHT, CHILDREN, CLASSES, COLS, COMPONENT, SPACING } = EProps;

export type TGridListProps = {
  [CELL_HEIGHT]: TOverride<
    TEMPPropProperty,
    {
      value: number | "auto";
      default: 180;
    }
  >;
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [COLS]: TOverride<
    TEMPPropProperty,
    {
      value: number;
      default: 2;
    }
  >;
  [COMPONENT]: TDontChange;
  [SPACING]: TOverride<
    TEMPPropProperty,
    {
      value: number;
      default: 4;
    }
  >;
};
