import { ElementType } from "react";
import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TElementNull,
  TBooleanNullProp,
  TObjectNull,
  TBooleanFalseProp,
  TFuncNull,
  TNodeNull,
  TNumberNullProp
} from "~/interfaces/material_components";

export enum EProps {
  ACTION = "action",
  ANCHOR_ORIGIN = "anchorOrigin",
  AUTO_HIDE_DURATION = "autoHideDuration",
  CHILDREN = "children",
  CLASSES = "classes",
  CLICK_AWAY_LISTENER_PROPS = "ClickAwayListenerProps",
  CONTENT_PROPS = "ContentProps",
  DISABLE_WINDOW_BLUR_LISTENER = "disableWindowBlurListener",
  KEY = "key",
  MESSAGE = "message",
  ON_CLOSE = "onClose",
  ON_ENTER = "onEnter",
  ON_ENTERED = "onEntered",
  ON_ENTERING = "onEntering",
  ON_EXIT = "onExit",
  ON_EXITED = "onExited",
  ON_EXITING = "onExiting",
  OPEN = "open",
  RESUME_HIDE_DURATION = "resumeHideDuration",
  TRANSITION_COMPONENT = "TransitionComponent",
  TRANSITION_DURATION = "transitionDuration",
  TRANSITION_PROPS = "TransitionProps"
}

const {
  ACTION,
  ANCHOR_ORIGIN,
  AUTO_HIDE_DURATION,
  CHILDREN,
  CLASSES,
  CLICK_AWAY_LISTENER_PROPS,
  CONTENT_PROPS,
  DISABLE_WINDOW_BLUR_LISTENER,
  KEY,
  MESSAGE,
  ON_CLOSE,
  ON_ENTER,
  ON_ENTERED,
  ON_ENTERING,
  ON_EXIT,
  ON_EXITING,
  OPEN,
  RESUME_HIDE_DURATION,
  TRANSITION_COMPONENT,
  TRANSITION_DURATION,
  TRANSITION_PROPS
} = EProps;

export type TSnackbarProps = {
  [ACTION]: TNodeNull;
  [ANCHOR_ORIGIN]: TOverride<
    TEMPPropProperty,
    {
      value: {
        horizontal: "left" | "center" | "right";
        vertical: "top" | "bottom";
      };
      default: { vertical: "bottom"; horizontal: "center" };
    }
  >;
  [AUTO_HIDE_DURATION]: TNumberNullProp;
  [CHILDREN]: TElementNull;
  [CLASSES]: TObjectNull;
  [CLICK_AWAY_LISTENER_PROPS]: TObjectNull;
  [CONTENT_PROPS]: TObjectNull;
  [DISABLE_WINDOW_BLUR_LISTENER]: TBooleanFalseProp;
  [KEY]: TEMPPropProperty;
  [MESSAGE]: TNodeNull;
  [ON_CLOSE]: TFuncNull;
  [ON_ENTER]: TFuncNull;
  [ON_ENTERED]: TFuncNull;
  [ON_ENTERING]: TFuncNull;
  [ON_EXIT]: TFuncNull;
  [ON_EXITING]: TFuncNull;
  [OPEN]: TBooleanNullProp;
  [RESUME_HIDE_DURATION]: TNumberNullProp;
  [TRANSITION_COMPONENT]: TOverride<
    TEMPPropProperty,
    {
      value: ElementType;
      default: any;
      changeable: false;
    }
  >;
  [TRANSITION_DURATION]: TOverride<
    TEMPPropProperty,
    {
      value: number | { enter?: number; exit?: number };
      default: object;
      changeable: false;
    }
  >;
  [TRANSITION_PROPS]: TObjectNull;
};
