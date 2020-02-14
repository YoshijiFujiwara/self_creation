import { component as buttonComponent } from "~/data/ui_frameworks/material_ui/components/Button";
import { TComponentGroup } from "~/interfaces/material_components";

const componentGroup: TComponentGroup = {
  iconType: "user",
  title: "Inputs",
  components: [
    buttonComponent,
    { title: "Checkbox", props: [] },
    { title: "Date / Time", props: [] },
    { title: "Radio", props: [] },
    { title: "Select", props: [] },
    { title: "Slider", props: [] },
    { title: "Switch", props: [] },
    { title: "Text Field", props: [] },
    { title: "Transfer List", props: [] }
  ]
};

export default componentGroup;
