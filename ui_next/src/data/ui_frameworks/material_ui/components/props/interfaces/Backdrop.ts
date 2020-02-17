import { TOverride } from "~/interfaces/helper";
import {
  TDontChange,
  TBooleanFalseProp,
  TEMPPropProperty
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  INVISIBLE = "invisible",
  OPEN = "open",
  TRANSITION_DURATION = "transitionDuration"
}

const { CHILDREN, CLASSES, INVISIBLE, OPEN, TRANSITION_DURATION } = EProps;

export type TBackdropProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [INVISIBLE]: TBooleanFalseProp;
  [OPEN]: TOverride<
    TEMPPropProperty,
    {
      value: boolean | null;
    }
  >;
  [TRANSITION_DURATION]: TOverride<
    TEMPPropProperty,
    {
      value: number | { appear?: number; enter?: number; exit?: number } | null;
    }
  >;
};
