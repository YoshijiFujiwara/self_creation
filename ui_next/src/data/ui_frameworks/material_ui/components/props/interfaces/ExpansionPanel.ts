import { TOverride } from "~/interfaces/helper";
import {
  TDontChange,
  TBooleanFalseProp,
  TEMPPropProperty,
  TFuncNull
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  DEFAULT_EXPANDED = "defaultExpanded",
  DISABLED = "disabled",
  EXPANDED = "expanded",
  ON_CHANGE = "onChange",
  TRANSITION_COMPONENT = "TransitionComponent",
  TRANSITION_PROPS = "TransitionProps"
}

const {
  CHILDREN,
  CLASSES,
  DEFAULT_EXPANDED,
  DISABLED,
  EXPANDED,
  ON_CHANGE,
  TRANSITION_COMPONENT,
  TRANSITION_PROPS
} = EProps;

export type TExpansionPanelProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [DEFAULT_EXPANDED]: TBooleanFalseProp;
  [DISABLED]: TBooleanFalseProp;
  [EXPANDED]: TOverride<
    TEMPPropProperty,
    {
      value: boolean | null;
    }
  >;
  [ON_CHANGE]: TFuncNull;
  [TRANSITION_COMPONENT]: TDontChange;
  [TRANSITION_PROPS]: TDontChange;
};
