import { TOverride } from "~/interfaces/helper";
import {
  TEMPPropProperty,
  TDontChange
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  ROOT_REF = "rootRef"
}

const { CHILDREN, ROOT_REF } = EProps;

export type TRatingProps = {
  [CHILDREN]: TOverride<
    TEMPPropProperty,
    {
      value: Element;
    }
  >;
  [ROOT_REF]: TDontChange; // 公式の'refType.isRequired'が不明
};
