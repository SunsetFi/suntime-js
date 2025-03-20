import { StaticJsScalar } from "./StaticJsScalar.js";
import { StaticJsObject } from "./StaticJsObject.js";
export type StaticJsValue = StaticJsScalar | StaticJsObject<string>;
export declare function isStaticJsValue(
  value: any,
): asserts value is StaticJsValue;
