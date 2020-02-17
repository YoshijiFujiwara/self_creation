import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TDontChange,
  TBooleanFalseProp
} from "~/interfaces/material_components";

export enum EProps {
  AUTO_FOCUS = "autoFocus",
  AUTO_FOCUS_ITEM = "autoFocusItem",
  CHILDREN = "children",
  DISABLE_LIST_WRAP = "disableListWrap",
  VARIANT = "variant"
}

const {
  AUTO_FOCUS,
  AUTO_FOCUS_ITEM,
  CHILDREN,
  DISABLE_LIST_WRAP,
  VARIANT
} = EProps;

export type TMenuListProps = {
  [AUTO_FOCUS]: TBooleanFalseProp;
  [AUTO_FOCUS_ITEM]: TBooleanFalseProp;
  [CHILDREN]: TDontChange;
  [DISABLE_LIST_WRAP]: TBooleanFalseProp;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "menu" | "selectedMenu";
      default: "selectedMenu";
    }
  >;
};
