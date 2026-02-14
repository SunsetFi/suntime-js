import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { type StaticJsFunction } from "../types/StaticJsFunction.js";
import { type StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import type { IteratorRecord } from "./IteratorRecord.js";

import getMethod from "../algorithms/get-method.js";

import getIteratorFromMethod from "./get-iterator-from-method.js";
import createAsyncFromSyncIterator from "./create-async-from-sync-iterator.js";

export default function* getIterator(
  obj: StaticJsValue,
  kind: "sync" | "async",
  realm: StaticJsRealm,
): EvaluationGenerator<IteratorRecord> {
  let method: StaticJsFunction | null;
  if (kind === "async") {
    method = yield* getMethod(obj, realm.types.symbols.asyncIterator, realm);
    if (method === null) {
      const syncMethod = yield* getMethod(
        obj,
        realm.types.symbols.iterator,
        realm,
      );
      if (syncMethod === null) {
        throw new ThrowCompletion(
          realm.types.error("TypeError", "Value is not async iterable"),
        );
      }

      const syncIteratorRecord = yield* getIteratorFromMethod(
        // Guarenteed due to getMethod above
        obj as StaticJsObjectLike,
        syncMethod,
        realm,
      );

      return yield* createAsyncFromSyncIterator(syncIteratorRecord, realm);
    }
  } else {
    method = yield* getMethod(obj, realm.types.symbols.iterator, realm);
  }

  if (method === null) {
    throw new ThrowCompletion(
      realm.types.error("TypeError", "Value is not iterable"),
    );
  }

  return yield* getIteratorFromMethod(obj as StaticJsObjectLike, method, realm);
}
