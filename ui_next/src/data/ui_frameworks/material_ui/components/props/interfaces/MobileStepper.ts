import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TDontChange
} from "~/interfaces/material_components";

export enum EProps {
  ACTIVE_STEP = "activeStep",
  BACK_BUTTON = "backButton",
  CLASSES = "classes",
  LINEAR_PROGRESS_PROPS = "LinearProgressProps",
  NEXT_BUTTON = "nextButton",
  POSITION = "position",
  STEPS = "steps",
  VARIANT = "variant"
}

const {
  ACTIVE_STEP,
  BACK_BUTTON,
  CLASSES,
  LINEAR_PROGRESS_PROPS,
  NEXT_BUTTON,
  POSITION,
  STEPS,
  VARIANT
} = EProps;

export type TMobileStepperProps = {
  [ACTIVE_STEP]: TOverride<
    TEMPPropProperty,
    {
      value: number;
      default: 0;
    }
  >;
  [BACK_BUTTON]: TEMPPropProperty;
  [CLASSES]: TDontChange;
  [LINEAR_PROGRESS_PROPS]: TEMPPropProperty;
  [NEXT_BUTTON]: TEMPPropProperty;
  [POSITION]: TOverride<
    TEMPPropProperty,
    {
      value: "bottom" | "top" | "static";
      default: "bottom";
    }
  >;
  [STEPS]: TOverride<
    TEMPPropProperty,
    {
      value: number | null;
    }
  >;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "text" | "dots" | "progress";
      default: "dots";
    }
  >;
};
