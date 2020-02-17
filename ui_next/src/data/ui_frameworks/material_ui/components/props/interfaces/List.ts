import { TOverride } from "~/interfaces/helper";
import {
  TDontChange,
  TEMPPropProperty
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  COMPONENT = "component",
  DENSE = "dense",
  DISABLE_PADDING = "disablePadding",
  SUBHEADER = "subheader"
}

const {
  CHILDREN,
  CLASSES,
  COMPONENT,
  DENSE,
  DISABLE_PADDING,
  SUBHEADER
} = EProps;

export type TListProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [COMPONENT]: TDontChange;
  [DENSE]: TOverride<
    TEMPPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [DISABLE_PADDING]: TOverride<
    TEMPPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [SUBHEADER]: TEMPPropProperty;
};
