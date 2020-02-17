import {
  TDontChange,
  TBooleanFalseProp
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  DISABLE_SPACING = "disableSpacing"
}

const { CHILDREN, CLASSES, DISABLE_SPACING } = EProps;

export type TCardActionsProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [DISABLE_SPACING]: TBooleanFalseProp;
};
