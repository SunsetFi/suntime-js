import { StaticJsBoolean } from "./StaticJsBoolean.js";
import { StaticJsNull } from "./StaticJsNull.js";
import { StaticJsNumber } from "./StaticJsNumber.js";
import { StaticJsString } from "./StaticJsString.js";
import { StaticJsUndefined } from "./StaticJsUndefined.js";
import { isStaticJsValue, StaticJsValue } from "./StaticJsValue.js";

export type StaticJsScalar =
  | StaticJsString
  | StaticJsNumber
  | StaticJsBoolean
  | StaticJsNull
  | StaticJsUndefined;

export function isStaticJsScalar(
  value: StaticJsValue,
): value is StaticJsScalar {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return [
    "string",
    "number",
    "string",
    "boolean",
    "null",
    "undefined",
  ].includes(value.runtimeTypeOf);
}
