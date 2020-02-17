import { TOverride } from "~/interfaces/helper";
import {
  TDontChange,
  TEMPPropProperty,
  TBooleanFalseProp,
  TBooleanNullProp
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  COLOR = "color",
  DISABLED = "disbled",
  DISABLE_FOCUS_RIPPLE = "disableFocusRipple",
  DISABLE_RIPPLE = "disableRipple",
  EDGE = "edge",
  SIZE = "size"
}

const {
  CHILDREN,
  CLASSES,
  COLOR,
  DISABLED,
  DISABLE_FOCUS_RIPPLE,
  DISABLE_RIPPLE,
  EDGE,
  SIZE
} = EProps;

export type TIconButtonProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [COLOR]: TOverride<
    TEMPPropProperty,
    {
      value:
        | "inherit"
        | "primary"
        | "secondary"
        | "action"
        | "error"
        | "disabled";
      default: "inherit";
    }
  >;
  [DISABLED]: TBooleanFalseProp;
  [DISABLE_FOCUS_RIPPLE]: TBooleanFalseProp;
  [DISABLE_RIPPLE]: TBooleanNullProp;
  [EDGE]: TOverride<
    TEMPPropProperty,
    {
      value: "start" | "end" | false;
      default: false;
    }
  >;
  [SIZE]: TOverride<
    TEMPPropProperty,
    {
      value: "small" | "medium";
      default: "medium";
    }
  >;
};
