import { ElementType } from "react";
import { TOverride } from "~/interfaces/helper";
import {
  TObjectNull,
  TNodeNull,
  TEMPPropProperty,
  TBooleanFalseProp
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  COMPONENT = "component",
  HOVER = "hover",
  SELECTED = "selected"
}

const { CHILDREN, CLASSES, COMPONENT, HOVER, SELECTED } = EProps;

export type TTableRowProps = {
  [CHILDREN]: TNodeNull;
  [CLASSES]: TObjectNull;
  [COMPONENT]: TOverride<
    TEMPPropProperty,
    {
      value: ElementType;
      default: "tr";
    }
  >;
  [HOVER]: TBooleanFalseProp;
  [SELECTED]: TBooleanFalseProp;
};
