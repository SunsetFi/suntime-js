import type { StaticJsBoolean } from "./StaticJsBoolean.js";
import type { StaticJsNull } from "./StaticJsNull.js";
import type { StaticJsNumber } from "./StaticJsNumber.js";
import type { StaticJsString } from "./StaticJsString.js";
import type { StaticJsUndefined } from "./StaticJsUndefined.js";
import type { StaticJsValue } from "./StaticJsValue.js";
import { isStaticJsValue } from "./StaticJsValue.js";

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
