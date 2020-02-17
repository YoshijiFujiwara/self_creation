import { TOverride } from "~/interfaces/helper";
import {
  TDontChange,
  TEMPPropProperty,
  TNumberNullProp
} from "~/interfaces/material_components";

export enum EProps {
  CLASSES = "classes",
  COLOR = "color",
  VALUE = "value",
  VALUE_BUFFER = "valueBuffer",
  VARIANT = "variant"
}

const { CLASSES, COLOR, VALUE, VALUE_BUFFER, VARIANT } = EProps;

export type TLinearProgressProps = {
  [CLASSES]: TDontChange;
  [COLOR]: TOverride<
    TEMPPropProperty,
    {
      value: "primary" | "secondary" | null;
    }
  >;
  [VALUE]: TNumberNullProp;
  [VALUE_BUFFER]: TNumberNullProp;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "determinate" | "indeterminate" | "buffer" | "query" | null;
      default: "indeterminate";
    }
  >;
};
