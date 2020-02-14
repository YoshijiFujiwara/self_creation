import { Button } from "@material-ui/core";
import { TComponent } from "~/interfaces/material_components";
import { mapToComponentProps } from "~/utils";
import props from "./props";

const component: TComponent = {
  title: "Button",
  jsx: <Button {...mapToComponentProps(props)}>ボタン</Button>,
  props
};

export default component;
