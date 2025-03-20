import { StaticJsObject } from "./StaticJsObject.js";
import { StaticJsValue } from "./StaticJsValue.js";
export interface StaticJsArray extends StaticJsObject<"array"> {
  readonly length: number;
  get(index: number): StaticJsValue;
  set(index: number, value: StaticJsValue): void;
  sliceNative(start?: number, end?: number): StaticJsValue[];
}
export declare function isStaticJsArray(value: any): value is StaticJsArray;
