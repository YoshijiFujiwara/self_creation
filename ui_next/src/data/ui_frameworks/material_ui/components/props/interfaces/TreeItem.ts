import { ElementType } from "react";
import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TObjectNull,
  TNodeNull,
  TStringNull
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  COLLAPSE_ICON = "collapseIcon",
  END_ICON = "endIcon",
  EXPAND_ICON = "expandIcon",
  ICON = "icon",
  LABEL = "label",
  NODE_ID = "nodeId",
  TRANSITION_COMPONENT = "TransitionComponent",
  TRANSITION_PROPS = "TransitionProps"
}

const {
  CHILDREN,
  CLASSES,
  COLLAPSE_ICON,
  END_ICON,
  EXPAND_ICON,
  ICON,
  LABEL,
  NODE_ID,
  TRANSITION_COMPONENT,
  TRANSITION_PROPS
} = EProps;

export type TTreeItemProps = {
  [CHILDREN]: TNodeNull;
  [CLASSES]: TObjectNull;
  [COLLAPSE_ICON]: TNodeNull;
  [END_ICON]: TNodeNull;
  [EXPAND_ICON]: TNodeNull;
  [ICON]: TNodeNull;
  [LABEL]: TNodeNull;
  [NODE_ID]: TStringNull;
  [TRANSITION_COMPONENT]: TOverride<
    TEMPPropProperty,
    {
      value: ElementType;
      default: any;
    }
  >;
  [TRANSITION_PROPS]: TObjectNull;
};
