import { TOverride } from "~/interfaces/helper";
import {
  TDontChange,
  TBooleanFalseProp,
  TEMPPropProperty
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  COLOR = "color",
  COMPONENT = "component",
  DISABLE_GUTTERS = "disableGutters",
  DISABLE_STICKY = "disableSticky",
  INSET = "inset"
}

const {
  CHILDREN,
  CLASSES,
  COLOR,
  COMPONENT,
  DISABLE_GUTTERS,
  DISABLE_STICKY,
  INSET
} = EProps;

export type TListSubheaderProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [COLOR]: TOverride<
    TEMPPropProperty,
    {
      value: "default" | "primary" | "inherit";
      default: "default";
    }
  >;
  [COMPONENT]: TDontChange;
  [DISABLE_GUTTERS]: TBooleanFalseProp;
  [DISABLE_STICKY]: TBooleanFalseProp;
  [INSET]: TBooleanFalseProp;
};
