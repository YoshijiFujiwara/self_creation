import { ElementType } from "react";
import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TFuncNull,
  TNodeNull,
  TStringNull,
  TObjectNull,
  TNumberNullProp,
  TBooleanFalseProp
} from "~/interfaces/material_components";

export enum EProps {
  CLASSES = "classes",
  DEFAULT_VALUE = "defaultValue",
  DISABLED = "disabled",
  EMPTY_ICON = "emptyIcon",
  EMPTY_LABEL_TEXT = "emptyLabelText",
  GET_LABEL_TEXT = "getLabelText",
  ICON = "icon",
  ICON_CONTAINER_COMPONENT = "IconContainerComponent",
  MAX = "max",
  NAME = "name",
  ON_CHANGE = "onChange",
  ON_CHANGE_ACTIVE = "onChangeActive",
  PRECISION = "precision",
  READ_ONLY = "readOnly",
  SIZE = "size",
  VALUE = "value"
}

const {
  CLASSES,
  DEFAULT_VALUE,
  DISABLED,
  EMPTY_ICON,
  EMPTY_LABEL_TEXT,
  GET_LABEL_TEXT,
  ICON,
  ICON_CONTAINER_COMPONENT,
  MAX,
  NAME,
  ON_CHANGE,
  ON_CHANGE_ACTIVE,
  PRECISION,
  READ_ONLY,
  SIZE,
  VALUE
} = EProps;

export type TRatingProps = {
  [CLASSES]: TObjectNull;
  [DEFAULT_VALUE]: TNumberNullProp;
  [DISABLED]: TBooleanFalseProp;
  [EMPTY_ICON]: TNodeNull;
  [EMPTY_LABEL_TEXT]: TOverride<
    TEMPPropProperty,
    {
      value: Node;
      default: "Empty";
    }
  >;
  [GET_LABEL_TEXT]: TOverride<
    TEMPPropProperty,
    {
      value: Function;
      // default: function defaultLabelText(value) { return ${value} Star${value !== 1 ? 's' : ''};}
      changeable: false;
    }
  >;
  [ICON]: TOverride<
    TEMPPropProperty,
    {
      value: Node;
      // default: <Star fontSize="inherit" />
      changeable: false;
    }
  >;
  [ICON_CONTAINER_COMPONENT]: TOverride<
    TEMPPropProperty,
    {
      value: ElementType;
      // default: function IconContainer(props) { const { value, ...other } = props; return <span {...other} />;}
      changeable: false;
    }
  >;
  [MAX]: TOverride<
    TEMPPropProperty,
    {
      value: number;
      default: 5;
    }
  >;
  [NAME]: TStringNull;
  [ON_CHANGE]: TFuncNull;
  [ON_CHANGE_ACTIVE]: TFuncNull;
  [PRECISION]: TOverride<
    TEMPPropProperty,
    {
      value: number;
      default: 1;
    }
  >;
  [READ_ONLY]: TBooleanFalseProp;
  [SIZE]: TOverride<
    TEMPPropProperty,
    {
      value: "small" | "medium" | "large";
      default: "medium";
    }
  >;
  [VALUE]: TNumberNullProp;
};
