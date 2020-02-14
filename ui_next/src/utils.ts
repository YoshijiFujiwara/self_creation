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

export const mapToComponentProps = (props: TProp[]): TComponentProps => {
  return props.reduce(
    (accumulator: Record<string, any>, currentValue: TProp) => {
      if (currentValue.name === "children") return accumulator;
      accumulator[currentValue.name] = currentValue.default;
      return accumulator;
    },
    {}
  );
};
