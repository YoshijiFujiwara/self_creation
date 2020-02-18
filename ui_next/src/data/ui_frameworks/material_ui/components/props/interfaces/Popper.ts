import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TDontChange,
  TBooleanNullProp,
  TBooleanFalseProp
} from "~/interfaces/material_components";

export enum EProps {
  ANCHOR_EL = "anchorEl",
  CHILDREN = "children",
  CONTAINER = "container",
  DISABLE_PORTAL = "disablePortal",
  KEEP_MOUNTED = "keepMounted",
  MODIFIERS = "modifiers",
  OPEN = "open",
  PLACEMENT = "placement",
  POPPER_OPTIONS = "popperOptions",
  POPPER_REF = "popperRef",
  TRANSITION = "transition"
}

const {
  ANCHOR_EL,
  CHILDREN,
  CONTAINER,
  DISABLE_PORTAL,
  KEEP_MOUNTED,
  MODIFIERS,
  OPEN,
  PLACEMENT,
  POPPER_OPTIONS,
  POPPER_REF,
  TRANSITION
} = EProps;

export type TPopperProps = {
  [ANCHOR_EL]: TOverride<
    TEMPPropProperty,
    {
      value: object | Function | null;
    }
  >;
  [CHILDREN]: TDontChange;
  [CONTAINER]: TOverride<
    TEMPPropProperty,
    {
      value: object | Function | null;
    }
  >;
  [DISABLE_PORTAL]: TBooleanFalseProp;
  [KEEP_MOUNTED]: TBooleanFalseProp;
  [MODIFIERS]: TOverride<
    TEMPPropProperty,
    {
      value: object | null;
    }
  >;
  [OPEN]: TBooleanNullProp;
  [PLACEMENT]: TOverride<
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
      default: "bottom";
    }
  >;
  [POPPER_OPTIONS]: TOverride<
    TEMPPropProperty,
    {
      value: object;
      default: {};
    }
  >;
  [POPPER_REF]: TEMPPropProperty;
  [TRANSITION]: TBooleanFalseProp;
};
