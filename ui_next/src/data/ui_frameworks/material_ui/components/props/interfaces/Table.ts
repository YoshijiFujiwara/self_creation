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
  PADDING = "padding",
  SIZE = "size",
  STICKY_HEADER = "stickyHeader"
}

const { CHILDREN, CLASSES, COMPONENT, PADDING, SIZE, STICKY_HEADER } = EProps;

export type TTableProps = {
  [CHILDREN]: TNodeNull;
  [CLASSES]: TObjectNull;
  [COMPONENT]: TOverride<
    TEMPPropProperty,
    {
      value: ElementType;
      default: "table";
    }
  >;
  [PADDING]: TOverride<
    TEMPPropProperty,
    {
      value: "default" | "checkbox" | "none";
      default: "default";
    }
  >;
  [SIZE]: TOverride<
    TEMPPropProperty,
    {
      value: "small" | "medium";
      default: "medium";
    }
  >;
  [STICKY_HEADER]: TBooleanFalseProp;
};
