import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TDontChange
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  COLLAPSE_HEIGHT = "collapsedHeight",
  COMPONENT = "component",
  IN = "in",
  TIMEOUT = "timeout"
}

const { CHILDREN, CLASSES, COLLAPSE_HEIGHT, COMPONENT, IN, TIMEOUT } = EProps;

export type TCollapseProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [COLLAPSE_HEIGHT]: TOverride<
    TEMPPropProperty,
    {
      value: string | number;
      default: "0px";
    }
  >;
  [COMPONENT]: TDontChange;
  [IN]: TOverride<
    TEMPPropProperty,
    {
      value: boolean | null;
    }
  >;
  [TIMEOUT]: TOverride<
    TEMPPropProperty,
    {
      value: number | { enter?: number; exit?: number } | "auto";
      // default: duration.standard
      changeable: false;
    }
  >;
};
