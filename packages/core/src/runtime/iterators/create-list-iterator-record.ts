import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { EvaluationContext } from "../../evaluator/EvaluationContext.js";

import type { StaticJsIteratorRecord } from "./StaticJsIteratorRecord.js";

import { StaticJsNativeFunctionImpl } from "../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { createIteratorResultObject } from "./create-iterator-result-object.js";
import { get } from "../algorithms/get.js";

export function* createListIteratorRecord(
  values: StaticJsValue[],
): EvaluationGenerator<StaticJsIteratorRecord> {
  const { realm } = EvaluationContext.current;
  let index = 0;
  const next = new StaticJsNativeFunctionImpl(realm, "next", function* () {
    if (index >= values.length) {
      return yield* createIteratorResultObject(realm.types.undefined, true, realm);
    }

    const value = values[index++];
    const result = yield* createIteratorResultObject(value, false, realm);
    return result;
  });

  const iterator = realm.types.object();

  yield* iterator.defineOwnPropertyEvaluator("next", {
    value: next,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  yield* iterator.defineOwnPropertyEvaluator("throw", {
    value: realm.types.null,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  yield* iterator.defineOwnPropertyEvaluator("return", {
    value: realm.types.null,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  yield* iterator.defineOwnPropertyEvaluator(realm.types.symbols.iterator, {
    value: iterator,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  const nextMethod = yield* get(iterator, "next");

  return {
    iterator,
    nextMethod,
    done: false,
  };
}
