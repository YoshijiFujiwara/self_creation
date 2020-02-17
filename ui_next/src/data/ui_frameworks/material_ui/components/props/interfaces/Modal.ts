import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TDontChange,
  TBooleanFalseProp,
  TFuncNull,
  TBooleanNullProp
} from "~/interfaces/material_components";

export enum EProps {
  BACKDROP_COMPONENT = "BackdropComponent",
  BACKDROP_PROPS = "BackdropProps",
  CHILDREN = "children",
  CLOSE_AFTER_TRANSITION = "closeAfterTransition",
  CONTAINER = "container",
  DISABLE_AUTO_FOCUS = "disableAutoFocus",
  DISABLE_BACKDROP_CLICK = "disableBackdropClick",
  DISABLE_ENFORCE_FOCUS = "disableEnforceFocus",
  DISABLE_ESCAPE_KEY_DOWN = "disableEscapeKeyDown",
  DISABLE_PORTAL = "disablePortal",
  DISABLE_RESTORE_FOCUS = "disableRestoreFocus",
  DISABLE_SCROLL_LOCK = "disableScrollLock",
  HIDE_BACKDROP = "hideBackdrop",
  KEEP_MOUNTED = "keepMounted",
  ON_BACKDROP_CLICK = "onBackdropClick",
  ON_CLOSE = "onClose",
  ON_ESCAPE_KEY_DOWN = "onEscapeKeyDown",
  ON_RENDERED = "onRendered",
  OPEN = "open"
}

const {
  BACKDROP_COMPONENT,
  BACKDROP_PROPS,
  CHILDREN,
  CLOSE_AFTER_TRANSITION,
  CONTAINER,
  DISABLE_AUTO_FOCUS,
  DISABLE_BACKDROP_CLICK,
  DISABLE_ENFORCE_FOCUS,
  DISABLE_ESCAPE_KEY_DOWN,
  DISABLE_PORTAL,
  DISABLE_RESTORE_FOCUS,
  DISABLE_SCROLL_LOCK,
  HIDE_BACKDROP,
  KEEP_MOUNTED,
  ON_BACKDROP_CLICK,
  ON_CLOSE,
  ON_ESCAPE_KEY_DOWN,
  ON_RENDERED,
  OPEN
} = EProps;

export type TModalProps = {
  [BACKDROP_COMPONENT]: TEMPPropProperty;
  [BACKDROP_PROPS]: TEMPPropProperty;
  [CHILDREN]: TDontChange;
  [CLOSE_AFTER_TRANSITION]: TBooleanFalseProp;
  [CONTAINER]: TOverride<
    TEMPPropProperty,
    {
      value: object | Function | null;
    }
  >;
  [DISABLE_AUTO_FOCUS]: TBooleanFalseProp;
  [DISABLE_BACKDROP_CLICK]: TBooleanFalseProp;
  [DISABLE_ENFORCE_FOCUS]: TBooleanFalseProp;
  [DISABLE_ESCAPE_KEY_DOWN]: TBooleanFalseProp;
  [DISABLE_PORTAL]: TBooleanFalseProp;
  [DISABLE_RESTORE_FOCUS]: TBooleanFalseProp;
  [DISABLE_SCROLL_LOCK]: TBooleanFalseProp;
  [HIDE_BACKDROP]: TBooleanFalseProp;
  [KEEP_MOUNTED]: TBooleanFalseProp;
  [ON_BACKDROP_CLICK]: TFuncNull;
  [ON_CLOSE]: TFuncNull;
  [ON_ESCAPE_KEY_DOWN]: TFuncNull;
  [ON_RENDERED]: TFuncNull;
  [OPEN]: TBooleanNullProp;
};
