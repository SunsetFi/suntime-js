import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsBoolean } from "../types/StaticJsBoolean.js";
import { isStaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import type { StaticJsScalar } from "../types/StaticJsScalar.js";
import { isStaticJsSymbol } from "../types/StaticJsSymbol.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

export default function* strictEquality(
  a: StaticJsValue,
  b: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsBoolean> {
  if (a.runtimeTypeCode !== b.runtimeTypeCode) {
    return realm.types.false;
  }

  if (isStaticJsSymbol(a)) {
    return realm.types.boolean(Object.is(a.value, (b as typeof a).value));
  }

  if (isStaticJsObjectLike(a)) {
    return realm.types.boolean(a === b);
  }

  // Value is a scalar value.
  const bScalar = b as StaticJsScalar;
  return realm.types.boolean(a.value === bScalar.value);
}
