import { ElementType } from "react";
import { TOverride } from "~/interfaces/helper";
import {
  TObjectNull,
  TNodeNull,
  TEMPPropProperty
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  TRANSITION_COMPONENT = "TransitionComponent",
  TRANSITION_DURATION = "transitionDuration",
  TRANSITION_PROPS = "TransitionProps"
}

const {
  CHILDREN,
  CLASSES,
  TRANSITION_COMPONENT,
  TRANSITION_DURATION,
  TRANSITION_PROPS
} = EProps;

export type TStepContentProps = {
  [CHILDREN]: TNodeNull;
  [CLASSES]: TObjectNull;
  [TRANSITION_COMPONENT]: TOverride<
    TEMPPropProperty,
    {
      value: ElementType;
      default: any;
    }
  >;
  [TRANSITION_DURATION]: TOverride<
    TEMPPropProperty,
    {
      value: number | { enter?: number; exit?: number } | "auto";
      default: "auto";
    }
  >;
  [TRANSITION_PROPS]: TObjectNull;
};
