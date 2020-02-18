import { TOverride } from "~/interfaces/helper";
import { TEMPPropProperty } from "~/interfaces/material_components";

export enum EProps {
  ROWS = "rows",
  ROWS_MAX = "rowsMax",
  ROWS_MIN = "rowsMin"
}

const { ROWS, ROWS_MAX, ROWS_MIN } = EProps;

export type TTextareaAutosizeProps = {
  [ROWS]: TOverride<
    TEMPPropProperty,
    {
      value: string | number | null;
    }
  >;
  [ROWS_MAX]: TOverride<
    TEMPPropProperty,
    {
      value: string | number | null;
    }
  >;
  [ROWS_MIN]: TOverride<
    TEMPPropProperty,
    {
      value: string | number;
      default: 1;
    }
  >;
};
