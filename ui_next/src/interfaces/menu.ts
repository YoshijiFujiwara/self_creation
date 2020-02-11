export type TProp = {
  name: string;
  default: string | number | boolean | null;
};

export type TComponent = {
  title:
    | "Box"
    | "Container"
    | "Grid"
    | "Button"
    | "Checkbox"
    | "Date / Time"
    | "Radio"
    | "Select"
    | "Slider"
    | "Switch"
    | "Text Field"
    | "Transfer List"
    | "Bottom Navigation"
    | "Breadcrumbs"
    | "Drawer"
    | "Link"
    | "Menu"
    | "Stepper"
    | "Tabs"
    | "App Bar"
    | "Paper"
    | "Card"
    | "Expansion Panel"
    | "Progress"
    | "Dialog"
    | "Snackbar"
    | "Backdrop"
    | "Avatar"
    | "Badge"
    | "Chip"
    | "Divider"
    | "Icons"
    | "Material Icons"
    | "List"
    | "Table"
    | "Tooltip"
    | "Typography";
  props: TProp[];
  jsx?: JSX.Element; // TODO: 検証中のため?
};

export type TComponentGroup = {
  iconType: string;
  title:
    | "Layout"
    | "Inputs"
    | "Navigation"
    | "Surfaces"
    | "Feedback"
    | "Data Display";
  components: TComponent[];
};
