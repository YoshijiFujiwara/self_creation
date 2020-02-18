import { ElementType } from "react";
import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TObjectNull,
  TNodeNull,
  TStringNull,
  TBooleanFalseProp,
  TFuncNull,
  TBooleanNullProp
} from "~/interfaces/material_components";

export enum EProps {
  ARIA_LABEL = "ariaLabel",
  CHILDREN = "children",
  CLASSES = "classes",
  DIRECTION = "direction",
  FAB_PROPS = "FabProps",
  HIDDEN = "hidden",
  ICON = "icon",
  ON_CLOSE = "onClose",
  ON_OPEN = "onOpen",
  OPEN = "open",
  OPEN_ICON = "openIcon",
  TRANSITION_COMPONENT = "TransitionComponent",
  TRANSITION_DURATION = "transitionDuration",
  TRANSITION_PROPS = "TransitionProps"
}

const {
  ARIA_LABEL,
  CHILDREN,
  CLASSES,
  DIRECTION,
  FAB_PROPS,
  HIDDEN,
  ICON,
  OPEN,
  ON_CLOSE,
  ON_OPEN,
  OPEN_ICON,
  TRANSITION_COMPONENT,
  TRANSITION_DURATION,
  TRANSITION_PROPS
} = EProps;

export type TSpeedDialProps = {
  [ARIA_LABEL]: TStringNull;
  [CHILDREN]: TNodeNull;
  [CLASSES]: TObjectNull;
  [DIRECTION]: TOverride<
    TEMPPropProperty,
    {
      value: "down" | "left" | "right" | "up";
      default: "up";
    }
  >;
  [FAB_PROPS]: TOverride<
    TEMPPropProperty,
    {
      value: object;
      default: {};
    }
  >;
  [HIDDEN]: TBooleanFalseProp;
  [ICON]: TNodeNull;
  [ON_CLOSE]: TFuncNull;
  [ON_OPEN]: TFuncNull;
  [OPEN]: TBooleanNullProp;
  [OPEN_ICON]: TFuncNull;
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
      value: number | { appear?: number; enter?: number; exit?: number };
      default: object;
    }
  >;
  [TRANSITION_PROPS]: TObjectNull;
};
