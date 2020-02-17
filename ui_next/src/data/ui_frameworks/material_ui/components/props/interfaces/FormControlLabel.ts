import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TDontChange,
  TBooleanNullProp,
  TStringNull,
  TFuncNull
} from "~/interfaces/material_components";

export enum EProps {
  CHECKED = "checked",
  CLASSES = "classes",
  CONTROL = "control",
  DISABLED = "disabled",
  INPUT_REF = "inputRef",
  LABEL = "label",
  LABEL_PLACEMENT = "labelPlacement",
  NAME = "name",
  ON_CHANGE = "onChange",
  VALUE = "value"
}

const {
  CHECKED,
  CLASSES,
  CONTROL,
  DISABLED,
  INPUT_REF,
  LABEL,
  LABEL_PLACEMENT,
  NAME,
  ON_CHANGE,
  VALUE
} = EProps;

export type TFormControlLabelProps = {
  [CHECKED]: TBooleanNullProp;
  [CLASSES]: TDontChange;
  [CONTROL]: TDontChange;
  [DISABLED]: TBooleanNullProp;
  [INPUT_REF]: TDontChange;
  [LABEL]: TDontChange;
  [LABEL_PLACEMENT]: TOverride<
    TEMPPropProperty,
    {
      value: "end" | "start" | "top" | "bottom";
      default: "end";
    }
  >;
  [NAME]: TStringNull;
  [ON_CHANGE]: TFuncNull;
  [VALUE]: TEMPPropProperty;
};
