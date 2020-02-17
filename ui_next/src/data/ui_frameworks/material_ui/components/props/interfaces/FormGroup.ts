import {
  TDontChange,
  TBooleanNullProp,
  TBooleanFalseProp
} from "~/interfaces/material_components";

export enum EProps {
  CHECKED = "checked",
  CLASSES = "classes",
  ROW = "row"
}

const { CHECKED, CLASSES, ROW } = EProps;

export type TFormGroupProps = {
  [CHECKED]: TBooleanNullProp;
  [CLASSES]: TDontChange;
  [ROW]: TBooleanFalseProp;
};
