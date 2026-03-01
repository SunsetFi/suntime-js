import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../types/StaticJsValue.js";
import { isStaticJsFunction, type StaticJsFunction } from "../types/StaticJsFunction.js";

export default function isConstructor(
  value: StaticJsValue,
  _realm: StaticJsRealm,
): value is StaticJsFunction {
  if (!isStaticJsFunction(value)) {
    return false;
  }

  return value.isConstructor;
}
