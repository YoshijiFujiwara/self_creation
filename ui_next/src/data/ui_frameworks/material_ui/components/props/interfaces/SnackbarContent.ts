import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TObjectNull,
  TNodeNull
} from "~/interfaces/material_components";

export enum EProps {
  ACTION = "action",
  CLASSES = "classes",
  MESSAGE = "message",
  ROLE = "role"
}

const { ACTION, CLASSES, MESSAGE, ROLE } = EProps;

export type TSnackbarContentProps = {
  [ACTION]: TNodeNull;
  [CLASSES]: TObjectNull;
  [MESSAGE]: TNodeNull;
  [ROLE]: TOverride<
    TEMPPropProperty,
    {
      value: string;
      default: "alert";
    }
  >;
};
