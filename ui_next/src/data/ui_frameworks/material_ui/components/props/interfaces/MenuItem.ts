import {
  TDontChange,
  TBooleanFalseProp,
  TBooleanNullProp
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  COMPONENT = "component",
  DENSE = "dense",
  DISABLE_GUTTERS = "disableGutters"
}

const { CHILDREN, CLASSES, COMPONENT, DENSE, DISABLE_GUTTERS } = EProps;

export type TMenuItemProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [COMPONENT]: TDontChange;
  [DENSE]: TBooleanNullProp;
  [DISABLE_GUTTERS]: TBooleanFalseProp;
};
