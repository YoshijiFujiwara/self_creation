import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TNodeNull,
  TBooleanNullProp
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  IN = "in",
  TIMEOUT = "timeout"
}

const { CHILDREN, IN, TIMEOUT } = EProps;

export type TZoomProps = {
  [CHILDREN]: TNodeNull;
  [IN]: TBooleanNullProp;
  [TIMEOUT]: TOverride<
    TEMPPropProperty,
    {
      value: number | { enter?: number; exit?: number };
      default: object;
    }
  >;
};
