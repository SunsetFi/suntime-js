import { Completion } from "../../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import EvaluationContext from "../../evaluator/EvaluationContext.js";

import { type StaticJsFunction } from "../types/StaticJsFunction.js";
import { type StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import type { StaticJsIteratorRecord } from "./StaticJsIteratorRecord.js";

import getMethod from "../algorithms/get-method.js";

import getIteratorFromMethod from "./get-iterator-from-method.js";
import createAsyncFromSyncIterator from "./create-async-from-sync-iterator.js";

export default function* getIterator(
  obj: StaticJsValue,
  kind: "sync" | "async",
): EvaluationGenerator<StaticJsIteratorRecord> {
  const { realm } = EvaluationContext.current;
  let method: StaticJsFunction | null;
  if (kind === "async") {
    method = yield* getMethod(obj, realm.types.symbols.asyncIterator);
    if (method === null) {
      const syncMethod = yield* getMethod(obj, realm.types.symbols.iterator);
      if (syncMethod === null) {
        throw Completion.Throw("TypeError", "Value is not async iterable");
      }

      const syncIteratorRecord = yield* getIteratorFromMethod(
        // Guarenteed due to getMethod above
        obj as StaticJsObjectLike,
        syncMethod,
      );

      return yield* createAsyncFromSyncIterator(syncIteratorRecord);
    }
  } else {
    method = yield* getMethod(obj, realm.types.symbols.iterator);
  }

  if (method === null) {
    throw Completion.Throw("TypeError", "Value is not iterable");
  }

  return yield* getIteratorFromMethod(obj as StaticJsObjectLike, method);
}
