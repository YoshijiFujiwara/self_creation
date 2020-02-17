import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TDontChange,
  TBooleanFalseProp,
  TFuncNull,
  TBooleanNullProp
} from "~/interfaces/material_components";

export enum EProps {
  ANCHOR_EL = "anchorEl",
  AUTO_FOCUS = "autoFocus",
  CHILDREN = "children",
  CLASSES = "classes",
  DISABLE_AUTO_FOCUS_ITEM = "disableAutoFocusItem",
  MENU_LIST_PROPS = "MenuListProps",
  ON_CLOSE = "onClose",
  ON_ENTER = "onEnter",
  ON_ENTERED = "onEntered",
  ON_ENTERING = "onEntering",
  ON_EXIT = "onExit",
  ON_EXITED = "onExited",
  ON_EXITING = "onExiting",
  OPEN = "open",
  POPOVER_CLASSES = "PopoverClasses",
  TRANSITION_DURATION = "transitionDuration",
  VARIANT = "variant"
}

const {
  ANCHOR_EL,
  AUTO_FOCUS,
  CHILDREN,
  CLASSES,
  DISABLE_AUTO_FOCUS_ITEM,
  MENU_LIST_PROPS,
  ON_CLOSE,
  ON_ENTER,
  ON_ENTERED,
  ON_ENTERING,
  ON_EXIT,
  ON_EXITED,
  ON_EXITING,
  OPEN,
  POPOVER_CLASSES,
  TRANSITION_DURATION,
  VARIANT
} = EProps;

export type TMenuProps = {
  [ANCHOR_EL]: TOverride<
    TEMPPropProperty,
    {
      value: object | Function | null;
    }
  >;
  [AUTO_FOCUS]: TOverride<
    TEMPPropProperty,
    {
      value: boolean;
      default: true;
    }
  >;
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [DISABLE_AUTO_FOCUS_ITEM]: TBooleanFalseProp;
  [MENU_LIST_PROPS]: TOverride<
    TEMPPropProperty,
    {
      value: object;
      default: {};
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
  [POPOVER_CLASSES]: TOverride<
    TEMPPropProperty,
    {
      value: object | null;
    }
  >;
  [TRANSITION_DURATION]: TOverride<
    TEMPPropProperty,
    {
      value: number | { enter?: number; exit?: number } | "auto";
      default: "auto";
    }
  >;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "menu" | "selectedMenu";
      default: "selectedMenu";
    }
  >;
};
