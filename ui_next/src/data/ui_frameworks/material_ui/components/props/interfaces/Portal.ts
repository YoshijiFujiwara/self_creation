import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TDontChange,
  TBooleanFalseProp,
  TFuncNull
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CONTAINER = "container",
  DISABLE_PORTAL = "disablePortal",
  ON_RENDERED = "onRendered"
}

const { CHILDREN, CONTAINER, DISABLE_PORTAL, ON_RENDERED } = EProps;

export type TPortalProps = {
  [CHILDREN]: TDontChange;
  [CONTAINER]: TOverride<
    TEMPPropProperty,
    {
      value: Function | React.Component | Element | null;
    }
  >;
  [DISABLE_PORTAL]: TBooleanFalseProp;
  [ON_RENDERED]: TFuncNull;
};
