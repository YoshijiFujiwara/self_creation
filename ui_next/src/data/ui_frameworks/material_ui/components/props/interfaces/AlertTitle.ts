import {
  TEMPPropProperty,
  TDontChange
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes"
}

const { CHILDREN, CLASSES } = EProps;

export type TAlertTitleProps = {
  [CHILDREN]: TEMPPropProperty;
  [CLASSES]: TDontChange;
};
