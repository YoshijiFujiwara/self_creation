import { ElementType } from "react";
import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TObjectNull,
  TNodeNull,
  TBooleanFalseProp
} from "~/interfaces/material_components";

export enum EProps {
  ALIGN = "align",
  CHILDREN = "children",
  CLASSES = "classes",
  COLOR = "color",
  COMPONENT = "component",
  DISPLAY = "display",
  GUTTER_BOTTOM = "gutterBottom",
  NO_WRAP = "noWrap",
  PARAGRAPH = "paragraph",
  VARIANT = "variant",
  VARIANT_MAPPING = "variantMapping"
}

const {
  ALIGN,
  CHILDREN,
  CLASSES,
  COLOR,
  COMPONENT,
  DISPLAY,
  GUTTER_BOTTOM,
  NO_WRAP,
  PARAGRAPH,
  VARIANT,
  VARIANT_MAPPING
} = EProps;

export type TTypographyProps = {
  [ALIGN]: TOverride<
    TEMPPropProperty,
    {
      value: "inherit" | "left" | "center" | "right" | "justify";
      default: "inherit";
    }
  >;
  [CHILDREN]: TNodeNull;
  [CLASSES]: TObjectNull;
  [COLOR]: TOverride<
    TEMPPropProperty,
    {
      value:
        | "initial"
        | "inherit"
        | "primary"
        | "secondary"
        | "textPrimary"
        | "textSecondary"
        | "error";
      default: "initial";
    }
  >;
  [COMPONENT]: TOverride<
    TEMPPropProperty,
    {
      value: ElementType | null;
    }
  >;
  [DISPLAY]: TOverride<
    TEMPPropProperty,
    {
      value: "initial" | "block" | "inline";
      default: "initial";
    }
  >;
  [GUTTER_BOTTOM]: TBooleanFalseProp;
  [NO_WRAP]: TBooleanFalseProp;
  [PARAGRAPH]: TBooleanFalseProp;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value:
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6"
        | "subtitle1"
        | "subtitle2"
        | "body1"
        | "body2"
        | "caption"
        | "button"
        | "overline"
        | "srOnly"
        | "inherit";
      default: "body1";
    }
  >;
  [VARIANT_MAPPING]: TOverride<
    TEMPPropProperty,
    {
      value: object;
      default: {
        h1: "h1";
        h2: "h2";
        h3: "h3";
        h4: "h4";
        h5: "h5";
        h6: "h6";
        subtitle1: "h6";
        subtitle2: "h6";
        body1: "p";
        body2: "p";
      };
    }
  >;
};
