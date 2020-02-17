import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TDontChange,
  TBooleanFalseProp,
  TFuncNull
} from "~/interfaces/material_components";

export enum EProps {
  AVATAR = "avatar",
  CHILDREN = "children",
  CLASSES = "classes",
  CLICKABLE = "clickable",
  COLOR = "color",
  COMPONENT = "component",
  DELETE_ICON = "deleteIcon",
  DISABLED = "disabled",
  ICON = "icon",
  LABEL = "label",
  ON_DELETE = "onDelete",
  SIZE = "size",
  VARIANT = "variant"
}

const {
  AVATAR,
  CHILDREN,
  CLASSES,
  CLICKABLE,
  COLOR,
  COMPONENT,
  DELETE_ICON,
  DISABLED,
  ICON,
  LABEL,
  ON_DELETE,
  SIZE,
  VARIANT
} = EProps;

export type TChipProps = {
  [AVATAR]: TDontChange;
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [CLICKABLE]: TOverride<
    TEMPPropProperty,
    {
      value: boolean | null;
    }
  >;
  [COLOR]: TOverride<
    TEMPPropProperty,
    {
      value: "default" | "primary" | "secondary";
      default: "default";
    }
  >;
  [COMPONENT]: TDontChange;
  [DELETE_ICON]: TDontChange;
  [DISABLED]: TBooleanFalseProp;
  [ICON]: TDontChange;
  [LABEL]: TDontChange;
  [ON_DELETE]: TFuncNull;
  [SIZE]: TOverride<
    TEMPPropProperty,
    {
      value: "small" | "medium";
      default: "medium";
    }
  >;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "default" | "outlined";
      default: "default";
    }
  >;
};
