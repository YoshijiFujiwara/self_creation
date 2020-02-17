import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TDontChange,
  TBooleanFalseProp,
  TStringNull,
  TBooleanNullProp,
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
  END_ADORNMENT = "endAdornment",
  ERROR = "error",
  FULL_WIDTH = "fullWidth",
  ID = "id",
  INPUT_COMPONENT = "inputComponent",
  INPUT_PROPS = "inputProps",
  INPUT_REF = "inputRef",
  LABEL = "label",
  LABEL_WIDTH = "labelWidth",
  MARGIN = "margin",
  MULTILINE = "multiline",
  NAME = "name",
  NOTCHED = "notched",
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
  END_ADORNMENT,
  ERROR,
  FULL_WIDTH,
  ID,
  INPUT_COMPONENT,
  INPUT_PROPS,
  INPUT_REF,
  LABEL,
  LABEL_WIDTH,
  MARGIN,
  MULTILINE,
  NAME,
  NOTCHED,
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

export type TOutlinedInputProps = {
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
  [END_ADORNMENT]: TEMPPropProperty;
  [ERROR]: TBooleanNullProp;
  [FULL_WIDTH]: TBooleanFalseProp;
  [ID]: TStringNull;
  [INPUT_COMPONENT]: TDontChange;
  [INPUT_PROPS]: TDontChange;
  [INPUT_REF]: TDontChange;
  [LABEL]: TEMPPropProperty;
  [LABEL_WIDTH]: TOverride<
    TEMPPropProperty,
    {
      value: number;
      default: 0;
    }
  >;
  [MARGIN]: TOverride<
    TEMPPropProperty,
    {
      value: "dense" | "node" | null;
    }
  >;
  [MULTILINE]: TBooleanFalseProp;
  [NAME]: TStringNull;
  [NOTCHED]: TBooleanNullProp;
  [ON_CHANGE]: TFuncNull;
  [PLACEHOLDER]: TStringNull;
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
