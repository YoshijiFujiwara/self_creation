import { TOverride } from "~/interfaces/helper";
import {
  TDontChange,
  TEMPPropProperty
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  COLS = "color",
  COMPONENT = "component",
  ROWS = "rows"
}

const { CHILDREN, CLASSES, COLS, COMPONENT, ROWS } = EProps;

export type TGridListTileProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [COLS]: TOverride<
    TEMPPropProperty,
    {
      value: number;
      default: 1;
    }
  >;
  [COMPONENT]: TDontChange;
  [ROWS]: TOverride<
    TEMPPropProperty,
    {
      value: number;
      default: 1;
    }
  >;
};
