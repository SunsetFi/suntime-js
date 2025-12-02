import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import StaticJsFunctionImpl from "../types/implementation/StaticJsFunctionImpl.js";
import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { createIteratorResultObject } from "./create-iterator-result-object.js";

export default function* createListIteratorRecord(
  values: StaticJsValue[],
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsObjectLike> {
  let index = 0;
  const next = new StaticJsFunctionImpl(realm, "next", function* () {
    if (index >= values.length) {
      return yield* createIteratorResultObject(
        realm.types.undefined,
        true,
        realm,
      );
    }

    const value = values[index++];
    return yield* createIteratorResultObject(value, false, realm);
  });

  const iterator = realm.types.object();
  yield* iterator.definePropertyEvaluator("next", {
    value: next,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  yield* iterator.definePropertyEvaluator("throw", {
    value: realm.types.null,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  yield* iterator.definePropertyEvaluator("return", {
    value: realm.types.null,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  yield* iterator.definePropertyEvaluator(realm.types.symbols.iterator, {
    value: iterator,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return iterator;
}
