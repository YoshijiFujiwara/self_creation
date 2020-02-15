import { EPropName } from "~/data/ui_frameworks/material_ui/components/Button/interface";

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

// こういう関数の返り値こそ、推論の方が楽そうだ🧐
export const mapToComponentProps = (props: { [key: string]: any }) => {
  // TODO: タイプアサーションはあんまり良くないらしい
  return (Object.keys(props) as string[]).reduce(
    (accumulator: Record<string, any>, propName: string) => {
      if (propName === EPropName.CLASSES || propName === EPropName.COMPONENT)
        return accumulator;
      accumulator[propName] = props[propName].value;
      return accumulator;
    },
    {}
  );
};
