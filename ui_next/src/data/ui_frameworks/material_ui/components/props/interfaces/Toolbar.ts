import { ElementType } from "react";
import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TBooleanFalseProp,
  TObjectNull,
  TNodeNull
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  COMPONENT = "component",
  DISABLE_GUTTERS = "disableGutters",
  VARIANT = "variant"
}

const { CHILDREN, CLASSES, COMPONENT, DISABLE_GUTTERS, VARIANT } = EProps;

export type TToolbarProps = {
  [CHILDREN]: TNodeNull;
  [CLASSES]: TObjectNull;
  [COMPONENT]: TOverride<
    TEMPPropProperty,
    {
      value: ElementType;
      default: "div";
    }
  >;
  [DISABLE_GUTTERS]: TBooleanFalseProp;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "regular" | "dense";
      default: "regular";
    }
  >;
};
