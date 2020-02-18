import { ElementType } from "react";
import { TOverride } from "~/interfaces/helper";
import {
  TObjectNull,
  TEMPPropProperty
} from "~/interfaces/material_components";

export enum EProps {
  ANIMATION = "animation",
  CLASSES = "classes",
  COMPONENT = "component",
  HEIGHT = "height",
  VARIANT = "variant",
  WIDTH = "width"
}

const { ANIMATION, CLASSES, COMPONENT, HEIGHT, VARIANT, WIDTH } = EProps;

export type TSkeletonProps = {
  [ANIMATION]: TOverride<
    TEMPPropProperty,
    {
      value: "pulse" | "wave" | false;
      default: "pulse";
    }
  >;
  [CLASSES]: TObjectNull;
  [COMPONENT]: TOverride<
    TEMPPropProperty,
    {
      value: ElementType;
      default: "span";
    }
  >;
  [HEIGHT]: TOverride<
    TEMPPropProperty,
    {
      value: number | string | null;
    }
  >;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "text" | "rect" | "circle";
      default: "text";
    }
  >;
  [WIDTH]: TOverride<
    TEMPPropProperty,
    {
      value: number | string | null;
    }
  >;
};
