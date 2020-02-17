import { TOverride } from "~/interfaces/helper";
import {
  TDontChange,
  TEMPPropProperty
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  IN = "in",
  TIMEOUT = "timeout"
}

const { CHILDREN, IN, TIMEOUT } = EProps;

export type TFadeProps = {
  [CHILDREN]: TDontChange;
  [IN]: TOverride<
    TEMPPropProperty,
    {
      value: boolean | null;
    }
  >;
  [TIMEOUT]: TOverride<
    TEMPPropProperty,
    {
      value: number | { enter?: number; exit?: number };
      changeable: false;
    }
  >;
};
