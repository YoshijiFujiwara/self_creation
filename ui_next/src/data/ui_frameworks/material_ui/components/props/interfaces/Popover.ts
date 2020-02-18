import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TDontChange,
  TFuncNull,
  TBooleanNullProp
} from "~/interfaces/material_components";

export enum EProps {
  ACTION = "action",
  ANCHOR_EL = "anchorEl",
  ANCHOR_ORIGIN = "anchorOrigin",
  ANCHOR_POSITION = "anchorPosition",
  ANCHOR_REFERENCE = "anchorReference",
  CHILDREN = "children",
  CLASSES = "classes",
  CONTAINER = "container",
  ELEVATION = "elevation",
  GET_CONTENT_ANCHOR_EL = "getContentAnchorEl",
  MARGIN_THRESHOLD = "marginThreshold",
  ON_CLOSE = "onClose",
  ON_ENTER = "onEnter",
  ON_ENTERED = "onEntered",
  ON_ENTERING = "onEntering",
  ON_EXIT = "onExit",
  ON_EXITED = "onExited",
  ON_EXITING = "onExiting",
  OPEN = "open",
  PAPER_PROPS = "PaperProps",
  TRANSFORM_ORIGIN = "transformOrigin",
  TRANSITION_COMPONENT = "TransitionComponent",
  TRANSITION_DURATION = "transitionDuration",
  TRANSITION_PROPS = "TransitionProps"
}

const {
  ACTION,
  ANCHOR_EL,
  ANCHOR_ORIGIN,
  ANCHOR_POSITION,
  ANCHOR_REFERENCE,
  CHILDREN,
  CLASSES,
  CONTAINER,
  ELEVATION,
  GET_CONTENT_ANCHOR_EL,
  MARGIN_THRESHOLD,
  ON_CLOSE,
  ON_ENTER,
  ON_ENTERED,
  ON_ENTERING,
  ON_EXIT,
  ON_EXITED,
  ON_EXITING,
  OPEN,
  PAPER_PROPS,
  TRANSFORM_ORIGIN,
  TRANSITION_COMPONENT,
  TRANSITION_DURATION,
  TRANSITION_PROPS
} = EProps;

export type TPopoverProps = {
  [ACTION]: TEMPPropProperty;
  [ANCHOR_EL]: TOverride<
    TEMPPropProperty,
    {
      value: object | Function | null;
    }
  >;
  [ANCHOR_ORIGIN]: TOverride<
    TEMPPropProperty,
    {
      value: {
        horizontal: number | "left" | "center" | "right";
        vertical: number | "top" | "center" | "bottom";
      };
      default: { vertical: "top"; horizontal: "left" };
    }
  >;
  [ANCHOR_POSITION]: TOverride<
    TEMPPropProperty,
    {
      value: { left: number; top: number } | null;
    }
  >;
  [ANCHOR_REFERENCE]: TOverride<
    TEMPPropProperty,
    {
      value: "anchorEl" | "anchorPosition" | "none";
      default: "anchorEl";
    }
  >;
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [CONTAINER]: TOverride<
    TEMPPropProperty,
    {
      value: object | Function | null;
    }
  >;
  [ELEVATION]: TOverride<
    TEMPPropProperty,
    {
      value: number;
      default: 8;
    }
  >;
  [GET_CONTENT_ANCHOR_EL]: TOverride<
    TEMPPropProperty,
    {
      value: Function | null;
    }
  >;
  [MARGIN_THRESHOLD]: TOverride<
    TEMPPropProperty,
    {
      value: number;
      default: 16;
    }
  >;
  [ON_CLOSE]: TFuncNull;
  [ON_ENTER]: TFuncNull;
  [ON_ENTERED]: TFuncNull;
  [ON_ENTERING]: TFuncNull;
  [ON_EXIT]: TFuncNull;
  [ON_EXITED]: TFuncNull;
  [ON_EXITING]: TFuncNull;
  [OPEN]: TBooleanNullProp;
  [PAPER_PROPS]: TOverride<
    TEMPPropProperty,
    {
      value: { component?: any }; // any は公式では'element type'と書いてあったな
      default: {};
    }
  >;
  [TRANSFORM_ORIGIN]: TOverride<
    TEMPPropProperty,
    {
      value: {
        horizontal: number | "left" | "center" | "right";
        vertical: number | "top" | "center" | "bottom";
      };
      default: { vertical: "top"; horizontal: "left" };
    }
  >;
  [TRANSITION_COMPONENT]: TEMPPropProperty;
  [TRANSITION_DURATION]: TOverride<
    TEMPPropProperty,
    {
      value: number | { enter?: number; exit?: number } | "auto";
      default: "auto";
    }
  >;
  [TRANSITION_PROPS]: TOverride<
    TEMPPropProperty,
    {
      value: object;
      default: {};
    }
  >;
};
