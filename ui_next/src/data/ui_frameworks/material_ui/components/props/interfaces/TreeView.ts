import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TObjectNull,
  TNodeNull,
  TFuncNull
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  DEFAULT_COLLAPSE_ICON = "defaultCollapseIcon",
  DEFAULT_END_ICON = "defaultEndIcon",
  DEFAULT_EXPANDED = "defaultExpanded",
  DEFAULT_EXPAND_ICON = "defaultExpandIcon",
  DEFAULT_PARENT_ICON = "defaultParentIcon",
  EXPANDED = "expanded",
  ON_NODE_TOGGLE = "onNodeToggle"
}

const {
  CHILDREN,
  CLASSES,
  DEFAULT_COLLAPSE_ICON,
  DEFAULT_END_ICON,
  DEFAULT_EXPANDED,
  DEFAULT_EXPAND_ICON,
  DEFAULT_PARENT_ICON,
  EXPANDED,
  ON_NODE_TOGGLE
} = EProps;

export type TTreeViewProps = {
  [CHILDREN]: TNodeNull;
  [CLASSES]: TObjectNull;
  [DEFAULT_COLLAPSE_ICON]: TNodeNull;
  [DEFAULT_END_ICON]: TNodeNull;
  [DEFAULT_EXPANDED]: TOverride<
    TEMPPropProperty,
    {
      value: Array<string>;
      default: [];
    }
  >;
  [DEFAULT_EXPAND_ICON]: TNodeNull;
  [DEFAULT_PARENT_ICON]: TNodeNull;
  [EXPANDED]: TOverride<
    TEMPPropProperty,
    {
      value: Array<string> | null;
    }
  >;
  [ON_NODE_TOGGLE]: TFuncNull;
};
