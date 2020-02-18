import { ElementType } from "react";
import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TBooleanFalseProp,
  TObjectNull,
  TNodeNull,
  TNumberWithDefault,
  TStringNull,
  TFuncNull,
  TBooleanNullProp
} from "~/interfaces/material_components";

export enum EProps {
  ARROW = "arrow",
  CHILDREN = "children",
  CLASSES = "classes",
  DISABLE_FOCUS_LISTENER = "disableFocusListener",
  DISABLE_HOVER_LISTENER = "disableHoverListener",
  DISABLE_TOUCH_LISTENER = "disableTouchListener",
  ENTER_DELAY = "enterDelay",
  ENTER_TOUCH_DELAY = "enterTouchDelay",
  ID = "id",
  INTERACTIVE = "interactive",
  LEAVE_DELAY = "leaveDelay",
  LEAVE_TOUCH_DELAY = "leaveTouchDelay",
  ON_CLOSE = "onClose",
  ON_OPEN = "onOpen",
  OPEN = "open",
  PLACEMENT = "placement",
  POPPER_PROPS = "PopperProps",
  TITLE = "title",
  TRANSITION_COMPONENT = "TransitionComponent",
  TRANSITION_PROPS = "TransitionProps"
}

const {
  ARROW,
  CHILDREN,
  CLASSES,
  DISABLE_FOCUS_LISTENER,
  DISABLE_HOVER_LISTENER,
  DISABLE_TOUCH_LISTENER,
  ENTER_DELAY,
  ENTER_TOUCH_DELAY,
  ID,
  INTERACTIVE,
  LEAVE_DELAY,
  LEAVE_TOUCH_DELAY,
  ON_CLOSE,
  ON_OPEN,
  OPEN,
  PLACEMENT,
  POPPER_PROPS,
  TITLE,
  TRANSITION_COMPONENT,
  TRANSITION_PROPS
} = EProps;

export type TTooltipProps = {
  [ARROW]: TBooleanFalseProp;
  [CHILDREN]: TOverride<
    TEMPPropProperty,
    {
      value: Element | null;
    }
  >;
  [CLASSES]: TObjectNull;
  [DISABLE_FOCUS_LISTENER]: TBooleanFalseProp;
  [DISABLE_HOVER_LISTENER]: TBooleanFalseProp;
  [DISABLE_TOUCH_LISTENER]: TBooleanFalseProp;
  [ENTER_DELAY]: TNumberWithDefault<0>;
  [ENTER_TOUCH_DELAY]: TNumberWithDefault<700>;
  [ID]: TStringNull;
  [INTERACTIVE]: TBooleanFalseProp;
  [LEAVE_DELAY]: TNumberWithDefault<0>;
  [LEAVE_TOUCH_DELAY]: TNumberWithDefault<1500>;
  [ON_CLOSE]: TFuncNull;
  [ON_OPEN]: TFuncNull;
  [OPEN]: TBooleanNullProp;
  [PLACEMENT]: TOverride<
    TEMPPropProperty,
    {
      value:
        | "bottom-end"
        | "bottom-start"
        | "bottom"
        | "left-end"
        | "left-start"
        | "left"
        | "right-end"
        | "right-start"
        | "right"
        | "top-end"
        | "top-start"
        | "top";
      default: "bottom";
    }
  >;
  [POPPER_PROPS]: TObjectNull;
  [TITLE]: TNodeNull;
  [TRANSITION_COMPONENT]: TOverride<
    TEMPPropProperty,
    {
      value: ElementType;
      default: any;
    }
  >;
  [TRANSITION_PROPS]: TObjectNull;
};
