import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TBooleanFalseProp,
  TObjectNull,
  TNodeNull,
  TFuncNull
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  EXCLUSIVE = "exclusive",
  ON_CHANGE = "onChange",
  SIZE = "size",
  VALUE = "value"
}

const { CHILDREN, CLASSES, EXCLUSIVE, ON_CHANGE, SIZE, VALUE } = EProps;

export type TToggleButtonGroupProps = {
  [CHILDREN]: TNodeNull;
  [CLASSES]: TObjectNull;
  [EXCLUSIVE]: TBooleanFalseProp;
  [ON_CHANGE]: TFuncNull;
  [SIZE]: TOverride<
    TEMPPropProperty,
    {
      value: "large" | "medium" | "small";
      default: "medium";
    }
  >;
  [VALUE]: TEMPPropProperty;
};
