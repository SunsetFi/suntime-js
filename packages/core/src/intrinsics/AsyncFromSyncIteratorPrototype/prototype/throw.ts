import { Completion } from "#evaluator/completions/Completion.js";
import { StaticJsAsyncFromSyncIterator } from "#types/implementation/objects/StaticJsAsyncFromSyncIterator.js";

import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

export const asyncFromSyncIteratorProtoThrowDeclaration: IntrinsicPropertyDeclaration = {
  key: "throw",
  *func(_realm, thisArg, value) {
    if (thisArg instanceof StaticJsAsyncFromSyncIterator === false) {
      throw yield* Completion.Throw.create(
        "TypeError",
        "Iterator.throw called on incompatible receiver",
      );
    }

    return yield* thisArg.throwEvaluator(value);
  },
};
