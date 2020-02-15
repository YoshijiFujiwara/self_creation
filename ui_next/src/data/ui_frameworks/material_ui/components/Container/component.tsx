import { Container } from "@material-ui/core";
import { EComponentTitle, TComponent } from "~/interfaces/material_components";
import { mapToComponentProps } from "~/utils";
import props from "./props";

const component: TComponent = {
  title: EComponentTitle.CONTAINER,
  jsx: <Container {...mapToComponentProps(props)} />,
  props
};

export default component;
