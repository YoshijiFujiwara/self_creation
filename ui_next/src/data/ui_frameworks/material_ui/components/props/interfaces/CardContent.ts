import { TDontChange } from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  COMPONENT = "component"
}

const { CHILDREN, CLASSES, COMPONENT } = EProps;

export type TCardContentProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [COMPONENT]: TDontChange;
};
