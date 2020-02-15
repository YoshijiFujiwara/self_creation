// コンポーネントにPropを割り当てるとき
import { TButtonProps } from "~/data/ui_frameworks/material_ui/components/Button/interface";

export type TComponentProps = {
  [key: string]: any;
};

export type PropProperty = {
  value: any;
  default: null;
  description: string;
};

export type TComponent = {
  title: EComponentTitle;
  props: TButtonProps; // ユニオンタイプで解決すっか
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
