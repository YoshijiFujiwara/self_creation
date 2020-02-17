// コンポーネントにPropを割り当てるとき
import {
  TBoxProps,
  EPropName as EBoxPropName
} from "~/data/ui_frameworks/material_ui/components/Box/interface";
import {
  TButtonProps,
  EPropName as EButtonPropName
} from "~/data/ui_frameworks/material_ui/components/Button/interface";
import { TOverride } from "./helper";

export type TComponentProps = {
  [key in TAllPropName]: any;
};

export type TAllProps = TButtonProps | TBoxProps;
export type TAllPropName = EBoxPropName | EButtonPropName;

export type TPropProperty = {
  value: any;
  default: null;
  description: string;
};

export type TEMPPropProperty = {
  value: any;
  default: null;
  description: string;
  changeable: boolean;
};

export type TBooleanFalseProp = TOverride<
  TEMPPropProperty,
  {
    value: boolean;
    default: false;
  }
>;
export type TBooleanNullProp = TOverride<
  TEMPPropProperty,
  {
    value: boolean | null;
  }
>;
export type TDontChange = TOverride<
  TEMPPropProperty,
  {
    changeable: false;
  }
>;
export type TStringNull = TOverride<
  TEMPPropProperty,
  {
    value: string | null;
  }
>;
export type TFuncNull = TOverride<
  TEMPPropProperty,
  {
    value: Function | null;
  }
>;

export type TComponent = {
  title: EComponentTitle;
  props: TAllProps | any; // TODO: マテリアルコンポーネントの整備が終われば、|any を外す
  jsx?: JSX.Element; // TODO: 検証中のため '?'
};

export type TComponentGroup = {
  iconType: string;
  title: EComponentGroupTitle;
  components: TComponent[];
};

export enum EComponentGroupTitle {
  LAYOUT = "Layout",
  INPUTS = "Inputs",
  NAVIGATION = "Navigation",
  SURFACES = "Surfaces",
  FEEDBACK = "Feedback",
  DATA_DISPLAY = "Data Display"
}

export enum EComponentTitle {
  BOX = "Box",
  CONTAINER = "Container",
  GRID = "Grid",
  BUTTON = "Button",
  CHECKBOX = "Checkbox",
  DATE_TIME = "Date / Time",
  RADIO = "Radio",
  SELECT = "Select",
  SLIDER = "Slider",
  SWITCH = "Switch",
  TEXT_FIELD = "Text Field",
  TRANSFER_LIST = "Transfer List",
  BOTTOM_NAVIGATION = "Bottom Navigation",
  BREADCRUMBS = "Breadcrumbs",
  DRAWER = "Drawer",
  LINK = "Link",
  MENU = "Menu",
  STEPPER = "Stepper",
  TABS = "Tabs",
  APP_BAR = "App Bar",
  PAPER = "Paper",
  CARD = "Card",
  EXPANSION_PANEL = "Expansion Panel",
  PROGRESS = "Progress",
  DIALOG = "Dialog",
  SNACKBAR = "Snackbar",
  BACKDROP = "Backdrop",
  AVATAR = "Avatar",
  BADGE = "Badge",
  CHIP = "Chip",
  DIVIDER = "Divider",
  ICONS = "Icons",
  MATERIAL_ICONS = "Material Icons",
  LIST = "List",
  TABLE = "Table",
  TOOLTIP = "Tooltip",
  TYPOGRAPHY = "Typography"
}
