import { TOverride } from "~/interfaces/helper";
import {
  TDontChange,
  TBooleanNullProp,
  TEMPPropProperty
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  COLOR = "color",
  COMPONENT = "component",
  DISABLED = "disabled",
  ERROR = "error",
  FILLED = "filled",
  FOCUSED = "focused",
  REQUIRED = "required"
}

const {
  CHILDREN,
  CLASSES,
  COLOR,
  COMPONENT,
  DISABLED,
  ERROR,
  FILLED,
  FOCUSED,
  REQUIRED
} = EProps;

export type TFormLabelProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [COLOR]: TOverride<
    TEMPPropProperty,
    {
      value: "primary" | "secondary" | null;
    }
  >;
  [COMPONENT]: TDontChange;
  [DISABLED]: TBooleanNullProp;
  [ERROR]: TBooleanNullProp;
  [FILLED]: TBooleanNullProp;
  [FOCUSED]: TBooleanNullProp;
  [REQUIRED]: TBooleanNullProp;
};
