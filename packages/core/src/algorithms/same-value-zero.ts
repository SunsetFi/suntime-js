import type { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../runtime/realm/StaticJsRealm.js";
import type { StaticJsBoolean } from "../runtime/types/StaticJsBoolean.js";
import { isStaticJsNumber } from "../runtime/types/StaticJsNumber.js";
import { isStaticJsScalar } from "../runtime/types/StaticJsScalar.js";
import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";

export function* sameValueZero(
  a: StaticJsValue,
  b: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsBoolean> {
  if (isStaticJsNumber(a) && isStaticJsNumber(b)) {
    return realm.types.boolean(a.value === b.value || (a.value !== a.value && b.value !== b.value));
  }

  if (isStaticJsScalar(a) && isStaticJsScalar(b)) {
    return realm.types.boolean(a.value === b.value);
  }

  // Object.  Return if the same reference.
  return realm.types.boolean(a === b);
}
