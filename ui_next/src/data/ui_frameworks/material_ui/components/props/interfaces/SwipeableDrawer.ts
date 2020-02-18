import { TOverride } from "~/interfaces/helper";
import {
  TObjectNull,
  TNodeNull,
  TEMPPropProperty,
  TBooleanFalseProp,
  TBooleanNullProp,
  TDontChange,
  TNumberWithDefault,
  TFuncNull
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  DISABLE_BACKDROP_TRANSITION = "disableBackdropTransition",
  DISABLE_DISCOVETY = "disableDiscovery",
  DISABLE_SWIPE_TO_OPEN = "disableSwipeToOpen",
  HYSTERESIS = "hysteresis",
  MIN_FLING_VELOCITY = "minFlingVelocity",
  ON_CLOSE = "onClose",
  ON_OPEN = "onOpen",
  OPEN = "open",
  SWIPE_AREA_PROPS = "SwipeAreaProps",
  SWIPE_AREA_WIDTH = "swipeAreaWidth",
  TRANSITION_DURATION = "transitionDuration"
}

const {
  CHILDREN,
  DISABLE_BACKDROP_TRANSITION,
  DISABLE_DISCOVETY,
  DISABLE_SWIPE_TO_OPEN,
  HYSTERESIS,
  MIN_FLING_VELOCITY,
  ON_CLOSE,
  ON_OPEN,
  OPEN,
  SWIPE_AREA_PROPS,
  SWIPE_AREA_WIDTH,
  TRANSITION_DURATION
} = EProps;

export type TSwipeableDrawerProps = {
  [CHILDREN]: TNodeNull;
  [DISABLE_BACKDROP_TRANSITION]: TBooleanFalseProp;
  [DISABLE_DISCOVETY]: TBooleanFalseProp;
  [DISABLE_SWIPE_TO_OPEN]: TDontChange;
  [HYSTERESIS]: TNumberWithDefault<0.52>;
  [MIN_FLING_VELOCITY]: TNumberWithDefault<450>;
  [ON_CLOSE]: TFuncNull;
  [ON_OPEN]: TFuncNull;
  [OPEN]: TBooleanNullProp;
  [SWIPE_AREA_PROPS]: TObjectNull;
  [SWIPE_AREA_WIDTH]: TNumberWithDefault<20>;
  [TRANSITION_DURATION]: TOverride<
    TEMPPropProperty,
    {
      value: number | { enter?: number; exit?: number };
      default: object;
    }
  >;
};
