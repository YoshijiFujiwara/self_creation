import dataDisplayComponentGroup from "~/data/ui_frameworks/material_ui/component_groups/Data_Display";
import feedbackComponentGroup from "~/data/ui_frameworks/material_ui/component_groups/Feedback";
import inputComponentGroup from "~/data/ui_frameworks/material_ui/component_groups/Inputs";
import layoutComponentGroup from "~/data/ui_frameworks/material_ui/component_groups/Layouts";
import navigationComponentGroup from "~/data/ui_frameworks/material_ui/component_groups/Navigation";
import surfacesComponentGroup from "~/data/ui_frameworks/material_ui/component_groups/Surfaces";
import { TComponentGroup } from "~/interfaces/material_components";

const componentGroups: TComponentGroup[] = [
  layoutComponentGroup,
  inputComponentGroup,
  navigationComponentGroup,
  surfacesComponentGroup,
  feedbackComponentGroup,
  dataDisplayComponentGroup
];

export default componentGroups;
