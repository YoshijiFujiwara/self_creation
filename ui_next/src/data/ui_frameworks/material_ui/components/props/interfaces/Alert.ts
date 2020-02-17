import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TDontChange
} from "~/interfaces/material_components";

export enum EProps {
  ACTION = "action",
  CHILDREN = "children",
  CLASSES = "classes",
  CLOSE_TEXT = "closeText",
  COLOR = "color",
  ICON = "icon",
  ICON_MAPPING = "iconMapping",
  ON_CLOSE = "onClose",
  ROLE = "role",
  SEVERITY = "severity",
  VARIANT = "variant"
}

const {
  ACTION,
  CHILDREN,
  CLASSES,
  CLOSE_TEXT,
  COLOR,
  ICON,
  ICON_MAPPING,
  ON_CLOSE,
  ROLE,
  SEVERITY,
  VARIANT
} = EProps;

export type TAlertProps = {
  [ACTION]: TDontChange;
  [CHILDREN]: TEMPPropProperty;
  [CLASSES]: TDontChange;
  [CLOSE_TEXT]: TOverride<
    TEMPPropProperty,
    {
      value: string;
      default: "Close";
    }
  >;
  [COLOR]: TOverride<
    TEMPPropProperty,
    {
      value: "error" | "info" | "success" | "warning";
    }
  >;
  [ICON]: TDontChange;
  [ICON_MAPPING]: TDontChange;
  [ON_CLOSE]: TDontChange;
  [ROLE]: TOverride<
    TEMPPropProperty,
    {
      value: string;
      default: "alert";
    }
  >;
  [SEVERITY]: TOverride<
    TEMPPropProperty,
    {
      value: "error" | "info" | "success" | "warning";
      default: "success";
    }
  >;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "filled" | "outlined" | "standard";
      default: "standard";
    }
  >;
};
