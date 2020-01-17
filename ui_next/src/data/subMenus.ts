import { TSubMenu } from "~/interfaces/menu";

const subMenus: TSubMenu[] = [
  {
    iconType: "user",
    title: "Layout",
    menuItems: [{ title: "Box" }, { title: "Container" }, { title: "Grid" }]
  },
  {
    iconType: "user",
    title: "Inputs",
    menuItems: [
      { title: "Button" },
      { title: "Checkbox" },
      { title: "Date / Time" },
      { title: "Radio" },
      { title: "Select" },
      { title: "Slider" },
      { title: "Switch" },
      { title: "Text Field" },
      { title: "Transfer List" }
    ]
  },
  {
    iconType: "user",
    title: "Navigation",
    menuItems: [
      { title: "Bottom Navigation" },
      { title: "Breadcrumbs" },
      { title: "Drawer" },
      { title: "Link" },
      { title: "Menu" },
      { title: "Stepper" },
      { title: "Tabs" }
    ]
  },
  {
    iconType: "user",
    title: "Surfaces",
    menuItems: [
      { title: "App Bar" },
      { title: "Paper" },
      { title: "Card" },
      { title: "Expansion Panel" }
    ]
  },
  {
    iconType: "user",
    title: "Feedback",
    menuItems: [
      { title: "Progress" },
      { title: "Dialog" },
      { title: "Snackbar" },
      { title: "Backdrop" }
    ]
  },
  {
    iconType: "user",
    title: "Data Display",
    menuItems: [
      { title: "Avatar" },
      { title: "Badge" },
      { title: "Chip" },
      { title: "Divider" },
      { title: "Icons" },
      { title: "Material Icons" },
      { title: "List" },
      { title: "Table" },
      { title: "Tooltip" },
      { title: "Typography" }
    ]
  }
];

export default subMenus;
