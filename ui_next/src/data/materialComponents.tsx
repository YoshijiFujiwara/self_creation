import Button from "@material-ui/core/Button";
import { TComponentGroup, TProp } from "~/interfaces/menu";

const buttonProps: TProp[] = [
  {
    name: "children",
    default: null
  },
  {
    name: "classes",
    default: null
  },
  {
    name: "color",
    default: "default"
  },
  {
    name: "component",
    default: "button"
  },
  {
    name: "disabled",
    default: false
  },
  {
    name: "disableElevation",
    default: false
  },
  {
    name: "disableFocusRipple",
    default: false
  },
  {
    name: "disableRipple",
    default: null
  },
  {
    name: "endIcon",
    default: null
  },
  {
    name: "fullWidth",
    default: false
  },
  {
    name: "href",
    default: null
  },
  {
    name: "size",
    default: "medium"
  },
  {
    name: "startIcon",
    default: null
  },
  {
    name: "variant",
    default: "contained"
  }
];

const componentGroups: TComponentGroup[] = [
  {
    iconType: "user",
    title: "Layout",
    components: [
      { title: "Box", props: [] },
      { title: "Container", props: [] },
      { title: "Grid", props: [] }
    ]
  },
  {
    iconType: "user",
    title: "Inputs",
    components: [
      {
        title: "Button",
        jsx: (
          <Button
            {...buttonProps.reduce(
              (accumulator: Record<string, any>, currentValue: TProp) => {
                accumulator[currentValue.name] = currentValue.default;
                return accumulator;
              },
              {}
            )}
          >
            ボタン
          </Button>
        ),
        props: buttonProps
      },
      { title: "Checkbox", props: [] },
      { title: "Date / Time", props: [] },
      { title: "Radio", props: [] },
      { title: "Select", props: [] },
      { title: "Slider", props: [] },
      { title: "Switch", props: [] },
      { title: "Text Field", props: [] },
      { title: "Transfer List", props: [] }
    ]
  },
  {
    iconType: "user",
    title: "Navigation",
    components: [
      { title: "Bottom Navigation", props: [] },
      { title: "Breadcrumbs", props: [] },
      { title: "Drawer", props: [] },
      { title: "Link", props: [] },
      { title: "Menu", props: [] },
      { title: "Stepper", props: [] },
      { title: "Tabs", props: [] }
    ]
  },
  {
    iconType: "user",
    title: "Surfaces",
    components: [
      { title: "App Bar", props: [] },
      {
        title: "Paper",
        props: [
          {
            name: "children",
            default: null
          },
          {
            name: "classes",
            default: null
          },
          {
            name: "component",
            default: "div"
          },
          {
            name: "elevation",
            default: 1
          },
          {
            name: "square",
            default: false
          },
          {
            name: "variant",
            default: "elevation"
          }
        ]
      },
      { title: "Card", props: [] },
      { title: "Expansion Panel", props: [] }
    ]
  },
  {
    iconType: "user",
    title: "Feedback",
    components: [
      { title: "Progress", props: [] },
      { title: "Dialog", props: [] },
      { title: "Snackbar", props: [] },
      { title: "Backdrop", props: [] }
    ]
  },
  {
    iconType: "user",
    title: "Data Display",
    components: [
      { title: "Avatar", props: [] },
      { title: "Badge", props: [] },
      { title: "Chip", props: [] },
      { title: "Divider", props: [] },
      { title: "Icons", props: [] },
      { title: "Material Icons", props: [] },
      { title: "List", props: [] },
      { title: "Table", props: [] },
      { title: "Tooltip", props: [] },
      { title: "Typography", props: [] }
    ]
  }
];

export default componentGroups;
