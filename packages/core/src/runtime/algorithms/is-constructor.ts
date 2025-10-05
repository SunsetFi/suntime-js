import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../types/StaticJsValue.js";
import { isStaticJsFunction } from "../types/StaticJsFunction.js";

export default function* isConstructor(
  value: StaticJsValue,
  _realm: StaticJsRealm,
): EvaluationGenerator<boolean> {
  if (!isStaticJsFunction(value)) {
    return false;
  }

  return value.isConstructor;
}
