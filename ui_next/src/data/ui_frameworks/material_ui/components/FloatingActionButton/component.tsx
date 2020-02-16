import { Fab } from "@material-ui/core";
import { EComponentTitle, TComponent } from "~/interfaces/material_components";
import { mapToComponentProps } from "~/utils";
import props from "./props";

const component: TComponent = {
  title: EComponentTitle.CONTAINER,
  jsx: <Fab {...mapToComponentProps(props)} />,
  props
};

export default component;
