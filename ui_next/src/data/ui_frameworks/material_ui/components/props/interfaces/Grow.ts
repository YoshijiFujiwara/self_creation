import { TOverride } from "~/interfaces/helper";
import {
  TDontChange,
  TEMPPropProperty,
  TBooleanNullProp
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  IN = "in",
  TIMEOUT = "timeout"
}

const { CHILDREN, IN, TIMEOUT } = EProps;

export type TGrowProps = {
  [CHILDREN]: TDontChange;
  [IN]: TBooleanNullProp;
  [TIMEOUT]: TOverride<
    TEMPPropProperty,
    {
      value: number | { enter?: number; exit?: number } | "auto";
      default: "auto";
    }
  >;
};
