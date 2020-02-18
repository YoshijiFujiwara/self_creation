import {
  TEMPPropProperty,
  TFuncNull,
  TNodeNull,
  TStringNull
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  DEFAULT_VALUE = "defaultValue",
  NAME = "name",
  ON_CHANGE = "onChange",
  VALUE = "value"
}

const { CHILDREN, DEFAULT_VALUE, NAME, ON_CHANGE, VALUE } = EProps;

export type TRadioGroupProps = {
  [CHILDREN]: TNodeNull;
  [DEFAULT_VALUE]: TEMPPropProperty;
  [NAME]: TStringNull;
  [ON_CHANGE]: TFuncNull;
  [VALUE]: TEMPPropProperty;
};
