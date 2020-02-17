import { TOverride } from "~/interfaces/helper";
import {
  TDontChange,
  TBooleanNullProp,
  TEMPPropProperty
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  COMPONENT = "component",
  DISABLED = "disabled",
  ERROR = "error",
  FILLED = "filled",
  FOCUSED = "focused",
  MARGIN = "margin",
  REQUIRED = "required",
  VARIANT = "variant"
}

const {
  CHILDREN,
  CLASSES,
  COMPONENT,
  DISABLED,
  ERROR,
  FILLED,
  FOCUSED,
  MARGIN,
  REQUIRED,
  VARIANT
} = EProps;

export type TFormHelperTextProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [COMPONENT]: TDontChange;
  [DISABLED]: TBooleanNullProp;
  [ERROR]: TBooleanNullProp;
  [FILLED]: TBooleanNullProp;
  [FOCUSED]: TBooleanNullProp;
  [MARGIN]: TOverride<
    TEMPPropProperty,
    {
      value: "dense" | null;
    }
  >;
  [REQUIRED]: TBooleanNullProp;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "standard" | "outlined" | "filled" | null;
    }
  >;
};
