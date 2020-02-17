import {
  TDontChange,
  TBooleanFalseProp
} from "~/interfaces/material_components";

export enum EProps {
  CHILDREN = "children",
  CLASSES = "classes",
  DISABLE_TYPOGRAPHY = "disableTypography",
  INSET = "inset",
  PRIMARY = "primary",
  PRIMARY_TYPOGRAPHY_PROPS = "primaryTypographyProps",
  SECONDARY = "secondary",
  SECONDARY_TYPOGRAPHY_PROPS = "secondaryTypographyProps"
}

const {
  CHILDREN,
  CLASSES,
  DISABLE_TYPOGRAPHY,
  INSET,
  PRIMARY,
  PRIMARY_TYPOGRAPHY_PROPS,
  SECONDARY,
  SECONDARY_TYPOGRAPHY_PROPS
} = EProps;

export type TListItemTextProps = {
  [CHILDREN]: TDontChange;
  [CLASSES]: TDontChange;
  [DISABLE_TYPOGRAPHY]: TBooleanFalseProp;
  [INSET]: TBooleanFalseProp;
  [PRIMARY]: TDontChange;
  [PRIMARY_TYPOGRAPHY_PROPS]: TDontChange;
  [SECONDARY]: TDontChange;
  [SECONDARY_TYPOGRAPHY_PROPS]: TDontChange;
};
