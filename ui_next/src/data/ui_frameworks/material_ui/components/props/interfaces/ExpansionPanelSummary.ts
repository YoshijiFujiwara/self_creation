import { TDontChange } from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  EXPAND_ICON = "expandIcon",
  ICON_BUTTON_PROPS = "IconButtonProps"
}

const { CHILDREN, CLASSES, EXPAND_ICON, ICON_BUTTON_PROPS } = EProps;

export type TExpansionPanelSummaryProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [EXPAND_ICON]: TDontChange;
  [ICON_BUTTON_PROPS]: TDontChange;
};
