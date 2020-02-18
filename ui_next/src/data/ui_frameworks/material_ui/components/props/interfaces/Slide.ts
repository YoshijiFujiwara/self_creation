import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TElementNull,
  TBooleanNullProp
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  DIRECTION = "direction",
  IN = "in",
  TIMEOUT = "timeout"
}

const { CHILDREN, DIRECTION, IN, TIMEOUT } = EProps;

export type TSlideProps = {
  [CHILDREN]: TElementNull;
  [DIRECTION]: TOverride<
    TEMPPropProperty,
    {
      value: "left" | "right" | "up" | "down";
      default: "down";
    }
  >;
  [IN]: TBooleanNullProp;
  [TIMEOUT]: TOverride<
    TEMPPropProperty,
    {
      value: number | { enter?: number; exit?: number };
      // default: { enter: duration.enteringScreen; exit: duration.leavingScreen };
      changeable: false;
    }
  >;
};
