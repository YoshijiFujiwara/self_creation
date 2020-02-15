import { TOverride } from "~/interfaces/helper";
import { TPropProperty } from "~/interfaces/material_components";

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

export type TGridProps = {
  [ALIGN_CONTENT]: TOverride<
    TPropProperty,
    {
      value:
        | "stretch"
        | "center"
        | "flex-start"
        | "flex-end"
        | "space-between"
        | "space-around";
      default: "stretch";
      description: "";
    }
  >;
  [ALIGN_ITEMS]: TOverride<
    TPropProperty,
    {
      value: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
      default: "stretch";
      description: "";
    }
  >;
  [CHILDREN]: TPropProperty;
  [CLASSES]: TPropProperty;
  [COMPONENT]: TOverride<
    TPropProperty,
    {
      value: "div";
      default: "div";
    }
  >;
  [CONTAINER]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [DIRECTION]: TOverride<
    TPropProperty,
    {
      value: "row" | "row-reverse" | "column" | "column-reverse";
      default: "row";
    }
  >;
  [ITEM]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [JUSTIFY]: TOverride<
    TPropProperty,
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
    TPropProperty,
    {
      value:
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
      default: false;
    }
  >;
  [MD]: TOverride<
    TPropProperty,
    {
      value:
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
      default: false;
    }
  >;
  [SM]: TOverride<
    TPropProperty,
    {
      value:
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
      default: false;
    }
  >;
  [SPACING]: TOverride<
    TPropProperty,
    {
      value: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
      default: 0;
    }
  >;
  [WRAP]: TOverride<
    TPropProperty,
    {
      value: "nowrap" | "wrap" | "wrap-reverse";
      default: "wrap";
    }
  >;
  [XL]: TOverride<
    TPropProperty,
    {
      value:
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
      default: false;
    }
  >;
  [XS]: TOverride<
    TPropProperty,
    {
      value:
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
      default: false;
    }
  >;
  [ZERO_MIN_WIDTH]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
};
