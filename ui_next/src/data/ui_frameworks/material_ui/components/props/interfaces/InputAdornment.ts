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
  COMPONENT = "component",
  DISABLE_POINTER_EVENTS = "disablePointerEvents",
  DISABLE_TYPOGRAPHY = "disableTypography",
  POSITION = "position",
  VARIANT = "variant"
}

const {
  CHILDREN,
  CLASSES,
  COMPONENT,
  DISABLE_POINTER_EVENTS,
  DISABLE_TYPOGRAPHY,
  POSITION,
  VARIANT
} = EProps;

export type TInputAdornmentProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [COMPONENT]: TDontChange;
  [DISABLE_POINTER_EVENTS]: TBooleanNullProp;
  [DISABLE_TYPOGRAPHY]: TBooleanFalseProp;
  [POSITION]: TOverride<
    TEMPPropProperty,
    {
      value: "start" | "end" | null;
    }
  >;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "standard" | "outlined" | "filled" | null;
    }
  >;
};
