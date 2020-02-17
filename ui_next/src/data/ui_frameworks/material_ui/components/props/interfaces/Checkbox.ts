import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TDontChange,
  TStringNull,
  TBooleanFalseProp,
  TFuncNull
} from "~/interfaces/material_components";

export enum EProps {
  CHECKED = "checked",
  CHECKED_ICON = "checkedIcon",
  CLASSES = "classes",
  COLOR = "color",
  DISABLED = "disabled",
  DISABLE_RIPPLE = "disbleRipple",
  ICON = "icon",
  ID = "id",
  INDETERMINATE = "indeterminate",
  INDETERMINATE_ICON = "indeterminateIcon",
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
  CHECKED_ICON,
  CLASSES,
  COLOR,
  DISABLED,
  DISABLE_RIPPLE,
  ICON,
  ID,
  INDETERMINATE,
  INDETERMINATE_ICON,
  INPUT_PROPS,
  INPUT_REF,
  ON_CHANGE,
  REQUIRED,
  SIZE,
  TYPE,
  VALUE
} = EProps;

export type TCheckboxProps = {
  [CHECKED]: TOverride<
    TEMPPropProperty,
    {
      value: boolean | null;
    }
  >;
  [CHECKED_ICON]: TDontChange;
  [CLASSES]: TDontChange;
  [COLOR]: TOverride<
    TEMPPropProperty,
    {
      value: "primary" | "secondary" | "default";
      default: "secondary";
    }
  >;
  [DISABLED]: TOverride<
    TEMPPropProperty,
    {
      value: boolean | null;
    }
  >;
  [DISABLE_RIPPLE]: TOverride<
    TEMPPropProperty,
    {
      value: boolean | null;
    }
  >;
  [ICON]: TDontChange;
  [ID]: TStringNull;
  [INDETERMINATE]: TBooleanFalseProp;
  [INDETERMINATE_ICON]: TDontChange;
  [INPUT_PROPS]: TDontChange;
  [INPUT_REF]: TDontChange;
  [ON_CHANGE]: TFuncNull;
  [REQUIRED]: TOverride<
    TEMPPropProperty,
    {
      value: boolean | null;
    }
  >;
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
