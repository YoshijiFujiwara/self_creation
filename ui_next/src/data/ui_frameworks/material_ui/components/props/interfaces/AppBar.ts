import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TDontChange
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  COLOR = "color",
  POSITION = "position"
}

const { CHILDREN, CLASSES, COLOR, POSITION } = EProps;

export type TAppBarProps = {
  [CHILDREN]: TEMPPropProperty;
  [CLASSES]: TDontChange;
  [COLOR]: TOverride<
    TEMPPropProperty,
    {
      value: "default" | "inherit" | "primary" | "secondary" | "transparent";
      default: "primary";
    }
  >;
  [POSITION]: TOverride<
    TEMPPropProperty,
    {
      value: "absolute" | "fixed" | "relative" | "static" | "sticky";
      default: "fixed";
    }
  >;
};
