import { TOverride } from "~/interfaces/helper";
import {
  TDontChange,
  TBooleanFalseProp,
  TEMPPropProperty
} from "~/interfaces/material_components";

export enum EProps {
  ANCHOR_ORIGIN = "anchorOrigin",
  BADGE_CONTENT = "badgeContent",
  CHILDREN = "children",
  CLASSES = "classes",
  COLOR = "color",
  COMPONENT = "component",
  INVISIBLE = "invisible",
  MAX = "max",
  OVERLAP = "overlap",
  SHOW_ZERO = "showZero",
  VARIANT = "variant"
}

const {
  ANCHOR_ORIGIN,
  BADGE_CONTENT,
  CHILDREN,
  CLASSES,
  COLOR,
  COMPONENT,
  INVISIBLE,
  MAX,
  OVERLAP,
  SHOW_ZERO,
  VARIANT
} = EProps;

export type TBadgeProps = {
  [ANCHOR_ORIGIN]: TOverride<
    TEMPPropProperty,
    {
      value: { horizontal: "left" | "right"; vertical: "bottom" | "top" };
      default: { vertical: "top"; horizontal: "right" };
    }
  >;
  [BADGE_CONTENT]: TDontChange;
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [COLOR]: TOverride<
    TEMPPropProperty,
    {
      value: "default" | "error" | "primary" | "secondary";
      default: "default";
    }
  >;
  [COMPONENT]: TDontChange;
  [INVISIBLE]: TOverride<
    TEMPPropProperty,
    {
      value: boolean;
    }
  >;
  [MAX]: TOverride<
    TEMPPropProperty,
    {
      value: number;
      default: 99;
    }
  >;
  [OVERLAP]: TOverride<
    TEMPPropProperty,
    {
      value: "circle" | "rectangle";
      default: "rectangle";
    }
  >;
  [SHOW_ZERO]: TBooleanFalseProp;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "dot" | "standard";
      default: "standard";
    }
  >;
};
