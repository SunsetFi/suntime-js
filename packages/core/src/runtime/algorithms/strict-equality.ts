import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsBoolean } from "../types/StaticJsBoolean.js";
import { isStaticJsObjectLike } from "../types/StaticJsObject.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

export default function* strictEquality(
  a: StaticJsValue,
  b: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsBoolean> {
  if (a.runtimeTypeOf !== b.runtimeTypeOf) {
    return realm.types.false;
  }

  if (isStaticJsObjectLike(a) || isStaticJsObjectLike(b)) {
    return realm.types.boolean(a === b);
  }

  // Value is a scalar value.
  return realm.types.boolean(a.value === b.value);
}
