import {
  TDontChange,
  TBooleanFalseProp
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  DIVIDERS = "dividers"
}

const { CHILDREN, CLASSES, DIVIDERS } = EProps;

export type TDialogContentProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [DIVIDERS]: TBooleanFalseProp;
};
