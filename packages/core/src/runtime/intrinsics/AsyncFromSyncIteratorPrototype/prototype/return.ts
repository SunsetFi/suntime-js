import { Completion } from "../../../../evaluator/completions/Completion.js";
import { StaticJsAsyncFromSyncIterator } from "../../../types/implementation/objects/StaticJsAsyncFromSyncIterator.js";
import { type IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

export const asyncFromSyncIteratorProtoReturnDeclaration: IntrinsicPropertyDeclaration = {
  key: "return",
  *func(_realm, thisArg, value) {
    if (thisArg instanceof StaticJsAsyncFromSyncIterator === false) {
      throw yield* Completion.Throw.create(
        "TypeError",
        "Iterator.return called on incompatible receiver",
      );
    }

    return yield* thisArg.returnEvaluator(value);
  },
};
