import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsBoolean } from "../types/StaticJsBoolean.js";
import { isStaticJsNumber } from "../types/StaticJsNumber.js";
import { isStaticJsScalar } from "../types/StaticJsScalar.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

export default function* sameValueZero(
  a: StaticJsValue,
  b: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsBoolean> {
  if (isStaticJsNumber(a) && isStaticJsNumber(b)) {
    return realm.types.boolean(
      a.value === b.value || (a.value !== a.value && b.value !== b.value),
    );
  }

  if (isStaticJsScalar(a) && isStaticJsScalar(b)) {
    return realm.types.boolean(a.value === b.value);
  }

  // Object.  Return if the same reference.
  return realm.types.boolean(a === b);
}
