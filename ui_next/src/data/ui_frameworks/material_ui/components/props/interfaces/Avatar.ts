import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TDontChange,
  TStringNull
} from "~/interfaces/material_components";

export enum EProps {
  ALT = "alt",
  CHILDREN = "children",
  CLASSES = "classes",
  COMPONENT = "component",
  IMP_PROPS = "imgProps",
  SIZES = "sizes",
  SRC = "src",
  SRC_SET = "srcSet",
  VARIANT = "variant"
}

const {
  ALT,
  CHILDREN,
  CLASSES,
  COMPONENT,
  IMP_PROPS,
  SIZES,
  SRC,
  SRC_SET,
  VARIANT
} = EProps;

export type TAvatarProps = {
  [ALT]: TStringNull;
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [COMPONENT]: TOverride<
    TEMPPropProperty,
    {
      default: "div";
      changeable: false;
    }
  >;
  [IMP_PROPS]: TEMPPropProperty;
  [SIZES]: TStringNull;
  [SRC]: TStringNull;
  [SRC_SET]: TStringNull;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "circle" | "rounded" | "square";
      default: "circle";
    }
  >;
};
