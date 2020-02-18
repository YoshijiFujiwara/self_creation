import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TStringNull,
  TBooleanFalseProp,
  TObjectNull,
  TNodeNull,
  TFuncNull
} from "~/interfaces/material_components";

export enum EProps {
  AUTO_COMPLETE = "autoComplete",
  AUTO_FOCUS = "autoFocus",
  CLASSES = "classes",
  COLOR = "color",
  DEFAULT_VALUE = "defaultValue",
  DISABLED = "disabled",
  ERROR = "error",
  FORM_HELPER_TEXT_PROPS = "FormHelperTextProps",
  FULL_WIDTH = "fullWidth",
  HELPER_TEXT = "helperText",
  ID = "id",
  INPUT_LABEL_PROPS = "InputLabelProps",
  INPUT_PROPS = "InputProps",
  I_NPUT_PROPS = "inputProps",
  INPUT_REF = "inputRef",
  LABEL = "label",
  MARGIN = "margin",
  MULTI_LINE = "multiline",
  NAME = "name",
  ON_CHANGE = "onChange",
  PLACEHOLDER = "placeholder",
  REQUIRED = "required",
  ROWS = "rows",
  ROWS_MAX = "rowsMax",
  SELECT = "select",
  SELECT_PROPS = "SelectProps",
  SIZE = "size",
  TYPE = "type",
  VALUE = "value",
  VARIANT = "variant"
}

const {
  AUTO_COMPLETE,
  AUTO_FOCUS,
  CLASSES,
  COLOR,
  DEFAULT_VALUE,
  DISABLED,
  ERROR,
  FORM_HELPER_TEXT_PROPS,
  FULL_WIDTH,
  HELPER_TEXT,
  ID,
  INPUT_LABEL_PROPS,
  INPUT_PROPS,
  I_NPUT_PROPS,
  INPUT_REF,
  LABEL,
  MARGIN,
  MULTI_LINE,
  NAME,
  ON_CHANGE,
  PLACEHOLDER,
  REQUIRED,
  ROWS,
  ROWS_MAX,
  SELECT,
  SELECT_PROPS,
  SIZE,
  TYPE,
  VALUE,
  VARIANT
} = EProps;

export type TTextFieldProps = {
  [AUTO_COMPLETE]: TStringNull;
  [AUTO_FOCUS]: TBooleanFalseProp;
  [CLASSES]: TObjectNull;
  [COLOR]: TOverride<
    TEMPPropProperty,
    {
      value: "primary" | "secondary";
      defaut: "primary";
    }
  >;
  [DEFAULT_VALUE]: TEMPPropProperty;
  [DISABLED]: TBooleanFalseProp;
  [ERROR]: TBooleanFalseProp;
  [FORM_HELPER_TEXT_PROPS]: TObjectNull;
  [FULL_WIDTH]: TBooleanFalseProp;
  [HELPER_TEXT]: TNodeNull;
  [ID]: TStringNull;
  [INPUT_LABEL_PROPS]: TObjectNull;
  [INPUT_PROPS]: TObjectNull;
  [I_NPUT_PROPS]: TObjectNull;
  [INPUT_REF]: TEMPPropProperty;
  [LABEL]: TNodeNull;
  [MARGIN]: TOverride<
    TEMPPropProperty,
    {
      value: "none" | "dense" | "normal" | null;
    }
  >;
  [MULTI_LINE]: TBooleanFalseProp;
  [NAME]: TStringNull;
  [ON_CHANGE]: TFuncNull;
  [PLACEHOLDER]: TStringNull;
  [REQUIRED]: TBooleanFalseProp;
  [ROWS]: TOverride<
    TEMPPropProperty,
    {
      value: string | number | null;
    }
  >;
  [ROWS_MAX]: TOverride<
    TEMPPropProperty,
    {
      value: string | number | null;
    }
  >;
  [SELECT]: TBooleanFalseProp;
  [SELECT_PROPS]: TObjectNull;
  [SIZE]: TOverride<
    TEMPPropProperty,
    {
      value: "small" | "medium" | null;
    }
  >;
  [TYPE]: TStringNull;
  [VALUE]: TEMPPropProperty;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "standard" | "outlined" | "filled";
      default: "standard";
    }
  >;
};
