import { ElementType } from "react";
import { TOverride } from "~/interfaces/helper";
import {
  TObjectNull,
  TNodeNull,
  TEMPPropProperty,
  TBooleanFalseProp,
  TFuncNull
} from "~/interfaces/material_components";

export enum EProps {
  ACTION = "action",
  CENTERED = "centered",
  CHILDREN = "children",
  CLASSES = "classes",
  COMPONENT = "component",
  INDICATOR_COLOR = "indicatorColor",
  ON_CHANGE = "onChange",
  ORIENTATION = "orientation",
  SCROLL_BUTTON_COMPONENT = "ScrollButtonComponent",
  SCROLL_BUTTONS = "scrollButtons",
  TAB_INDICATOR_PROPS = "TabIndicatorProps",
  TEXT_COLOR = "textColor",
  VALUE = "value",
  VARIANT = "variant"
}

const {
  ACTION,
  CENTERED,
  CHILDREN,
  CLASSES,
  COMPONENT,
  INDICATOR_COLOR,
  ON_CHANGE,
  ORIENTATION,
  SCROLL_BUTTONS,
  SCROLL_BUTTON_COMPONENT,
  TAB_INDICATOR_PROPS,
  TEXT_COLOR,
  VALUE,
  VARIANT
} = EProps;

export type TTabsProps = {
  [ACTION]: TEMPPropProperty;
  [CENTERED]: TBooleanFalseProp;
  [CHILDREN]: TNodeNull;
  [CLASSES]: TObjectNull;
  [COMPONENT]: TOverride<
    TEMPPropProperty,
    {
      value: ElementType;
      default: "div";
    }
  >;
  [INDICATOR_COLOR]: TOverride<
    TEMPPropProperty,
    {
      value: "secondary" | "primary";
      default: "secondary";
    }
  >;
  [ON_CHANGE]: TFuncNull;
  [ORIENTATION]: TOverride<
    TEMPPropProperty,
    {
      value: "horizontal" | "vertical";
      deafult: "horizontal";
    }
  >;
  [SCROLL_BUTTON_COMPONENT]: TOverride<
    TEMPPropProperty,
    {
      value: ElementType;
      default: any;
    }
  >;
  [SCROLL_BUTTONS]: TOverride<
    TEMPPropProperty,
    {
      value: "auto" | "desktop" | "on" | "off";
      default: "auto";
    }
  >;
  [TAB_INDICATOR_PROPS]: TOverride<
    TEMPPropProperty,
    {
      value: object;
      default: {};
    }
  >;
  [TEXT_COLOR]: TOverride<
    TEMPPropProperty,
    {
      value: "secondary" | "primary" | "inherit";
      default: "inherit";
    }
  >;
  [VALUE]: TEMPPropProperty;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "standard" | "scrollable" | "fullWidth";
      default: "standard";
    }
  >;
};
