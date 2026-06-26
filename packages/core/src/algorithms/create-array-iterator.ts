import type { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../runtime/realm/StaticJsRealm.js";
import { StaticJsArrayIteratorImpl } from "../runtime/types/implementation/objects/StaticJsArrayIteratorImpl.js";
import type { StaticJsObject } from "../runtime/types/StaticJsObject.js";

export function* createArrayIterator(
  array: StaticJsObject,
  kind: "key+value" | "key" | "value",
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsObject> {
  return new StaticJsArrayIteratorImpl(array, 0, kind, realm);
}
