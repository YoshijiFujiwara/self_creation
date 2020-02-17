import { TOverride } from "~/interfaces/helper";
import {
  TDontChange,
  TEMPPropProperty
} from "~/interfaces/material_components";

export enum EProps {
  ACTION_ICON = "actionIcon",
  ACTION_POSITION = "actionPosition",
  CLASSES = "classes",
  SUB_TITLE = "subtitle",
  TITLE = "title",
  TITLE_POSITION = "titlePosition"
}

const {
  ACTION_ICON,
  ACTION_POSITION,
  CLASSES,
  SUB_TITLE,
  TITLE,
  TITLE_POSITION
} = EProps;

export type TGridListTileBarProps = {
  [ACTION_ICON]: TDontChange;
  [ACTION_POSITION]: TOverride<
    TEMPPropProperty,
    {
      value: "left" | "right";
      default: "right";
    }
  >;
  [CLASSES]: TDontChange;
  [SUB_TITLE]: TDontChange;
  [TITLE]: TDontChange;
  [TITLE_POSITION]: TOverride<
    TEMPPropProperty,
    {
      value: "top" | "bottom";
      default: "bottom";
    }
  >;
};
