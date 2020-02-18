import { Ref } from "react";
import { TOverride } from "~/interfaces/helper";
import {
  TObjectNull,
  TNodeNull,
  TEMPPropProperty,
  TBooleanNullProp,
  TFuncNull,
  TStringNull
} from "~/interfaces/material_components";

export enum EProps {
  CHECKED = "checked",
  CHEKCED_ICON = "checkedIcon",
  CLASSES = "classes",
  COLOR = "color",
  DISABLED = "disabled",
  DISABLE_RIPPLE = "disableRipple",
  EDGE = "edge",
  ICON = "icon",
  ID = "id",
  INPUT_PROPS = "inputProps",
  INPUT_REF = "inputRef",
  ON_CHANGE = "onChange",
  REQUIRED = "required",
  SIZE = "size",
  TYPE = "type",
  VALUE = "value"
}

const {
  CHECKED,
  CHEKCED_ICON,
  CLASSES,
  COLOR,
  DISABLED,
  DISABLE_RIPPLE,
  EDGE,
  ICON,
  ID,
  INPUT_PROPS,
  INPUT_REF,
  ON_CHANGE,
  REQUIRED,
  SIZE,
  TYPE,
  VALUE
} = EProps;

export type TSwitchProps = {
  [CHECKED]: TBooleanNullProp;
  [CHEKCED_ICON]: TNodeNull;
  [CLASSES]: TObjectNull;
  [COLOR]: TOverride<
    TEMPPropProperty,
    {
      value: "primary" | "secondary" | "default";
      default: "secondary";
    }
  >;
  [DISABLED]: TBooleanNullProp;
  [DISABLE_RIPPLE]: TBooleanNullProp;
  [EDGE]: TOverride<
    TEMPPropProperty,
    {
      value: "start" | "end" | false;
      default: false;
    }
  >;
  [ICON]: TNodeNull;
  [ID]: TStringNull;
  [INPUT_PROPS]: TObjectNull;
  [INPUT_REF]: TOverride<
    TEMPPropProperty,
    {
      value: Ref<any> | null;
    }
  >;
  [ON_CHANGE]: TFuncNull;
  [REQUIRED]: TBooleanNullProp;
  [SIZE]: TOverride<
    TEMPPropProperty,
    {
      value: "small" | "medium";
    }
  >;
  [TYPE]: TStringNull;
  [VALUE]: TEMPPropProperty;
};
