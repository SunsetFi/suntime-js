import { StaticJsObject } from "./StaticJsObject.js";
import { isStaticJsValue, StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsArray extends StaticJsObject {
  readonly length: number;
  get(index: number): StaticJsValue;
  set(index: number, value: StaticJsValue): void;
  slice(start?: number, end?: number): StaticJsArray;
  sliceNative(start?: number, end?: number): StaticJsValue[];
}

export function isStaticJsArray(value: unknown): value is StaticJsArray {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeOf === "array";
}
