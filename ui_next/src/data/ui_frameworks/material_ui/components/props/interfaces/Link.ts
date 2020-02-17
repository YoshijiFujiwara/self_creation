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
  TYPOGRAPHY_CLASSES = "TypographyClasses",
  UNDERLINE = "underline",
  VARIANT = "variant"
}

const {
  CHILDREN,
  CLASSES,
  COLOR,
  COMPONENT,
  TYPOGRAPHY_CLASSES,
  UNDERLINE,
  VARIANT
} = EProps;

export type TLinkProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [COLOR]: TOverride<
    TEMPPropProperty,
    {
      value:
        | "default"
        | "error"
        | "inherit"
        | "primary"
        | "secondary"
        | "textPrimary"
        | "textSecondary";
      default: "primary";
    }
  >;
  [COMPONENT]: TDontChange;
  [TYPOGRAPHY_CLASSES]: TEMPPropProperty;
  [UNDERLINE]: TOverride<
    TEMPPropProperty,
    {
      value: "none" | "hover" | "always";
      default: "hover";
    }
  >;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: string;
      default: "inherit";
    }
  >;
};
