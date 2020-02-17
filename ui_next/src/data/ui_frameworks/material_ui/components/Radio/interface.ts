import { TColorValue } from "~/data/ui_frameworks/material_ui/components/share/interface";
import { TOverride } from "~/interfaces/helper";
import { TPropProperty } from "~/interfaces/material_components";

export enum EPropName {
  CHECKED = "checked",
  CHECKED_ICON = "checkedIcon",
  CLASSES = "classes",
  COLOR = "color",
  DISABLED = "disabled",
  DISABLE_RIPPLE = "disableRipple",
  ICON = "icon",
  ID = "id",
  INPUT_PROPS = "inputProps",
  INPUT_REF = "inputRef",
  NAME = "name",
  ON_CHANGE = "onChange",
  REQUIRED = "required",
  SIZE = "size",
  TYPE = "type",
  VALUE = "value"
}

const {
  CHECKED,
  CHECKED_ICON,
  CLASSES,
  COLOR,
  DISABLED,
  DISABLE_RIPPLE,
  ICON,
  ID,
  INPUT_PROPS,
  INPUT_REF,
  NAME,
  ON_CHANGE,
  REQUIRED,
  SIZE,
  TYPE,
  VALUE
} = EPropName;

export type TRadioProps = {
  [CHECKED]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: null;
    }
  >;
  [CHECKED_ICON]: TPropProperty;
  [CLASSES]: TPropProperty;
  [COLOR]: TOverride<
    TPropProperty,
    {
      value: Omit<TColorValue, "inherit">;
      default: "secondary";
    }
  >;
  [DISABLED]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: null;
    }
  >;
  [DISABLE_RIPPLE]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: null;
    }
  >;
  [ICON]: TPropProperty;
  [ID]: TOverride<
    TPropProperty,
    {
      value: string;
      default: null;
    }
  >;
  [INPUT_PROPS]: TPropProperty;
  [INPUT_REF]: TPropProperty;
  [NAME]: TOverride<
    TPropProperty,
    {
      value: string;
      default: null;
    }
  >;
  [ON_CHANGE]: TOverride<
    TPropProperty,
    {
      value: Function | null;
      default: null;
    }
  >;
  [REQUIRED]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: null;
    }
  >;
  [SIZE]: TOverride<
    TPropProperty,
    {
      value: "small" | "medium";
      default: "medium";
    }
  >;
  [TYPE]: TOverride<
    TPropProperty,
    {
      value: string;
      default: null;
    }
  >;
  [VALUE]: TPropProperty;
};
