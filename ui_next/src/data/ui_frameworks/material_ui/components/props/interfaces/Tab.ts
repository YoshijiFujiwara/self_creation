import {
  TObjectNull,
  TNodeNull,
  TEMPPropProperty,
  TBooleanNullProp,
  TBooleanFalseProp
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  DISABLED = "disabled",
  DISABLE_FOCUS_RIPPLE = "disableFocusRipple",
  DISABLE_RIPPLE = "disableRipple",
  ICON = "icon",
  LABEL = "label",
  VALUE = "value",
  WRAPPED = "wrapped"
}

const {
  CHILDREN,
  CLASSES,
  DISABLED,
  DISABLE_FOCUS_RIPPLE,
  DISABLE_RIPPLE,
  ICON,
  LABEL,
  VALUE,
  WRAPPED
} = EProps;

export type TTabProps = {
  [CHILDREN]: TEMPPropProperty;
  [CLASSES]: TObjectNull;
  [DISABLED]: TBooleanFalseProp;
  [DISABLE_FOCUS_RIPPLE]: TBooleanFalseProp;
  [DISABLE_RIPPLE]: TBooleanNullProp;
  [ICON]: TNodeNull;
  [LABEL]: TNodeNull;
  [VALUE]: TEMPPropProperty;
  [WRAPPED]: TBooleanFalseProp;
};
