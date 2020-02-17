import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TDontChange,
  TBooleanFalseProp,
  TStringNull,
  TBooleanNullProp,
  TFuncNull
} from "~/interfaces/material_components";

export enum EProps {
  BOUNDARY_COUNT = "boundaryCount",
  CHILDREN = "children",
  CLASSES = "classes",
  COLOR = "color",
  COUNT = "count",
  DEFAULT_PAGE = "defaultPage",
  DISABLED = "disabled",
  GET_ITEM_ARIA_LABEL = "getItemAriaLabel",
  HIDE_NEXT_BUTTON = "hideNextButton",
  HIDE_PREV_BUTTON = "hidePrevButton",
  ON_CHANGE = "onChange",
  PAGE = "page",
  RENDER_ITEM = "renderItem",
  SHAPE = "shape",
  SHOW_FIRST_BUTTON = "showFirstButton",
  SHOW_LAST_BUTTON = "showLastButton",
  SIBLING_COUNT = "siblingCount",
  SIZE = "size",
  VARIANT = "variant"
}

const {
  BOUNDARY_COUNT,
  CHILDREN,
  CLASSES,
  COLOR,
  COUNT,
  DEFAULT_PAGE,
  DISABLED,
  GET_ITEM_ARIA_LABEL,
  HIDE_NEXT_BUTTON,
  HIDE_PREV_BUTTON,
  ON_CHANGE,
  PAGE,
  RENDER_ITEM,
  SHAPE,
  SHOW_FIRST_BUTTON,
  SHOW_LAST_BUTTON,
  SIBLING_COUNT,
  SIZE,
  VARIANT
} = EProps;

export type TPaginationProps = {
  [BOUNDARY_COUNT]: TOverride<
    TEMPPropProperty,
    {
      value: number;
      default: 1;
    }
  >;
  [CHILDREN]: TEMPPropProperty;
  [CLASSES]: TEMPPropProperty;
  [COLOR]: TOverride<
    TEMPPropProperty,
    {
      value: "default" | "primary" | "secondary";
      default: "standard";
    }
  >;
  [COUNT]: TOverride<
    TEMPPropProperty,
    {
      value: number;
      default: 1;
    }
  >;
  [DEFAULT_PAGE]: TOverride<
    TEMPPropProperty,
    {
      value: number;
      default: 1;
    }
  >;
  [DISABLED]: TBooleanFalseProp;
  [GET_ITEM_ARIA_LABEL]: TFuncNull;
  [HIDE_NEXT_BUTTON]: TBooleanFalseProp;
  [HIDE_PREV_BUTTON]: TBooleanFalseProp;
  [ON_CHANGE]: TFuncNull;
  [PAGE]: TOverride<
    TEMPPropProperty,
    {
      value: number | null;
    }
  >;
  [RENDER_ITEM]: TOverride<
    TEMPPropProperty,
    {
      value: Function;
      // default: 	item => <PaginationItem {...item} />
      changeable: false;
    }
  >;
  [SHAPE]: TOverride<
    TEMPPropProperty,
    {
      value: "round" | "rounded";
      default: "round";
    }
  >;
  [SHOW_FIRST_BUTTON]: TBooleanFalseProp;
  [SHOW_LAST_BUTTON]: TBooleanFalseProp;
  [SIBLING_COUNT]: TOverride<
    TEMPPropProperty,
    {
      value: number;
      default: 1;
    }
  >;
  [SIZE]: TOverride<
    TEMPPropProperty,
    {
      value: "small" | "medium" | "large";
      default: "medium";
    }
  >;
  [VARIANT]: TOverride<
    TEMPPropProperty,
    {
      value: "text" | "outlined";
      default: "text";
    }
  >;
};
