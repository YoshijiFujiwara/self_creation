import {
  TEMPPropProperty,
  TBooleanFalseProp,
  TObjectNull,
  TNodeNull,
  TBooleanNullProp
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  DISABLED = "disabled",
  DISABLE_FOCUS_RIPPLE = "disableFocusRipple",
  DISABLE_RIPPLE = "disableRipple",
  SELECTED = "selected",
  VALUE = "value"
}

const {
  CHILDREN,
  CLASSES,
  DISABLED,
  DISABLE_FOCUS_RIPPLE,
  DISABLE_RIPPLE,
  SELECTED,
  VALUE
} = EProps;

export type TToggleButtonProps = {
  [CHILDREN]: TNodeNull;
  [CLASSES]: TObjectNull;
  [DISABLED]: TBooleanFalseProp;
  [DISABLE_FOCUS_RIPPLE]: TBooleanFalseProp;
  [DISABLE_RIPPLE]: TBooleanFalseProp;
  [SELECTED]: TBooleanNullProp;
  [VALUE]: TEMPPropProperty;
};
