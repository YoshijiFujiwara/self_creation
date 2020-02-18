import { ElementType } from "react";
import { TOverride } from "~/interfaces/helper";
import {
  TObjectNull,
  TNodeNull,
  TEMPPropProperty,
  TStringNull
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  COLOR = "color",
  COMPONENT = "component",
  FONT_SIZE = "fontSize",
  HTML_COLOR = "htmlColor",
  SHAPE_RENDERING = "shapeRendering",
  TITLE_ACCESS = "titleAccess",
  VIEW_BOX = "viewBox"
}

const {
  CHILDREN,
  CLASSES,
  COLOR,
  COMPONENT,
  FONT_SIZE,
  HTML_COLOR,
  SHAPE_RENDERING,
  TITLE_ACCESS,
  VIEW_BOX
} = EProps;

export type TSvgIconProps = {
  [CHILDREN]: TNodeNull;
  [CLASSES]: TObjectNull;
  [COLOR]: TOverride<
    TEMPPropProperty,
    {
      value:
        | "action"
        | "disabled"
        | "error"
        | "inherit"
        | "primary"
        | "secondary";
      default: "inherit";
    }
  >;
  [COMPONENT]: TOverride<
    TEMPPropProperty,
    {
      value: ElementType;
      default: "svg";
    }
  >;
  [FONT_SIZE]: TOverride<
    TEMPPropProperty,
    {
      value: "default" | "inherit" | "large" | "small";
      default: "default";
    }
  >;
  [HTML_COLOR]: TStringNull;
  [SHAPE_RENDERING]: TStringNull;
  [TITLE_ACCESS]: TStringNull;
  [VIEW_BOX]: TOverride<
    TEMPPropProperty,
    {
      value: string;
      default: "0 0 24 24";
    }
  >;
};
