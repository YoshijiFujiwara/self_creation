import { Ref } from "react";
import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TFuncNull,
  TBooleanNullProp,
  TNodeNull,
  TObjectNull,
  TStringNull
} from "~/interfaces/material_components";

export enum EProps {
  CHECKED = "checked",
  CHECKED_ICON = "checkedIcon",
  CLASSES = "classes",
  COLOR = "color",
  DISABLED = "disabled",
  DISABLE_RIPPLE = "disableRipple",
  ICON = "icon",
  ID = "id",
  INPUT_PROPS = "inputProps",
  INPUT_REF = "inputRef",
  NAME = "name",
  ON_CHANGE = "onChange",
  REQUIRED = "required",
  SIZE = "size",
  TYPE = "type",
  VALUE = "value"
}

const {
  CHECKED,
  CHECKED_ICON,
  CLASSES,
  COLOR,
  DISABLED,
  DISABLE_RIPPLE,
  ICON,
  ID,
  INPUT_PROPS,
  INPUT_REF,
  NAME,
  ON_CHANGE,
  REQUIRED,
  SIZE,
  TYPE,
  VALUE
} = EProps;

export type TRadioProps = {
  [CHECKED]: TBooleanNullProp;
  [CHECKED_ICON]: TNodeNull;
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
  [ICON]: TNodeNull;
  [ID]: TStringNull;
  [INPUT_PROPS]: TObjectNull;
  [INPUT_REF]: TOverride<
    TEMPPropProperty,
    {
      value: Ref<any> | null;
    }
  >;
  [NAME]: TStringNull;
  [ON_CHANGE]: TFuncNull;
  [REQUIRED]: TBooleanNullProp;
  [SIZE]: TOverride<
    TEMPPropProperty,
    {
      value: "small" | "medium";
      default: "medium";
    }
  >;
  [TYPE]: TStringNull;
  [VALUE]: TEMPPropProperty;
};
