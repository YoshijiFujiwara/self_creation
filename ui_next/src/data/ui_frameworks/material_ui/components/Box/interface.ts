import { TOverride } from "~/interfaces/helper";
import { TPropProperty } from "~/interfaces/material_components";

export enum EPropName {
  CHILDREN = "children",
  CLONE = "clone",
  COMPONENT = "component"
}

export type TBoxProps = {
  [EPropName.CHILDREN]: TPropProperty;
  [EPropName.CLONE]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [EPropName.COMPONENT]: TOverride<
    TPropProperty,
    {
      value: string | Function | object;
      default: "div";
    }
  >;
};
