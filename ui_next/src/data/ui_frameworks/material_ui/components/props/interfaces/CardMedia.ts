import { TDontChange, TStringNull } from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  COMPONENT = "component",
  IMAGE = "image",
  SRC = "src"
}

const { CHILDREN, CLASSES, COMPONENT, IMAGE, SRC } = EProps;

export type TCardMediaProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [COMPONENT]: TDontChange;
  [IMAGE]: TStringNull;
  [SRC]: TStringNull;
};
