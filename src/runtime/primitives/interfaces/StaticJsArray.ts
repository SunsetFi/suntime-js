import { staticJsInstanceOf } from "../StaticJsTypeSymbol.js";
import { StaticJsObject } from "./StaticJsObject.js";
import { StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsArray extends StaticJsObject<"array"> {
  readonly length: number;
  get(index: number): StaticJsValue;
  set(index: number, value: StaticJsValue): void;
  slice(start?: number, end?: number): StaticJsArray;
  sliceNative(start?: number, end?: number): StaticJsValue[];
}

export function isStaticJsArray(value: unknown): value is StaticJsArray {
  return staticJsInstanceOf(value) === "array";
}
