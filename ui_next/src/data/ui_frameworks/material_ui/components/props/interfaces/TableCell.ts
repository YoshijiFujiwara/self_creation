import { ElementType } from "react";
import { TOverride } from "~/interfaces/helper";
import {
  TObjectNull,
  TNodeNull,
  TEMPPropProperty,
  TStringNull
} from "~/interfaces/material_components";

export enum EProps {
  ALIGN = "align",
  CHILDREN = "children",
  CLASSES = "classes",
  COMPONENT = "component",
  PADDING = "padding",
  SCOPE = "scope",
  SIZE = "size",
  SORT_DIRECTION = "sortDirection",
  VARIANT = "variant"
}

const {
  ALIGN,
  CHILDREN,
  CLASSES,
  COMPONENT,
  PADDING,
  SCOPE,
  SIZE,
  SORT_DIRECTION,
  VARIANT
} = EProps;

export type TTableCellProps = {
  [ALIGN]: TOverride<
    TEMPPropProperty,
    {
      value: "inherit" | "left" | "center" | "right" | "justify";
      default: "inherit";
    }
  >;
  [CHILDREN]: TNodeNull;
  [CLASSES]: TObjectNull;
  [COMPONENT]: TOverride<
    TEMPPropProperty,
    {
      value: ElementType | null;
    }
  >;
  [PADDING]: TOverride<
    TEMPPropProperty,
    {
      value: "default" | "checkbox" | "none" | null;
    }
  >;
  [SCOPE]: TStringNull;
  [SIZE]: TOverride<
    TEMPPropProperty,
    {
      value: "small" | "medium" | null;
    }
  >;
  [SORT_DIRECTION]: TOverride<
    TEMPPropProperty,
    {
      value: "asc" | "desc" | false | null;
    }
  >;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "head" | "body" | "footer" | null;
    }
  >;
};
