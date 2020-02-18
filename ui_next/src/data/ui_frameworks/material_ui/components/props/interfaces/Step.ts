import {
  TObjectNull,
  TNodeNull,
  TBooleanNullProp,
  TBooleanFalseProp
} from "~/interfaces/material_components";

export enum EProps {
  ACTIVE = "active",
  CHILDREN = "children",
  CLASSES = "classes",
  COMPLETED = "completed",
  DISABLED = "disabled	",
  EXPANDED = "expanded"
}

const { ACTIVE, CHILDREN, CLASSES, COMPLETED, DISABLED, EXPANDED } = EProps;

export type TStepProps = {
  [ACTIVE]: TBooleanNullProp;
  [CHILDREN]: TNodeNull;
  [CLASSES]: TObjectNull;
  [COMPLETED]: TBooleanFalseProp;
  [DISABLED]: TBooleanFalseProp;
  [EXPANDED]: TBooleanFalseProp;
};
