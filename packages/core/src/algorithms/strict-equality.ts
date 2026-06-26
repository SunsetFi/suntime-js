import type { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../runtime/realm/StaticJsRealm.js";
import type { StaticJsBoolean } from "../runtime/types/StaticJsBoolean.js";
import { isStaticJsObject } from "../runtime/types/StaticJsObject.js";
import type { StaticJsScalar } from "../runtime/types/StaticJsScalar.js";
import { isStaticJsSymbol } from "../runtime/types/StaticJsSymbol.js";
import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";

export function* strictEquality(
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

  if (isStaticJsObject(a)) {
    return realm.types.boolean(a === b);
  }

  // Value is a scalar value.
  const bScalar = b as StaticJsScalar;
  return realm.types.boolean(a.value === bScalar.value);
}
