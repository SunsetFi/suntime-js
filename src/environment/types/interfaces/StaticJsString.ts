import { staticJsInstanceOf } from "../StaticJsTypeSymbol.js";
import { StaticJsObject } from "./StaticJsObject.js";

export interface StaticJsString extends StaticJsObject<"string"> {}
export function isStaticJsString(value: any): value is StaticJsString {
  return staticJsInstanceOf(value) === "string";
}
