import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import StaticJsArrayIteratorImpl from "../types/implementation/StaticJsArrayIteratorImpl.js";
import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";

export default function* createArrayIterator(
  array: StaticJsObjectLike,
  kind: "key+value" | "key" | "value",
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsObjectLike> {
  return new StaticJsArrayIteratorImpl(array, 0, kind, realm);
}
