import { TGridListProps } from "~/data/ui_frameworks/material_ui/components/GridList/interface";

const props: TGridListProps = {
  cellHeight: {
    value: 180,
    default: 180,
    description: ""
  },
  children: {
    value: null,
    default: null,
    description: ""
  },
  classes: {
    value: null,
    default: null,
    description: ""
  },
  cols: {
    value: 2,
    default: 2,
    description: ""
  },
  component: {
    value: "ul",
    default: "ul",
    description: ""
  },
  spacing: {
    value: 4,
    default: 4,
    description: ""
  }
};

export default props;
