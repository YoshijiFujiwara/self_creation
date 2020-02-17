import { TOverride } from "~/interfaces/helper";
import {
  TDontChange,
  TEMPPropProperty
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  ICON = "icon",
  LABEL = "label",
  SHOW_LABEL = "showLabel",
  VALUE = "value"
}

const { CHILDREN, CLASSES, ICON, LABEL, SHOW_LABEL, VALUE } = EProps;

export type TBottomNavigationActionProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [ICON]: TDontChange;
  [LABEL]: TDontChange;
  [SHOW_LABEL]: TOverride<
    TEMPPropProperty,
    {
      value: boolean | null;
    }
  >;
  [VALUE]: TEMPPropProperty;
};
