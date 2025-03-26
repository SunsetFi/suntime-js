import { staticJsInstanceOf } from "../StaticJsTypeSymbol.js";
import { StaticJsObject } from "./StaticJsObject.js";

export type StaticJsString = StaticJsObject<"string">;

export function isStaticJsString(value: unknown): value is StaticJsString {
  return staticJsInstanceOf(value) === "string";
}
