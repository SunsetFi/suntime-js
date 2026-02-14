import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../types/StaticJsValue.js";
import { isStaticJsArray } from "../types/StaticJsArray.js";

export default function* isArray(
  value: StaticJsValue,
  _realm: StaticJsRealm,
): EvaluationGenerator<boolean> {
  if (isStaticJsArray(value)) {
    return true;
  }

  // TODO: Check proxy target.

  return false;
}
