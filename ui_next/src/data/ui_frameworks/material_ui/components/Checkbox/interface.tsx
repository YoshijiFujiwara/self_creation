// [FIY] https://stackoverflow.com/questions/43080547/how-to-override-type-properties-in-typescript
// [ex] type HexColorLine = TOverride<Line, { color: number }>
import { TOverride } from "~/interfaces/helper";
import { TPropProperty } from "~/interfaces/material_components";

export enum EPropName {
  CHECKED = "checked",
  // CHECKED_ICON = "checkedIcon", // ICON系統は、自分で設定するものでは無さそうなため
  CLASSES = "classes",
  COLOR = "color",
  DISABLED = "disabled",
  DISABLE_RIPPLE = "disableRipple",
  // ICON = "icon",
  ID = "id",
  INDETERMINATE = "indeterminate",
  // INDETERMINATE_ICON = "indeterminateIcon",
  INPUT_PROPS = "inputProps",
  INPUT_REF = "inputRef",
  ON_CHANGE = "onChange",
  REQUIRED = "required",
  SIZE = "size",
  TYPE = "type",
  VALUE = "value"
}

const {
  CHECKED,
  // CHECKED_ICON,
  CLASSES,
  COLOR,
  DISABLED,
  DISABLE_RIPPLE,
  // ICON,
  ID,
  INDETERMINATE,
  // INDETERMINATE_ICON,
  INPUT_PROPS,
  INPUT_REF,
  ON_CHANGE,
  REQUIRED,
  SIZE,
  TYPE,
  VALUE
} = EPropName;

export type TCheckBoxProps = {
  [CHECKED]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  // [CHECKED_ICON]: TPropProperty;
  [CLASSES]: TPropProperty;
  [COLOR]: TOverride<
    TPropProperty,
    {
      value: "secondary";
      default: "secondary";
    }
  >;
  [DISABLED]: TOverride<
    TPropProperty,
    {
      value: boolean;
    }
  >;
  [DISABLE_RIPPLE]: TOverride<
    TPropProperty,
    {
      value: boolean;
    }
  >;
  // [ICON]: TPropProperty;
  [ID]: TOverride<
    TPropProperty,
    {
      value: string;
    }
  >;
  [INDETERMINATE]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  // [INDETERMINATE_ICON]: TPropProperty;
  [INPUT_PROPS]: TPropProperty;
  [INPUT_REF]: TPropProperty;
  [ON_CHANGE]: TOverride<
    TPropProperty,
    {
      value: Function | null;
    }
  >;
  [REQUIRED]: TOverride<
    TPropProperty,
    {
      value: boolean;
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
      default: "";
    }
  >;
  [VALUE]: TPropProperty;
};
