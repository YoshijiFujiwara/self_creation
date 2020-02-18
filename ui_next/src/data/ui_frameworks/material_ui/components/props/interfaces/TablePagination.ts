import { TOverride } from "~/interfaces/helper";
import {
  TObjectNull,
  TEMPPropProperty,
  TNumberNullProp,
  TFuncNull
} from "~/interfaces/material_components";

export enum EProps {
  ACTION_COMPONENT = "ActionsComponent",
  BACK_ICON_BUTTON_PROPS = "backIconButtonProps",
  BACK_ICON_BUTTON_TEXT = "backIconButtonText",
  CLASSES = "classes",
  COMPONENT = "component",
  COUNT = "count",
  LABEL_DISPLAYED_ROWS = "labelDisplayedRows",
  LABEL_ROWS_PER_PAGE = "labelRowsPerPage",
  NEXT_ICON_BUTTON_PROPS = "nextIconButtonProps",
  NEXT_ICON_BUTTON_TEXT = "nextIconButtonText",
  ON_CHANGE_PAGE = "onChangePage",
  ON_CHANGE_ROWS_PER_PAGE = "onChangeRowsPerPage",
  PAGE = "page",
  ROWS_PER_PAGE = "rowsPerPage",
  ROWS_PER_PAGE_OPTIONS = "rowsPerPageOptions",
  SELECT_PROPS = "SelectProps"
}

const {
  ACTION_COMPONENT,
  BACK_ICON_BUTTON_PROPS,
  BACK_ICON_BUTTON_TEXT,
  CLASSES,
  COMPONENT,
  COUNT,
  LABEL_DISPLAYED_ROWS,
  LABEL_ROWS_PER_PAGE,
  NEXT_ICON_BUTTON_PROPS,
  NEXT_ICON_BUTTON_TEXT,
  ON_CHANGE_PAGE,
  ON_CHANGE_ROWS_PER_PAGE,
  PAGE,
  ROWS_PER_PAGE,
  ROWS_PER_PAGE_OPTIONS,
  SELECT_PROPS
} = EProps;

export type TTablePaginationProps = {
  [ACTION_COMPONENT]: TEMPPropProperty;
  [BACK_ICON_BUTTON_PROPS]: TObjectNull;
  [BACK_ICON_BUTTON_TEXT]: TOverride<
    TEMPPropProperty,
    {
      value: string;
      default: "Previous page";
    }
  >;
  [CLASSES]: TObjectNull;
  [COMPONENT]: TEMPPropProperty;
  [COUNT]: TNumberNullProp;
  [LABEL_DISPLAYED_ROWS]: TOverride<
    TEMPPropProperty,
    {
      value: Function;
      default: Function;
    }
  >;
  [LABEL_ROWS_PER_PAGE]: TOverride<
    TEMPPropProperty,
    {
      value: Node;
      default: "Rows per page:";
    }
  >;
  [NEXT_ICON_BUTTON_PROPS]: TObjectNull;
  [NEXT_ICON_BUTTON_TEXT]: TOverride<
    TEMPPropProperty,
    {
      value: string;
      default: "Next page";
    }
  >;
  [ON_CHANGE_PAGE]: TFuncNull;
  [ON_CHANGE_ROWS_PER_PAGE]: TFuncNull;
  [PAGE]: TNumberNullProp;
  [ROWS_PER_PAGE]: TNumberNullProp;
  [ROWS_PER_PAGE_OPTIONS]: TOverride<
    TEMPPropProperty,
    {
      value: Array<number>;
      default: [10, 25, 50, 100];
    }
  >;
  [SELECT_PROPS]: TOverride<
    TEMPPropProperty,
    {
      value: object;
      default: {};
    }
  >;
};
