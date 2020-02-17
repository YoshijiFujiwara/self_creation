import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TBooleanFalseProp,
  TDontChange,
  TFuncNull,
  TStringNull
} from "~/interfaces/material_components";

export enum EProps {
  AUTO_COMPLETE = "autoComplete",
  AUTO_HIGHLIGHT = "autoHighlight",
  AUTO_SELECT = "autoSelect",
  BLUR_ON_SELECT = "blurOnSelect",
  CHIP_PROPS = "ChipProps",
  CLASSES = "classes",
  CLEAR_ON_ESCAPE = "clearOnEscape",
  CLEAR_TEXT = "clearText",
  CLOSE_ICON = "closeIcon",
  DEBUG = "debug",
  DEFAULT_VALUE = "defaultValue",
  DISABLE_CLEARABLE = "disableClearable",
  DISABLE_CLOSE_ON_SELECT = "disableCloseOnSelect",
  DISABLED = "disabled",
  DISABLE_LIST_WRAP = "disableListWrap",
  DISABLE_OPEN_ON_FOCUS = "disableOpenOnFocus",
  DISABLE_PORTAL = "disablePortal",
  FILTER_OPTIONS = "filterOptions",
  FILTER_SELECT_OPTIONS = "filterSelectedOptions",
  FORCE_POPUP_ICON = "forcePopupIcon",
  FREE_SOLO = "freeSolo",
  GET_OPTION_DISABLED = "getOptionDisabled",
  GET_OPTION_LABEL = "getOptionLabel",
  GET_OPTION_SELECTED = "getOptionSelected",
  GROUP_BY = "groupBy",
  ID = "id",
  INCLUDE_INPUT_IN_LIST = "includeInputInList",
  INPUT_VALUE = "inputValue",
  LISTBOX_COMPONENT = "ListboxComponent",
  LISTBOX_PROPS = "ListboxProps",
  LOADING = "loading",
  LOADING_TEXT = "loadingText",
  MULTIPLE = "multiple",
  NO_OPTIONS_TEXT = "noOptionsText",
  ON_CHANGE = "onChange",
  ON_CLOSE = "onClose",
  ON_INPUT_CHANGE = "onInputChange",
  ON_OPEN = "onOpen",
  OPEN = "open",
  OPEN_TEXT = "openText",
  OPTIONS = "options",
  PAPER_COMPONENT = "PaperComponent",
  POPPER_COMPONENT = "PopperComponent	",
  POPUP_ICON = "popupIcon",
  RENDER_GROUP = "renderGroup",
  RENDER_INPUT = "renderInput",
  RENDER_OPTION = "renderOption",
  RENDER_TAGS = "renderTags",
  SELECT_ON_FOCUS = "selectOnFocus",
  SIZE = "size",
  VALUE = "value"
}

const {
  AUTO_COMPLETE,
  AUTO_HIGHLIGHT,
  AUTO_SELECT,
  BLUR_ON_SELECT,
  CHIP_PROPS,
  CLASSES,
  CLEAR_ON_ESCAPE,
  CLEAR_TEXT,
  CLOSE_ICON,
  DEBUG,
  DEFAULT_VALUE,
  DISABLE_CLEARABLE,
  DISABLE_CLOSE_ON_SELECT,
  DISABLED,
  DISABLE_LIST_WRAP,
  DISABLE_OPEN_ON_FOCUS,
  DISABLE_PORTAL,
  FILTER_OPTIONS,
  FILTER_SELECT_OPTIONS,
  FORCE_POPUP_ICON,
  FREE_SOLO,
  GET_OPTION_DISABLED,
  GET_OPTION_LABEL,
  GET_OPTION_SELECTED,
  GROUP_BY,
  ID,
  INCLUDE_INPUT_IN_LIST,
  INPUT_VALUE,
  LISTBOX_COMPONENT,
  LISTBOX_PROPS,
  LOADING,
  LOADING_TEXT,
  MULTIPLE,
  NO_OPTIONS_TEXT,
  ON_CHANGE,
  ON_CLOSE,
  ON_INPUT_CHANGE,
  ON_OPEN,
  OPEN,
  OPEN_TEXT,
  OPTIONS,
  PAPER_COMPONENT,
  POPPER_COMPONENT,
  POPUP_ICON,
  RENDER_GROUP,
  RENDER_INPUT,
  RENDER_OPTION,
  RENDER_TAGS,
  SELECT_ON_FOCUS,
  SIZE,
  VALUE
} = EProps;

