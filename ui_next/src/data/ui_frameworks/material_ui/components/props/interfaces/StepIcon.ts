import {
  TObjectNull,
  TNodeNull,
  TBooleanFalseProp
} from "~/interfaces/material_components";

export enum EProps {
  ACTIVE = "active",
  CLASSES = "classes",
  COMPLETED = "completed",
  ERROR = "error",
  ICON = "icon"
}

const { ACTIVE, CLASSES, COMPLETED, ERROR, ICON } = EProps;

export type TStepIconProps = {
  [ACTIVE]: TBooleanFalseProp;
  [CLASSES]: TObjectNull;
  [COMPLETED]: TBooleanFalseProp;
  [ERROR]: TBooleanFalseProp;
  [ICON]: TNodeNull;
};
