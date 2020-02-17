import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TStringNull,
  TDontChange,
  TBooleanFalseProp,
  TFuncNull
} from "~/interfaces/material_components";

export enum EProps {
  ARIA_DESCIRBEDBY = "aria-describedby",
  ARIA_LABELLEDBY = "aria-labelledby",
  CHILDREN = "children",
  CLASSES = "classes",
  DISABLE_BACKDROP_CLICK = "disableBackdropClick",
  DISABLE_ESCAPE_KEY_DOWN = "disableEscapeKeyDown",
  FULL_SCREEN = "fullScreen",
  FULL_WIDTH = "fullWidth",
  MAX_WIDTH = "maxWidth",
  ON_BACKDROP_CLICK = "onBackdropClick",
  ON_CLOSE = "onClose",
  ON_ENTER = "onEnter",
  ON_ENTERED = "onEntered",
  ON_ENTERING = "onEntering",
  ON_ESCAPE_KEY_DOWN = "onEscapeKeyDown",
  ON_EXIT = "onExit",
  ON_EXITED = "onExited",
  ON_EXITING = "onExiting",
  OPEN = "open",
  PAPER_COMPONENT = "PaperComponent",
  PAPER_PROPS = "PaperProps",
  SCROLL = "scroll",
  TRANSITION_COMPONENT = "TransitionComponent",
  TRANSITION_DURARION = "transitionDuration",
  TRANSITION_PROPS = "TransitionProps"
}

const {
  ARIA_DESCIRBEDBY,
  ARIA_LABELLEDBY,
  CHILDREN,
  CLASSES,
  DISABLE_BACKDROP_CLICK,
  DISABLE_ESCAPE_KEY_DOWN,
  FULL_SCREEN,
  FULL_WIDTH,
  MAX_WIDTH,
  ON_BACKDROP_CLICK,
  ON_CLOSE,
  ON_ENTER,
  ON_ENTERED,
  ON_ENTERING,
  ON_ESCAPE_KEY_DOWN,
  ON_EXIT,
  ON_EXITED,
  ON_EXITING,
  OPEN,
  PAPER_COMPONENT,
  PAPER_PROPS,
  SCROLL,
  TRANSITION_COMPONENT,
  TRANSITION_DURARION,
  TRANSITION_PROPS
} = EProps;

export type TDialogProps = {
  [ARIA_DESCIRBEDBY]: TStringNull;
  [ARIA_LABELLEDBY]: TStringNull;
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [DISABLE_BACKDROP_CLICK]: TBooleanFalseProp;
  [DISABLE_ESCAPE_KEY_DOWN]: TBooleanFalseProp;
  [FULL_SCREEN]: TBooleanFalseProp;
  [FULL_WIDTH]: TBooleanFalseProp;
  [MAX_WIDTH]: TOverride<
    TEMPPropProperty,
    {
      value: "xs" | "sm" | "md" | "lg" | "xl" | false;
      default: "sm";
    }
  >;
  [ON_BACKDROP_CLICK]: TFuncNull;
  [ON_CLOSE]: TFuncNull;
  [ON_ENTER]: TFuncNull;
  [ON_ENTERED]: TFuncNull;
  [ON_ENTERING]: TFuncNull;
  [ON_ESCAPE_KEY_DOWN]: TFuncNull;
  [ON_EXIT]: TFuncNull;
  [ON_EXITED]: TFuncNull;
  [ON_EXITING]: TFuncNull;
  [OPEN]: TOverride<
    TEMPPropProperty,
    {
      value: boolean | null;
    }
  >;
  [PAPER_COMPONENT]: TDontChange;
  [PAPER_PROPS]: TDontChange;
  [SCROLL]: TOverride<
    TEMPPropProperty,
    {
      value: "body" | "paper";
      default: "paper";
    }
  >;
  [TRANSITION_COMPONENT]: TDontChange;
  [TRANSITION_DURARION]: TOverride<
    TEMPPropProperty,
    {
      value: number | { enter?: number; exit?: number };
      changeable: false;
    }
  >;
  [TRANSITION_PROPS]: TEMPPropProperty;
};
