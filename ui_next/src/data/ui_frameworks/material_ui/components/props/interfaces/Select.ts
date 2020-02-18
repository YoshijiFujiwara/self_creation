import { ElementType } from "react";
import { TOverride } from "~/interfaces/helper";
import {
  TObjectNull,
  TNodeNull,
  TBooleanFalseProp,
  TEMPPropProperty,
  TElementNull,
  TStringNull,
  TFuncNull,
  TBooleanNullProp
} from "~/interfaces/material_components";

export enum EProps {
  AUTO_WIDTH = "autoWidth",
  CHILDREN = "children",
  CLASSES = "classes",
  DEFAULT_VALUE = "defaultValue",
  DISPLAY_EMPTY = "displayEmpty",
  ICON_COMPONENT = "IconComponent",
  INPUT = "input",
  INPUT_PROPS = "inputProps",
  LABEL = "label",
  LABEL_ID = "labelId",
  LABEL_WIDTH = "labelWidth",
  MENU_PROPS = "MenuProps",
  MULTIPLE = "multiple",
  NATIVE = "native",
  ON_CHANGE = "onChange",
  ON_CLOSE = "onClose",
  ON_OPEN = "onOpen",
  OPEN = "open",
  RENDER_VALUE = "renderValue",
  SELECT_DISPLAY_PROPS = "SelectDisplayProps",
  VALUE = "value",
  VARIANT = "variant"
}

const {
  AUTO_WIDTH,
  CHILDREN,
  CLASSES,
  DEFAULT_VALUE,
  DISPLAY_EMPTY,
  ICON_COMPONENT,
  INPUT,
  INPUT_PROPS,
  LABEL,
  LABEL_ID,
  LABEL_WIDTH,
  MENU_PROPS,
  MULTIPLE,
  NATIVE,
  ON_CHANGE,
  ON_CLOSE,
  ON_OPEN,
  OPEN,
  RENDER_VALUE,
  SELECT_DISPLAY_PROPS,
  VALUE,
  VARIANT
} = EProps;

export type TSelectProps = {
  [AUTO_WIDTH]: TBooleanFalseProp;
  [CHILDREN]: TNodeNull;
  [CLASSES]: TObjectNull;
  [DEFAULT_VALUE]: TEMPPropProperty;
  [DISPLAY_EMPTY]: TBooleanFalseProp;
  [ICON_COMPONENT]: TOverride<
    TEMPPropProperty,
    {
      value: ElementType;
      // default:
      changeable: false;
    }
  >;
  [INPUT]: TElementNull;
  [INPUT_PROPS]: TObjectNull;
  [LABEL]: TNodeNull;
  [LABEL_ID]: TStringNull;
  [LABEL_WIDTH]: TOverride<
    TEMPPropProperty,
    {
      value: number;
      default: 0;
    }
  >;
  [MENU_PROPS]: TObjectNull;
  [MULTIPLE]: TBooleanFalseProp;
  [NATIVE]: TBooleanFalseProp;
  [ON_CHANGE]: TFuncNull;
  [ON_CLOSE]: TFuncNull;
  [ON_OPEN]: TFuncNull;
  [OPEN]: TBooleanNullProp;
  [RENDER_VALUE]: TFuncNull;
  [SELECT_DISPLAY_PROPS]: TObjectNull;
  [VALUE]: TEMPPropProperty;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "standard" | "outlined" | "filled";
      default: "standard";
    }
  >;
};
