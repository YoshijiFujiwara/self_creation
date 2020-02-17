import { TOverride } from "~/interfaces/helper";
import {
  TDontChange,
  TEMPPropProperty,
  TBooleanFalseProp
} from "~/interfaces/material_components";

export enum EProps {
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
} = EProps;

export type THiddenProps = {
  [CHILDREN]: TDontChange;
  [IMPLEMENTATION]: TOverride<
    TEMPPropProperty,
    {
      value: "js" | "css";
      default: "js";
    }
  >;
  [INITIAL_WIDTH]: TOverride<
    TEMPPropProperty,
    {
      value: "xs" | "sm" | "md" | "lg" | "xl" | null;
    }
  >;
  [LG_DOWN]: TBooleanFalseProp;
  [LG_UP]: TBooleanFalseProp;
  [MD_DOWN]: TBooleanFalseProp;
  [MD_UP]: TBooleanFalseProp;
  [ONLY]: TOverride<
    TEMPPropProperty,
    {
      value:
        | "xs"
        | "sm"
        | "md"
        | "lg"
        | "xl"
        | Array<"xs" | "sm" | "md" | "lg" | "xl">
        | null;
    }
  >;
  [SM_DOWN]: TBooleanFalseProp;
  [SM_UP]: TBooleanFalseProp;
  [XL_DOWN]: TBooleanFalseProp;
  [XL_UP]: TBooleanFalseProp;
  [XS_DOWN]: TBooleanFalseProp;
  [XS_UP]: TBooleanFalseProp;
};
