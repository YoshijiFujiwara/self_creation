import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TDontChange,
  TBooleanFalseProp
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  COLOR = "color",
  COMPONENT = "component",
  DISABLED = "disabled",
  ERROR = "error",
  FULL_WIDTH = "fullWidth",
  HIDDEN_LABEL = "hiddenLabel",
  MARGIN = "margin",
  REQUIRED = "required",
  SIZE = "size",
  VARIANT = "variant"
}

const {
  CHILDREN,
  CLASSES,
  COLOR,
  COMPONENT,
  DISABLED,
  ERROR,
  FULL_WIDTH,
  HIDDEN_LABEL,
  MARGIN,
  REQUIRED,
  SIZE,
  VARIANT
} = EProps;

export type TFormControlProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [COLOR]: TOverride<
    TEMPPropProperty,
    {
      value: "primary" | "secondary";
      default: "primary";
    }
  >;
  [COMPONENT]: TDontChange;
  [DISABLED]: TBooleanFalseProp;
  [ERROR]: TBooleanFalseProp;
  [FULL_WIDTH]: TBooleanFalseProp;
  [HIDDEN_LABEL]: TBooleanFalseProp;
  [MARGIN]: TOverride<
    TEMPPropProperty,
    {
      value: "none" | "dense" | "normal";
      default: "none";
    }
  >;
  [REQUIRED]: TBooleanFalseProp;
  [SIZE]: TOverride<
    TEMPPropProperty,
    {
      value: "small" | "medium" | null;
    }
  >;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "standard" | "outlined" | "filled";
      default: "standard";
    }
  >;
};
