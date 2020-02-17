import {
  TDontChange,
  TBooleanFalseProp
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  DISBLE_SPACING = "disableSpacing"
}

const { CHILDREN, CLASSES, DISBLE_SPACING } = EProps;

export type TDialogActionProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [DISBLE_SPACING]: TBooleanFalseProp;
};
