import {
  TDontChange,
  TBooleanFalseProp,
  TEMPPropProperty,
  TFuncNull
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  COMPONENT = "component",
  ON_CHANGE = "onChange",
  SHOW_LABELS = "showLables",
  VALUE = "value"
}

const { CHILDREN, CLASSES, COMPONENT, ON_CHANGE, SHOW_LABELS, VALUE } = EProps;

export type TBottomNavigationProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [COMPONENT]: TDontChange;
  [ON_CHANGE]: TFuncNull;
  [SHOW_LABELS]: TBooleanFalseProp;
  [VALUE]: TEMPPropProperty;
};
