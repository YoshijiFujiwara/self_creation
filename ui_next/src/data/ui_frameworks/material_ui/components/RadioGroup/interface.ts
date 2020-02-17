import { TOverride } from "~/interfaces/helper";
import { TPropProperty } from "~/interfaces/material_components";

export enum EPropName {
  CHILDREN = "children",
  DEFAULT_VALUE = "defaultValue",
  NAME = "name",
  ON_CHANGE = "onChange",
  VALUE = "value"
}

const { CHILDREN, DEFAULT_VALUE, NAME, ON_CHANGE, VALUE } = EPropName;

export type TRadioGroupProps = {
  [CHILDREN]: TPropProperty;
  [DEFAULT_VALUE]: TPropProperty;
  [NAME]: TOverride<
    TPropProperty,
    {
      value: string | null;
    }
  >;
  [ON_CHANGE]: TOverride<
    TPropProperty,
    {
      value: Function | null;
    }
  >;
  [VALUE]: TPropProperty;
};
