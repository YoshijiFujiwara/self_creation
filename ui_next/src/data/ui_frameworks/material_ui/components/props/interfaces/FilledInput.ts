import { TOverride } from "~/interfaces/helper";
import {
  TDontChange,
  TEMPPropProperty,
  TStringNull,
  TBooleanFalseProp,
  TFuncNull
} from "~/interfaces/material_components";

export enum EProps {
  AUTO_COMPLETE = "autoComplete",
  AUTO_FOCUS = "autoFocus",
  CLASSES = "classes",
  CLASS_NAME = "className",
  COLOR = "color",
  DEFAULT_VALUE = "defaultValue",
  DISABLED = "disabled",
  DISABLE_UNDERLINE = "disableUnderline",
  END_ADORNMENT = "endAdornment",
  ERORR = "error",
  FULL_WIDTH = "fullWidth",
  ID = "id",
  INPUT_COMPONENT = "inputComponent",
  INPUT_PROPS = "inputProps",
  INPUT_REF = "inputRef",
  MARGIN = "margin",
  MULTILINE = "multiline",
  NAME = "name",
  ON_CHANGE = "onChange",
  PLACEHOLDER = "placeholder",
  READONLY = "readOnly",
  REQUIRED = "required",
  ROWS = "rows",
  ROWS_MAX = "rowsMax",
  START_ADORNMENT = "startAdornment",
  TYPE = "type",
  VALUE = "value"
}

const {
  AUTO_COMPLETE,
  AUTO_FOCUS,
  CLASSES,
  CLASS_NAME,
  COLOR,
  DEFAULT_VALUE,
  DISABLED,
  DISABLE_UNDERLINE,
  END_ADORNMENT,
  ERORR,
  FULL_WIDTH,
  ID,
  INPUT_COMPONENT,
  INPUT_PROPS,
  INPUT_REF,
  MARGIN,
  MULTILINE,
  NAME,
  ON_CHANGE,
  PLACEHOLDER,
  READONLY,
  REQUIRED,
  ROWS,
  ROWS_MAX,
  START_ADORNMENT,
  TYPE,
  VALUE
} = EProps;

export type TFilledInputProps = {
  [AUTO_COMPLETE]: TStringNull;
  [AUTO_FOCUS]: TOverride<
    TEMPPropProperty,
    {
      value: boolean | null;
    }
  >;
  [CLASSES]: TDontChange;
  [CLASS_NAME]: TStringNull;
  [COLOR]: TOverride<
    TEMPPropProperty,
    {
      value: "primary" | "secondary" | null;
    }
  >;
  [DEFAULT_VALUE]: TEMPPropProperty;
  [DISABLED]: TOverride<
    TEMPPropProperty,
    {
      value: boolean | null;
    }
  >;
  [DISABLE_UNDERLINE]: TOverride<
    TEMPPropProperty,
    {
      value: boolean | null;
    }
  >;
  [END_ADORNMENT]: TEMPPropProperty;
  [ERORR]: TOverride<
    TEMPPropProperty,
    {
      value: boolean | null;
    }
  >;
  [FULL_WIDTH]: TBooleanFalseProp;
  [ID]: TStringNull;
  [INPUT_COMPONENT]: TDontChange;
  [INPUT_PROPS]: TEMPPropProperty;
  [INPUT_REF]: TDontChange;
  [MARGIN]: TOverride<
    TEMPPropProperty,
    {
      value: "dense" | "none" | null;
    }
  >;
  [MULTILINE]: TBooleanFalseProp;
  [NAME]: TStringNull;
  [ON_CHANGE]: TFuncNull;
  [PLACEHOLDER]: TStringNull;
  [READONLY]: TOverride<
    TEMPPropProperty,
    {
      value: boolean | null;
    }
  >;
  [REQUIRED]: TOverride<
    TEMPPropProperty,
    {
      value: boolean | null;
    }
  >;
  [ROWS]: TOverride<
    TEMPPropProperty,
    {
      value: string | number;
    }
  >;
  [ROWS_MAX]: TOverride<
    TEMPPropProperty,
    {
      value: string | number;
    }
  >;
  [START_ADORNMENT]: TEMPPropProperty;
  [TYPE]: TOverride<
    TEMPPropProperty,
    {
      value: string;
      default: "text";
    }
  >;
  [VALUE]: TEMPPropProperty;
};
