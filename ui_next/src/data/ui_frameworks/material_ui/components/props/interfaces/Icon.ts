import { TOverride } from "~/interfaces/helper";
import {
  TDontChange,
  TEMPPropProperty
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  COLOR = "color",
  COMPONENT = "component",
  FONT_SIZE = "fontSize"
}

const { CHILDREN, CLASSES, COLOR, COMPONENT, FONT_SIZE } = EProps;

export type TIconProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [COLOR]: TOverride<
    TEMPPropProperty,
    {
      value:
        | "inherit"
        | "primary"
        | "secondary"
        | "action"
        | "error"
        | "disabled";
      default: "inherit";
    }
  >;
  [COMPONENT]: TDontChange;
  [FONT_SIZE]: TOverride<
    TEMPPropProperty,
    {
      value: "inherit" | "default" | "small" | "large";
      default: "default";
    }
  >;
};
