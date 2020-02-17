import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TDontChange,
  TBooleanFalseProp
} from "~/interfaces/material_components";

export enum EPropName {
  ALIGN_CONTENT = "alignContent",
  ALIGN_ITEMS = "alignItems",
  CHILDREN = "children",
  CLASSES = "classes",
  COMPONENT = "component",
  CONTAINER = "container",
  DIRECTION = "direction",
  ITEM = "item",
  JUSTIFY = "justify",
  LG = "lg",
  MD = "md",
  SM = "sm",
  SPACING = "spacing",
  WRAP = "wrap",
  XL = "xl",
  XS = "xs",
  ZERO_MIN_WIDTH = "zeroMinWidth"
}

const {
  ALIGN_CONTENT,
  ALIGN_ITEMS,
  CHILDREN,
  CLASSES,
  COMPONENT,
  CONTAINER,
  DIRECTION,
  ITEM,
  JUSTIFY,
  LG,
  MD,
  SM,
  SPACING,
  WRAP,
  XL,
  XS,
  ZERO_MIN_WIDTH
} = EPropName;

type TSizeValue =
  | false
  | "auto"
  | true
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

export type TGridProps = {
  [ALIGN_CONTENT]: TOverride<
    TEMPPropProperty,
    {
      value:
        | "stretch"
        | "center"
        | "flex-start"
        | "flex-end"
        | "space-between"
        | "space-around";
      default: "stretch";
    }
  >;
  [ALIGN_ITEMS]: TOverride<
    TEMPPropProperty,
    {
      value: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
      default: "stretch";
    }
  >;
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [COMPONENT]: TDontChange;
  [CONTAINER]: TBooleanFalseProp;
  [DIRECTION]: TOverride<
    TEMPPropProperty,
    {
      value: "row" | "row-reverse" | "column" | "column-reverse";
      default: "row";
    }
  >;
  [ITEM]: TBooleanFalseProp;
  [JUSTIFY]: TOverride<
    TEMPPropProperty,
    {
      value:
        | "flex-start"
        | "center"
        | "flex-end"
        | "space-between"
        | "space-around"
        | "space-evenly";
      default: "flex-start";
    }
  >;
  [LG]: TOverride<
    TEMPPropProperty,
    {
      value: TSizeValue;
      default: false;
    }
  >;
  [MD]: TOverride<
    TEMPPropProperty,
    {
      value: TSizeValue;
      default: false;
    }
  >;
  [SM]: TOverride<
    TEMPPropProperty,
    {
      value: TSizeValue;
      default: false;
    }
  >;
  [SPACING]: TOverride<
    TEMPPropProperty,
    {
      value: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
      default: 0;
    }
  >;
  [WRAP]: TOverride<
    TEMPPropProperty,
    {
      value: "nowrap" | "wrap" | "wrap-reverse";
      default: "wrap";
    }
  >;
  [XL]: TOverride<
    TEMPPropProperty,
    {
      value: TSizeValue;
      default: false;
    }
  >;
  [XS]: TOverride<
    TEMPPropProperty,
    {
      value: TSizeValue;
      default: false;
    }
  >;
  [ZERO_MIN_WIDTH]: TBooleanFalseProp;
};
