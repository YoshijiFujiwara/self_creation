import { TOverride } from "~/interfaces/helper";
import { TPropProperty } from "~/interfaces/material_components";

export enum EPropName {
  CHILDREN = "children",
  IMPLEMENTATION = "implementation",
  INITIAL_WIDTH = "initialWidth",
  LG_DOWN = "lgDown",
  LG_UP = "lgUp",
  MD_DOWN = "mdDown",
  MD_UP = "mdUp",
  ONLY = "only",
  SM_DOWN = "smDown",
  SM_UP = "smUp",
  XL_DOWN = "xlDown",
  XL_UP = "xlUp",
  XS_DOWN = "xsDown",
  XS_UP = "xsUp"
}

const {
  CHILDREN,
  IMPLEMENTATION,
  INITIAL_WIDTH,
  LG_DOWN,
  LG_UP,
  MD_DOWN,
  MD_UP,
  ONLY,
  SM_DOWN,
  SM_UP,
  XL_DOWN,
  XL_UP,
  XS_DOWN,
  XS_UP
} = EPropName;

export type THiddenProps = {
  [CHILDREN]: TPropProperty;
  [IMPLEMENTATION]: TOverride<
    TPropProperty,
    {
      value: "js" | "css";
      default: "js";
    }
  >;
  [INITIAL_WIDTH]: TOverride<
    TPropProperty,
    {
      value: "xs" | "sm" | "md" | "lg" | "xl";
    }
  >;
  [LG_DOWN]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [LG_UP]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [MD_DOWN]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [MD_UP]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [ONLY]: TOverride<
    TPropProperty,
    {
      value:
        | "xs"
        | "sm"
        | "md"
        | "lg"
        | "xl"
        | Array<"xs" | "sm" | "md" | "lg" | "xl">;
    }
  >;
  [SM_DOWN]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [SM_UP]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [XL_DOWN]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [XL_UP]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [XS_DOWN]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
  [XS_UP]: TOverride<
    TPropProperty,
    {
      value: boolean;
      default: false;
    }
  >;
};
