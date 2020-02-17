import {
  TEMPPropProperty,
  TDontChange,
  TBooleanFalseProp
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  DEFER = "defer",
  FALLBACK = "fallback"
}

const { CHILDREN, DEFER, FALLBACK } = EProps;

export type TNoSsrProps = {
  [CHILDREN]: TDontChange;
  [DEFER]: TBooleanFalseProp;
  [FALLBACK]: TEMPPropProperty;
};
