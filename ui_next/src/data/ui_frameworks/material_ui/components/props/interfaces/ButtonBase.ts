import { TOverride } from "~/interfaces/helper";
import {
  TDontChange,
  TEMPPropProperty,
  TBooleanFalseProp,
  TStringNull,
  TFuncNull
} from "~/interfaces/material_components";

export enum EProps {
  ACTION = "action",
  CENTER_RIPPLE = "centerRipple",
  CHILDREN = "children",
  CLASSES = "classes",
  COMPONENT = "component",
  DISABLED = "disabled",
  DISABLE_RIPPLE = "disableRipple",
  DISABLE_TOUCH_RIPPLE = "disableTouchRipple",
  FOCUS_RIPPLE = "focusRipple",
  FOCUS_VISIBLE_CLASS_NAME = "focusVisibleClassName",
  ON_FOCUS_VISIBLE = "onFocusVisible",
  TOUCH_RIPPLE_PROPS = "TouchRippleProps",
  TYPE = "type"
}

const {
  ACTION,
  CENTER_RIPPLE,
  CHILDREN,
  CLASSES,
  COMPONENT,
  DISABLED,
  DISABLE_RIPPLE,
  DISABLE_TOUCH_RIPPLE,
  FOCUS_RIPPLE,
  FOCUS_VISIBLE_CLASS_NAME,
  ON_FOCUS_VISIBLE,
  TOUCH_RIPPLE_PROPS,
  TYPE
} = EProps;

export type TButtonBaseProps = {
  [ACTION]: TDontChange;
  [CENTER_RIPPLE]: TBooleanFalseProp;
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [COMPONENT]: TOverride<
    TEMPPropProperty,
    {
      default: "button";
      changeable: false;
    }
  >;
  [DISABLED]: TBooleanFalseProp;
  [DISABLE_RIPPLE]: TBooleanFalseProp;
  [DISABLE_TOUCH_RIPPLE]: TBooleanFalseProp;
  [FOCUS_RIPPLE]: TBooleanFalseProp;
  [FOCUS_VISIBLE_CLASS_NAME]: TStringNull;
  [ON_FOCUS_VISIBLE]: TFuncNull;
  [TOUCH_RIPPLE_PROPS]: TEMPPropProperty;
  [TYPE]: TOverride<
    TEMPPropProperty,
    {
      value: "submit" | "reset" | "button";
      default: "button";
    }
  >;
};
