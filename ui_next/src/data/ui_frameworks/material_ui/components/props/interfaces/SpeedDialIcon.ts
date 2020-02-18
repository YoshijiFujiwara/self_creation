import { TObjectNull, TNodeNull } from "~/interfaces/material_components";

export enum EProps {
  CLASSES = "classes",
  ICON = "icon",
  OPEN_ICON = "openIcon"
}

const { CLASSES, ICON, OPEN_ICON } = EProps;

export type TSpeedDialIconProps = {
  [CLASSES]: TObjectNull;
  [ICON]: TNodeNull;
  [OPEN_ICON]: TNodeNull;
};
