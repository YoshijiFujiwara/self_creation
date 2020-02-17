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
  DISABLE_ANIMATION = "disableAnimation",
  DISABLED = "disabled",
  ERROR = "error",
  FOCUSED = "focused",
  MARGIN = "margin",
  REQUIRED = "required",
  SHRINK = "shrink",
  VARIANT = "variant"
}

const {
  CHILDREN,
  CLASSES,
  COLOR,
  DISABLE_ANIMATION,
  DISABLED,
  ERROR,
  FOCUSED,
  MARGIN,
  REQUIRED,
  SHRINK,
  VARIANT
} = EProps;

export type TInputLabelProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [COLOR]: TOverride<
    TEMPPropProperty,
    {
      value: "primary" | "secondary" | null;
    }
  >;
  [DISABLE_ANIMATION]: TBooleanFalseProp;
  [DISABLED]: TBooleanNullProp;
  [ERROR]: TBooleanNullProp;
  [FOCUSED]: TBooleanNullProp;
  [MARGIN]: TOverride<
    TEMPPropProperty,
    {
      value: "dense" | null;
    }
  >;
  [REQUIRED]: TBooleanNullProp;
  [SHRINK]: TBooleanNullProp;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "standard" | "outlined" | "filled" | null;
    }
  >;
};
