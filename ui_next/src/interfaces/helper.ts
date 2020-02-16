// [FIY] https://stackoverflow.com/questions/43080547/how-to-override-type-properties-in-typescript
// [ex] type HexColorLine = TOverride<Line, { color: number }>
export type TOverride<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
