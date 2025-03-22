import { staticJsInstanceOf } from "../StaticJsTypeSymbol.js";
import { StaticJsObject } from "./StaticJsObject.js";
import { StaticJsValue } from "./StaticJsValue.js";

export const StaticJsEmptyArrayItem: unique symbol = Symbol(
  "static-js::EmptyArrayItem",
);
export type StaticJsEmptyArrayItem = typeof StaticJsEmptyArrayItem;

export type StaticJsArrayItem = StaticJsValue | StaticJsEmptyArrayItem;

export interface StaticJsArray extends StaticJsObject<"array"> {
  readonly length: number;
  get(index: number): StaticJsValue;
  set(index: number, value: StaticJsValue): void;
  sliceNative(start?: number, end?: number): StaticJsArrayItem[];
}

export function isStaticJsArray(value: any): value is StaticJsArray {
  return staticJsInstanceOf(value) === "array";
}
