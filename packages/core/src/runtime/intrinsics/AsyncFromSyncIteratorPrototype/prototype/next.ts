import { Completion } from "../../../../evaluator/completions/Completion.js";
import { StaticJsAsyncFromSyncIterator } from "../../../types/implementation/objects/StaticJsAsyncFromSyncIterator.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

export const asyncFromSyncIteratorProtoNextDeclaration: IntrinsicPropertyDeclaration = {
  key: "next",
  *func(_realm, thisArg, value) {
    if (thisArg instanceof StaticJsAsyncFromSyncIterator === false) {
      throw Completion.Throw("TypeError", "Iterator.next called on incompatible receiver");
    }

    return yield* thisArg.nextEvaluator(value);
  },
};
