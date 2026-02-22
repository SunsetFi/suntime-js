import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import StaticJsIteratorImpl from "../types/implementation/StaticJsIteratorImpl.js";
import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";
import lengthOfArrayLike from "./length-of-array-like.js";

export default function* createArrayIterator(
  array: StaticJsObjectLike,
  kind: "key+value" | "key" | "value",
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsObjectLike> {
  // TODO: Array iterators have their own proto.
  // This might be important for instanceof checks.
  let index = 0;
  return new StaticJsIteratorImpl(function* () {
    const length = yield* lengthOfArrayLike(array, realm);
    if (index >= length) {
      return undefined;
    }

    let value: StaticJsValue;
    const indexStr = String(index);
    switch (kind) {
      case "key+value": {
        const key = realm.types.number(index);
        const val = yield* array.getEvaluator(indexStr);
        value = realm.types.array([key, val]);
        break;
      }
      case "key": {
        value = realm.types.number(index);
        break;
      }
      case "value": {
        value = yield* array.getEvaluator(indexStr);
        break;
      }
    }
    index++;
    return value;
  }, realm);
}
