import {
  TDontChange,
  TBooleanFalseProp,
  TEMPPropProperty
} from "~/interfaces/material_components";

export enum EProps {
  ACTION = "action",
  AVATAR = "avatar",
  CLASSES = "classes",
  COMPONENT = "component",
  DISABLE_TYPOGRAPHY = "disableTypography",
  SUB_HEADER = "subheader",
  SUBHEADER_TYPOGRAPHY_PROPS = "subheaderTypographyProps",
  TITLE = "title",
  TITLE_TYPOGRAPHY_PROPS = "titleTypographyProps"
}

const {
  ACTION,
  AVATAR,
  CLASSES,
  COMPONENT,
  DISABLE_TYPOGRAPHY,
  SUB_HEADER,
  SUBHEADER_TYPOGRAPHY_PROPS,
  TITLE,
  TITLE_TYPOGRAPHY_PROPS
} = EProps;

export type TCardHeaderProps = {
  [ACTION]: TDontChange;
  [AVATAR]: TDontChange;
  [CLASSES]: TDontChange;
  [COMPONENT]: TDontChange;
  [DISABLE_TYPOGRAPHY]: TBooleanFalseProp;
  [SUB_HEADER]: TEMPPropProperty;
  [SUBHEADER_TYPOGRAPHY_PROPS]: TEMPPropProperty;
  [TITLE]: TEMPPropProperty;
  [TITLE_TYPOGRAPHY_PROPS]: TEMPPropProperty;
};
