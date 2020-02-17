import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TDontChange,
  TBooleanFalseProp
} from "~/interfaces/material_components";

export enum EProps {
  CLASSES = "classes",
  COLOR = "color",
  DISABLE_SHRINK = "disableShrink",
  SIZE = "size",
  THICKNESS = "thickness",
  VALUE = "value",
  VARIANT = "variant"
}

const {
  CLASSES,
  COLOR,
  DISABLE_SHRINK,
  SIZE,
  THICKNESS,
  VALUE,
  VARIANT
} = EProps;

export type TCircularProgressProps = {
  [CLASSES]: TDontChange;
  [COLOR]: TOverride<
    TEMPPropProperty,
    {
      value: "primary" | "secondary" | "inherit";
      default: "primary";
    }
  >;
  [DISABLE_SHRINK]: TBooleanFalseProp;
  [SIZE]: TOverride<
    TEMPPropProperty,
    {
      value: number | string;
      default: 40;
    }
  >;
  [THICKNESS]: TOverride<
    TEMPPropProperty,
    {
      value: number;
      default: 3.6;
    }
  >;
  [VALUE]: TOverride<
    TEMPPropProperty,
    {
      value: number;
      default: 0;
    }
  >;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "determinate" | "indeterminate" | "static";
      default: "indeterminate";
    }
  >;
};
