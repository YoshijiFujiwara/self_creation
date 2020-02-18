import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TBooleanFalseProp,
  TDontChange
} from "~/interfaces/material_components";

export enum EProps {
  COLOR = "color",
  COMPONENT = "component",
  DISABLED = "disabled",
  PAGE = "page",
  SELECTED = "selected",
  SHAPE = "shape",
  SIZE = "size",
  TYPE = "type",
  VARIANT = "variant"
}

const {
  COLOR,
  COMPONENT,
  DISABLED,
  PAGE,
  SELECTED,
  SHAPE,
  SIZE,
  TYPE,
  VARIANT
} = EProps;

export type TPaginationItemProps = {
  [COLOR]: TOverride<
    TEMPPropProperty,
    {
      value: "standard" | "primary" | "secondary";
      default: "standard";
    }
  >;
  [COMPONENT]: TDontChange;
  [DISABLED]: TBooleanFalseProp;
  [PAGE]: TOverride<
    TEMPPropProperty,
    {
      value: number | null;
    }
  >;
  [SELECTED]: TBooleanFalseProp;
  [SHAPE]: TOverride<
    TEMPPropProperty,
    {
      value: "round" | "rounded";
      default: "round";
    }
  >;
  [SIZE]: TOverride<
    TEMPPropProperty,
    {
      value: "small" | "medium" | "large";
      default: "medium";
    }
  >;
  [TYPE]: TOverride<
    TEMPPropProperty,
    {
      value:
        | "page"
        | "first"
        | "last"
        | "next"
        | "previous"
        | "start-ellipsis"
        | "end-ellipsis";
      default: "page";
    }
  >;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "text" | "outlined";
      default: "text";
    }
  >;
};
