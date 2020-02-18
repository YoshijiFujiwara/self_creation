import { ElementType } from "react";
import { TOverride } from "~/interfaces/helper";
import {
  TObjectNull,
  TNodeNull,
  TEMPPropProperty,
  TBooleanFalseProp
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  DISABLED = "disabled",
  ERROR = "error",
  ICON = "icon",
  OPTIONAL = "optional",
  STEP_ICON_COMPONENT = "StepIconComponent",
  STEP_ICON_PROPS = "StepIconProps"
}

const {
  CHILDREN,
  CLASSES,
  DISABLED,
  ERROR,
  ICON,
  OPTIONAL,
  STEP_ICON_COMPONENT,
  STEP_ICON_PROPS
} = EProps;

export type TStepLabelProps = {
  [CHILDREN]: TNodeNull;
  [CLASSES]: TObjectNull;
  [DISABLED]: TBooleanFalseProp;
  [ERROR]: TBooleanFalseProp;
  [ICON]: TNodeNull;
  [OPTIONAL]: TNodeNull;
  [STEP_ICON_COMPONENT]: TOverride<
    TEMPPropProperty,
    {
      value: ElementType;
    }
  >;
  [STEP_ICON_PROPS]: TObjectNull;
};
