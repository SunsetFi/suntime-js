import { isStaticJsNumber, type StaticJsNumber } from "../../types/StaticJsNumber.js";

import StaticJsNumberBoxed from "../../types/implementation/StaticJsNumberBoxed.js";

export default function isNumberLike(
  value: unknown,
): value is StaticJsNumber | StaticJsNumberBoxed {
  return value instanceof StaticJsNumberBoxed || isStaticJsNumber(value);
}
