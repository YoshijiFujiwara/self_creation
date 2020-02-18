import { TOverride } from "~/interfaces/helper";
import {
  TObjectNull,
  TNodeNull,
  TEMPPropProperty,
  TBooleanFalseProp
} from "~/interfaces/material_components";

export enum EProps {
  ACTIVE = "active",
  CHILDREN = "children",
  CLASSES = "classes",
  DIRECTION = "direction",
  HIDE_SORT_ICON = "hideSortIcon",
  ICON_COMPONENT = "IconComponent"
}

const {
  ACTIVE,
  CHILDREN,
  CLASSES,
  DIRECTION,
  HIDE_SORT_ICON,
  ICON_COMPONENT
} = EProps;

export type TTableSortLabelProps = {
  [ACTIVE]: TBooleanFalseProp;
  [CHILDREN]: TNodeNull;
  [CLASSES]: TObjectNull;
  [DIRECTION]: TOverride<
    TEMPPropProperty,
    {
      value: "asc" | "desc";
      default: "asc";
    }
  >;
  [HIDE_SORT_ICON]: TBooleanFalseProp;
  [ICON_COMPONENT]: TEMPPropProperty;
};
