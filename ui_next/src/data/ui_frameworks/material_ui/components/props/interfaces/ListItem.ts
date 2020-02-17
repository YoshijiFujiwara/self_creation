import { TOverride } from "~/interfaces/helper";
import {
  TDontChange,
  TEMPPropProperty,
  TBooleanFalseProp
} from "~/interfaces/material_components";

export enum EProps {
  ALIGN_ITEMS = "alignItems",
  AUTO_FOCUS = "autoFocus",
  BUTTON = "button",
  CHILDREN = "children",
  CLASSES = "classes",
  COMPONENT = "component",
  CONTAINER_COMPONENT = "ContainerComponent",
  CONTAINER_PROPS = "ContainerProps",
  DENSE = "dense",
  DISABLED = "disabled",
  DISABLE_GUTTERS = "disableGutters",
  DIVIDER = "divider",
  SELECTED = "selected"
}

const {
  ALIGN_ITEMS,
  AUTO_FOCUS,
  BUTTON,
  CHILDREN,
  CLASSES,
  COMPONENT,
  CONTAINER_COMPONENT,
  CONTAINER_PROPS,
  DENSE,
  DISABLED,
  DISABLE_GUTTERS,
  DIVIDER,
  SELECTED
} = EProps;

export type TListItemProps = {
  [ALIGN_ITEMS]: TOverride<
    TEMPPropProperty,
    {
      value: "flex-start" | "center";
      default: "center";
    }
  >;
  [AUTO_FOCUS]: TBooleanFalseProp;
  [BUTTON]: TBooleanFalseProp;
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [COMPONENT]: TDontChange;
  [CONTAINER_COMPONENT]: TDontChange;
  [CONTAINER_PROPS]: TOverride<
    TEMPPropProperty,
    {
      value: object;
      default: {};
    }
  >;
  [DENSE]: TBooleanFalseProp;
  [DISABLED]: TBooleanFalseProp;
  [DISABLE_GUTTERS]: TBooleanFalseProp;
  [DIVIDER]: TBooleanFalseProp;
  [SELECTED]: TBooleanFalseProp;
};
