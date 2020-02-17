import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TDontChange,
  TFuncNull
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  MOUSE_EVENT = "mouseEvent",
  ON_CLICK_AWAY = "onClickAway",
  TOUCH_EVENT = "touchEvent"
}

const { CHILDREN, MOUSE_EVENT, ON_CLICK_AWAY, TOUCH_EVENT } = EProps;

export type TClickAwayListenerProps = {
  [CHILDREN]: TDontChange;
  [MOUSE_EVENT]: TOverride<
    TEMPPropProperty,
    {
      value: "onClick" | "onMouseDown" | "onMouseUp" | false;
      default: "onClick";
    }
  >;
  [ON_CLICK_AWAY]: TFuncNull;
  [TOUCH_EVENT]: TOverride<
    TEMPPropProperty,
    {
      value: "onTouchStart" | "onTouchEnd" | false;
      default: "onTouchEnd";
    }
  >;
};
