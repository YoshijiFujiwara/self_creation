import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TDontChange,
  TBooleanFalseProp
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  COMPONENT = "component",
  DISABLE_GUTTERS = "disableGutters",
  FIXED = "fixed",
  MAX_WIDTH = "maxWidth"
}

const {
  CHILDREN,
  CLASSES,
  COMPONENT,
  DISABLE_GUTTERS,
  FIXED,
  MAX_WIDTH
} = EProps;

export type TContainerProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [COMPONENT]: TDontChange;
  [DISABLE_GUTTERS]: TBooleanFalseProp;
  [FIXED]: TBooleanFalseProp;
  [MAX_WIDTH]: TOverride<
    TEMPPropProperty,
    {
      value: "xs" | "sm" | "md" | "lg" | "xl" | false;
      default: "lg";
    }
  >;
};
