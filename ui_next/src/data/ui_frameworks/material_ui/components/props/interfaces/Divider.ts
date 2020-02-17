import { TOverride } from "~/interfaces/helper";
import {
  TDontChange,
  TBooleanFalseProp,
  TEMPPropProperty
} from "~/interfaces/material_components";

export enum EProps {
  ABSOLUTE = "absolute",
  CLASSES = "classes",
  COMPONENT = "component",
  FLEX_ITEM = "flexItem",
  LIGHT = "light",
  ORIENTATION = "orientation",
  VARIANT = "variant"
}

const {
  ABSOLUTE,
  CLASSES,
  COMPONENT,
  FLEX_ITEM,
  LIGHT,
  ORIENTATION,
  VARIANT
} = EProps;

export type TDividerProps = {
  [ABSOLUTE]: TBooleanFalseProp;
  [CLASSES]: TDontChange;
  [COMPONENT]: TDontChange;
  [FLEX_ITEM]: TBooleanFalseProp;
  [LIGHT]: TBooleanFalseProp;
  [ORIENTATION]: TOverride<
    TEMPPropProperty,
    {
      value: "horizontal" | "vertical";
      default: "horizontal";
    }
  >;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "fullWidth" | "inset" | "middle";
      default: "fullWidth";
    }
  >;
};
