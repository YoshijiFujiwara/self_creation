import { ElementType } from "react";
import { TOverride } from "~/interfaces/helper";
import {
  TObjectNull,
  TNodeNull,
  TEMPPropProperty
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  COMPONENT = "component"
}

const { CHILDREN, CLASSES, COMPONENT } = EProps;

export type TTableContainerProps = {
  [CHILDREN]: TNodeNull;
  [CLASSES]: TObjectNull;
  [COMPONENT]: TOverride<
    TEMPPropProperty,
    {
      value: ElementType;
      default: "div";
    }
  >;
};