export type TAutocompleteProps = {
  [AUTO_COMPLETE]: TBooleanFalseProp;
  [AUTO_HIGHLIGHT]: TBooleanFalseProp;
  [AUTO_SELECT]: TBooleanFalseProp;
  [BLUR_ON_SELECT]: TOverride<
    TEMPPropProperty,
    {
      value: "mouse" | "touch" | boolean;
      default: false;
    }
  >;
  [CHIP_PROPS]: TDontChange;
  [CLASSES]: TDontChange;
  [CLEAR_ON_ESCAPE]: TBooleanFalseProp;
  [CLEAR_TEXT]: TOverride<
    TEMPPropProperty,
    {
      value: string;
      default: "Clear";
    }
  >;
  [CLOSE_ICON]: TDontChange;
  [DEBUG]: TBooleanFalseProp;
  [DEFAULT_VALUE]: TOverride<
    TEMPPropProperty,
    {
      value: any | Array<any>;
      default: null; // 公式が読み解けない
      changeable: false;
    }
  >;
  [DISABLE_CLEARABLE]: TOverride<
    TEMPPropProperty,
    {
      value: any | Array<any>;
      default: null; // 公式が読み解けない
      changeable: false;
    }
  >;
  [DISABLE_CLOSE_ON_SELECT]: TBooleanFalseProp;
  [DISABLED]: TBooleanFalseProp;
  [DISABLE_LIST_WRAP]: TBooleanFalseProp;
  [DISABLE_OPEN_ON_FOCUS]: TBooleanFalseProp;
  [DISABLE_PORTAL]: TBooleanFalseProp;
  [FILTER_OPTIONS]: TFuncNull;
  [FILTER_SELECT_OPTIONS]: TBooleanFalseProp;
  [FORCE_POPUP_ICON]: TOverride<
    TEMPPropProperty,
    {
      value: "auto" | boolean;
      default: false;
    }
  >;
  [FREE_SOLO]: TBooleanFalseProp;
  [GET_OPTION_DISABLED]: TFuncNull;
  [GET_OPTION_LABEL]: TOverride<
    TEMPPropProperty,
    {
      value: Function;
      // default: x => x;
      changeable: false;
    }
  >;
  [GET_OPTION_SELECTED]: TFuncNull;
  [GROUP_BY]: TFuncNull;
  [ID]: TStringNull;
  [INCLUDE_INPUT_IN_LIST]: TBooleanFalseProp;
  [INPUT_VALUE]: TStringNull;
  [LISTBOX_COMPONENT]: TDontChange;
  [LISTBOX_PROPS]: TDontChange;
  [LOADING]: TBooleanFalseProp;
  [LOADING_TEXT]: TDontChange;
  [MULTIPLE]: TBooleanFalseProp;
  [NO_OPTIONS_TEXT]: TDontChange;
  [ON_CHANGE]: TFuncNull;
  [ON_CLOSE]: TFuncNull;
  [ON_INPUT_CHANGE]: TFuncNull;
  [ON_OPEN]: TFuncNull;
  [OPEN]: TBooleanFalseProp;
  [OPEN_TEXT]: TOverride<
    TEMPPropProperty,
    {
      value: string;
      default: "Open";
    }
  >;
  [OPTIONS]: TDontChange;
  [PAPER_COMPONENT]: TDontChange;
  [POPPER_COMPONENT]: TDontChange;
  [POPUP_ICON]: TDontChange;
  [RENDER_GROUP]: TFuncNull;
  [RENDER_INPUT]: TFuncNull;
  [RENDER_OPTION]: TFuncNull;
  [RENDER_TAGS]: TFuncNull;
  [SELECT_ON_FOCUS]: TDontChange;
  [SIZE]: TOverride<
    TEMPPropProperty,
    {
      value: "medium" | "small";
      default: "medium";
    }
  >;
  [VALUE]: TEMPPropProperty;
};
