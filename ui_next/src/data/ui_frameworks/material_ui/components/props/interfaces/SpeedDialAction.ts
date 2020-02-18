import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TObjectNull,
  TNodeNull,
  TBooleanFalseProp,
  TNumberWithDefault
} from "~/interfaces/material_components";

export enum EProps {
  CLASSES = "classes",
  DELAY = "delay",
  FAB_PROPS = "FabProps",
  ICON = "icon",
  TOOLTIP_CLASSES = "TooltipClasses",
  TOOLTIP_OPEN = "tooltipOpen",
  TOOLTIP_PLACEMENT = "tooltipPlacement",
  TOOLTIP_TITLE = "tooltipTitle"
}

const {
  CLASSES,
  DELAY,
  FAB_PROPS,
  ICON,
  TOOLTIP_CLASSES,
  TOOLTIP_OPEN,
  TOOLTIP_PLACEMENT,
  TOOLTIP_TITLE
} = EProps;

export type TSpeedDialActionProps = {
  [CLASSES]: TObjectNull;
  [DELAY]: TNumberWithDefault<0>;
  [FAB_PROPS]: TOverride<
    TEMPPropProperty,
    {
      value: object;
      default: {};
    }
  >;
  [ICON]: TNodeNull;
  [TOOLTIP_CLASSES]: TObjectNull;
  [TOOLTIP_OPEN]: TBooleanFalseProp;
  [TOOLTIP_PLACEMENT]: TOverride<
    TEMPPropProperty,
    {
      value:
        | "bottom-end"
        | "bottom-start"
        | "bottom"
        | "left-end"
        | "left-start"
        | "left"
        | "right-end"
        | "right-start"
        | "right"
        | "top-end"
        | "top-start"
        | "top";
      default: "left";
    }
  >;
  [TOOLTIP_TITLE]: TNodeNull;
};
