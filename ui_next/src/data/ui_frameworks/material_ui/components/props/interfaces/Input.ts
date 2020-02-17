import { TOverride } from "~/interfaces/helper";
import {
  TDontChange,
  TEMPPropProperty,
  TBooleanFalseProp,
  TBooleanNullProp,
  TStringNull,
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
  ERROR = "error",
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
  READ_ONLY = "readOnly",
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
  ERROR,
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
  READ_ONLY,
  REQUIRED,
  ROWS,
  ROWS_MAX,
  START_ADORNMENT,
  TYPE,
  VALUE
} = EProps;

export type TInputProps = {
  [AUTO_COMPLETE]: TStringNull;
  [AUTO_FOCUS]: TBooleanNullProp;
  [CLASSES]: TDontChange;
  [CLASS_NAME]: TStringNull;
  [COLOR]: TOverride<
    TEMPPropProperty,
    {
      value: "primary" | "secondary" | null;
    }
  >;
  [DEFAULT_VALUE]: TEMPPropProperty;
  [DISABLED]: TBooleanNullProp;
  [DISABLE_UNDERLINE]: TBooleanNullProp;
  [END_ADORNMENT]: TDontChange;
  [ERROR]: TBooleanNullProp;
  [FULL_WIDTH]: TBooleanNullProp;
  [ID]: TStringNull;
  [INPUT_COMPONENT]: TEMPPropProperty;
  [INPUT_PROPS]: TEMPPropProperty;
  [INPUT_REF]: TEMPPropProperty;
  [MARGIN]: TOverride<
    TEMPPropProperty,
    {
      value: "dense" | "none" | null;
    }
  >;
  [MULTILINE]: TBooleanNullProp;
  [NAME]: TStringNull;
  [ON_CHANGE]: TFuncNull;
  [PLACEHOLDER]: TBooleanFalseProp;
  [READ_ONLY]: TBooleanNullProp;
  [REQUIRED]: TBooleanNullProp;
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
  [START_ADORNMENT]: TDontChange;
  [TYPE]: TOverride<
    TEMPPropProperty,
    {
      value: string;
      default: "text";
    }
  >;
  [VALUE]: TEMPPropProperty;
};
