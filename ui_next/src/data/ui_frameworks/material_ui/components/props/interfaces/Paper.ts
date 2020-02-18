import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TBooleanFalseProp,
  TDontChange
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  COMPONENT = "component",
  ELEVATION = "elevation",
  SQUARE = "square",
  VARIANT = "variant"
}

const { CHILDREN, CLASSES, COMPONENT, ELEVATION, SQUARE, VARIANT } = EProps;

export type TPaperProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [COMPONENT]: TDontChange;
  [ELEVATION]: TOverride<
    TEMPPropProperty,
    {
      value: number;
      default: 1;
    }
  >;
  [SQUARE]: TBooleanFalseProp;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "elevation" | "outlined";
      default: "elevation";
    }
  >;
};
