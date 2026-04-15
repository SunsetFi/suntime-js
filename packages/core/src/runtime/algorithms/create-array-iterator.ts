import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import { StaticJsArrayIteratorImpl } from "../types/implementation/objects/StaticJsArrayIteratorImpl.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";

export function* createArrayIterator(
  array: StaticJsObject,
  kind: "key+value" | "key" | "value",
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsObject> {
  return new StaticJsArrayIteratorImpl(array, 0, kind, realm);
}
