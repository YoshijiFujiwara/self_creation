import { TObjectNull, TNodeNull } from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes"
}

const { CHILDREN, CLASSES } = EProps;

export type TRatingProps = {
  [CHILDREN]: TNodeNull;
  [CLASSES]: TObjectNull;
};
