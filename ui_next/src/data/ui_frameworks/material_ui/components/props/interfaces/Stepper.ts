import { ElementType } from "react";
import { TOverride } from "~/interfaces/helper";
import {
  TObjectNull,
  TNodeNull,
  TEMPPropProperty,
  TBooleanFalseProp,
  TNumberWithDefault
} from "~/interfaces/material_components";

export enum EProps {
  ACTIVE_STEP = "activeStep",
  ALTERNATIVE_LABEL = "alternativeLabel",
  CHILDREN = "children",
  CLASSES = "classes",
  CONNECTOR = "connector",
  NON_LINEAR = "nonLinear",
  ORIENTATION = "orientation"
}

const {
  ACTIVE_STEP,
  ALTERNATIVE_LABEL,
  CHILDREN,
  CLASSES,
  CONNECTOR,
  NON_LINEAR,
  ORIENTATION
} = EProps;

export type TStepperProps = {
  [ACTIVE_STEP]: TNumberWithDefault<0>;
  [ALTERNATIVE_LABEL]: TBooleanFalseProp;
  [CHILDREN]: TNodeNull;
  [CLASSES]: TObjectNull;
  [CONNECTOR]: TOverride<
    TEMPPropProperty,
    {
      value: ElementType;
      default: any;
    }
  >;
  [NON_LINEAR]: TBooleanFalseProp;
  [ORIENTATION]: TOverride<
    TEMPPropProperty,
    {
      value: "horizontal" | "vertical";
      default: "horizontal";
    }
  >;
};
