import { Button } from "@material-ui/core";
import { EComponentTitle, TComponent } from "~/interfaces/material_components";
import { mapToComponentProps } from "~/utils";
import props from "./props";

const component: TComponent = {
  title: EComponentTitle.BUTTON,
  jsx: <Button {...mapToComponentProps(props)}>ボタン</Button>,
  props
};

export default component;
