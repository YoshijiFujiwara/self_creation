import { ElementType } from "react";
import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TStringNull,
  TObjectNull,
  TBooleanFalseProp,
  TFuncNull,
  TNumberWithDefault
} from "~/interfaces/material_components";

export enum EProps {
  ARIA_LABEL = "aria-label",
  ARIA_LABELLEDBY = "aria-labelledby",
  ARIA_VALUETEXT = "aria-valuetext",
  CLASSES = "classes",
  COLOR = "color",
  COMPONENT = "component",
  DEFAULT_VALUE = "defaultValue",
  DISABLED = "disabled",
  GET_ARIA_LABEL = "getAriaLabel",
  GET_ARIA_VALUETEXT = "getAriaValueText",
  MARKS = "marks",
  MAX = "max",
  MIN = "min",
  NAME = "name",
  ON_CHANGE = "onChange",
  ON_CHANGE_COMMITTED = "onChangeCommitted",
  ORIENTATION = "orientation",
  SCALE = "scale",
  STEP = "step",
  THUMB_COMPONENT = "ThumbComponent",
  TRACK = "track",
  VALUE = "value",
  VALUE_LABEL_COMPONENT = "ValueLabelComponent",
  VALUE_LABEL_DISPLAY = "valueLabelDisplay",
  VALUE_LABEL_FORMAT = "valueLabelFormat"
}

const {
  ARIA_LABEL,
  ARIA_LABELLEDBY,
  ARIA_VALUETEXT,
  CLASSES,
  COLOR,
  COMPONENT,
  DEFAULT_VALUE,
  DISABLED,
  GET_ARIA_LABEL,
  GET_ARIA_VALUETEXT,
  MARKS,
  MAX,
  MIN,
  NAME,
  ON_CHANGE,
  ON_CHANGE_COMMITTED,
  ORIENTATION,
  SCALE,
  STEP,
  THUMB_COMPONENT,
  TRACK,
  VALUE,
  VALUE_LABEL_COMPONENT,
  VALUE_LABEL_DISPLAY,
  VALUE_LABEL_FORMAT
} = EProps;

export type TSliderProps = {
  [ARIA_LABEL]: TStringNull;
  [ARIA_LABELLEDBY]: TStringNull;
  [ARIA_VALUETEXT]: TStringNull;
  [CLASSES]: TObjectNull;
  [COLOR]: TOverride<
    TEMPPropProperty,
    {
      value: "primary" | "secondary";
      default: "primary";
    }
  >;
  [COMPONENT]: TOverride<
    TEMPPropProperty,
    {
      value: ElementType;
      default: "span";
    }
  >;
  [DEFAULT_VALUE]: TOverride<
    TEMPPropProperty,
    {
      value: number | Array<number> | null;
    }
  >;
  [DISABLED]: TBooleanFalseProp;
  [GET_ARIA_LABEL]: TFuncNull;
  [GET_ARIA_VALUETEXT]: TFuncNull;
  [MARKS]: TOverride<
    TEMPPropProperty,
    {
      value: boolean | Array<boolean>; // Arrayの中身は不明
      default: false;
    }
  >;
  [MAX]: TNumberWithDefault<100>;
  [MIN]: TNumberWithDefault<0>;
  [NAME]: TStringNull;
  [ON_CHANGE]: TFuncNull;
  [ON_CHANGE_COMMITTED]: TFuncNull;
  [ORIENTATION]: TOverride<
    TEMPPropProperty,
    {
      value: "horizontal" | "vertical";
      default: "horizontal";
    }
  >;
  [SCALE]: TOverride<
    TEMPPropProperty,
    {
      value: Function;
      // deafult: (any) => any;
      changeable: false;
    }
  >;
  [STEP]: TNumberWithDefault<1>;
  [THUMB_COMPONENT]: TOverride<
    TEMPPropProperty,
    {
      value: ElementType;
      default: "span";
    }
  >;
  [TRACK]: TOverride<
    TEMPPropProperty,
    {
      value: "normal" | false | "inverted";
      default: "normal";
    }
  >;
  [VALUE]: TOverride<
    TEMPPropProperty,
    {
      value: number | Array<number> | null;
    }
  >;
  [VALUE_LABEL_COMPONENT]: TOverride<
    TEMPPropProperty,
    {
      value: ElementType;
      default: Function;
    }
  >;
  [VALUE_LABEL_DISPLAY]: TOverride<
    TEMPPropProperty,
    {
      value: "on" | "auto" | "off";
      default: "off";
    }
  >;
  [VALUE_LABEL_FORMAT]: TOverride<
    TEMPPropProperty,
    {
      value: string | Function;
      default: Function;
    }
  >;
};
