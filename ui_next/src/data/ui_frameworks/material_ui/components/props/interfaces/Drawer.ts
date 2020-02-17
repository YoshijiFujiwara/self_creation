import { TOverride } from "~/interfaces/helper";
import {
  TDontChange,
  TBooleanFalseProp,
  TEMPPropProperty,
  TFuncNull
} from "~/interfaces/material_components";

export enum EProps {
  ANCHOR = "anchor",
  CHILDREN = "children",
  CLASSES = "classes",
  ELEVATION = "elevation",
  MODAL_PROPS = "ModalProps",
  ON_CLOSE = "onClose",
  OPEN = "open",
  PAPER_PROPS = "PaperProps",
  SLIDE_PROPS = "SlideProps",
  TRANSITION_DURATION = "transitionDuration",
  VARIANT = "variant"
}

const {
  ANCHOR,
  CHILDREN,
  CLASSES,
  ELEVATION,
  MODAL_PROPS,
  ON_CLOSE,
  OPEN,
  PAPER_PROPS,
  SLIDE_PROPS,
  TRANSITION_DURATION,
  VARIANT
} = EProps;

export type TDrawerProps = {
  [ANCHOR]: TOverride<
    TEMPPropProperty,
    {
      value: "left" | "top" | "right" | "bottom";
      default: "left";
    }
  >;
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [ELEVATION]: TOverride<
    TEMPPropProperty,
    {
      value: number;
      default: 16;
    }
  >;
  [MODAL_PROPS]: TOverride<
    TEMPPropProperty,
    {
      value: object;
      default: {};
    }
  >;
  [ON_CLOSE]: TFuncNull;
  [OPEN]: TBooleanFalseProp;
  [PAPER_PROPS]: TOverride<
    TEMPPropProperty,
    {
      value: object;
      default: {};
    }
  >;
  [SLIDE_PROPS]: TDontChange;
  [TRANSITION_DURATION]: TOverride<
    TEMPPropProperty,
    {
      value: number | { enter?: number; exit?: number };
      changeable: false;
    }
  >;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "permanent" | "persistent" | "temporary";
      default: "temporary";
    }
  >;
};
