import {
  TButtonProps,
  EPropName
} from "~/data/ui_frameworks/material_ui/components/Button/interface";
import { TComponentProps, TProp } from "~/interfaces/material_components";

export const makeRandomId = (length: number): string => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const mapToComponentProps = (props: TButtonProps): TComponentProps => {
  // TODO: タイプアサーションはあんまり良くないらしい
  return (Object.keys(props) as EPropName[]).reduce(
    (accumulator: Record<string, any>, propName: EPropName) => {
      if (propName === EPropName.CLASSES || propName === EPropName.COMPONENT)
        return accumulator;
      accumulator[propName] = props[propName].value;
      return accumulator;
    },
    {}
  );
};

// export const mapToComponentProps = (props: TProp[]): TComponentProps => {
//   return props.reduce(
//     (accumulator: Record<string, any>, currentValue: TProp) => {
//       if (currentValue.name === "children") return accumulator;
//       accumulator[currentValue.name] = currentValue.default;
//       return accumulator;
//     },
//     {}
//   );
// };
