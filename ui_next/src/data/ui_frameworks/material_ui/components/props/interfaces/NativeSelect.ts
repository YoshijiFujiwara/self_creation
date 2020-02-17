import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TDontChange,
  TFuncNull
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  ICON_COMPONENT = "IconComponent",
  INPUT = "input",
  INPUT_PROPS = "inputProps",
  ON_CHANGE = "onChange",
  VALUE = "value",
  VARIANT = "variant"
}

const {
  CHILDREN,
  CLASSES,
  ICON_COMPONENT,
  INPUT,
  INPUT_PROPS,
  ON_CHANGE,
  VALUE,
  VARIANT
} = EProps;

export type TNativeSelectProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [ICON_COMPONENT]: TEMPPropProperty;
  [INPUT]: TDontChange;
  [INPUT_PROPS]: TOverride<
    TEMPPropProperty,
    {
      value: object | null;
    }
  >;
  [ON_CHANGE]: TFuncNull;
  [VALUE]: TEMPPropProperty;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "standard" | "outlined" | "filled" | null;
    }
  >;
};
