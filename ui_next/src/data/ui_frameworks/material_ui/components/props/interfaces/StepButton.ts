import { TObjectNull, TNodeNull } from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  ICON = "icon",
  OPTIONAL = "optional"
}

const { CHILDREN, CLASSES, ICON, OPTIONAL } = EProps;

export type TStepButtonProps = {
  [CHILDREN]: TNodeNull;
  [CLASSES]: TObjectNull;
  [ICON]: TNodeNull;
  [OPTIONAL]: TNodeNull;
};
