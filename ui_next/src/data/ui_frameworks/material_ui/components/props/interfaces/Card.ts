import {
  TDontChange,
  TBooleanFalseProp
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  RAISED = "raised"
}

const { CHILDREN, CLASSES, RAISED } = EProps;

export type TCardProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [RAISED]: TBooleanFalseProp;
};
