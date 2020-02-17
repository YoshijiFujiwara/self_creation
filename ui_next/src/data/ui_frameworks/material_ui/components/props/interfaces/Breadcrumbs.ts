import { TOverride } from "~/interfaces/helper";
import {
  TDontChange,
  TEMPPropProperty
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  COMPONENT = "component",
  ITEMS_AFTER_COLLAPSE = "itemsAfterCollapse",
  ITEMS_BEFORE_COLLAPSE = "itemsBeforeCollapse",
  MAX_ITEMS = "maxItems",
  SEPARATOR = "separator"
}

const {
  CHILDREN,
  CLASSES,
  COMPONENT,
  ITEMS_AFTER_COLLAPSE,
  ITEMS_BEFORE_COLLAPSE,
  MAX_ITEMS,
  SEPARATOR
} = EProps;

export type TBreadcrumbsProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [COMPONENT]: TDontChange;
  [ITEMS_AFTER_COLLAPSE]: TOverride<
    TEMPPropProperty,
    {
      value: number;
      default: 1;
    }
  >;
  [ITEMS_BEFORE_COLLAPSE]: TOverride<
    TEMPPropProperty,
    {
      value: number;
      default: 1;
    }
  >;
  [MAX_ITEMS]: TOverride<
    TEMPPropProperty,
    {
      value: number;
      default: 8;
    }
  >;
  [SEPARATOR]: TOverride<
    TEMPPropProperty,
    {
      default: "/";
    }
  >;
};
