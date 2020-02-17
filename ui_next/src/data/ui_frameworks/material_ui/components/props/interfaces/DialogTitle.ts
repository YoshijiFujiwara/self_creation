import {
  TDontChange,
  TBooleanFalseProp
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  DISABLE_TYPOGRAPHY = "disableTypography"
}

const { CHILDREN, CLASSES, DISABLE_TYPOGRAPHY } = EProps;

export type TDialogTitleProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [DISABLE_TYPOGRAPHY]: TBooleanFalseProp;
};
