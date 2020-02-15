import { TOverride } from "~/interfaces/helper";
import { TPropProperty } from "~/interfaces/material_components";

export enum EPropName {
  CHILDREN = "children",
  CLONE = "clone",
  COMPONENT = "component"
}

const { CHILDREN, CLONE, COMPONENT } = EPropName;

export type TBoxProps = {
  [CHILDREN]: TPropProperty;
  [CLONE]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [COMPONENT]: TOverride<
    TPropProperty,
    {
      value: string | Function | object;
      default: "div";
    }
  >;
};
