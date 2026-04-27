import { Completion } from "../../../../evaluator/completions/Completion.js";
import { StaticJsAsyncFromSyncIterator } from "../../../types/implementation/objects/StaticJsAsyncFromSyncIterator.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

export const asyncFromSyncIteratorProtoReturnDeclaration: IntrinsicPropertyDeclaration = {
  key: "return",
  *func(_realm, thisArg, value) {
    if (thisArg instanceof StaticJsAsyncFromSyncIterator === false) {
      throw Completion.Throw("TypeError", "Iterator.return called on incompatible receiver");
    }

    return yield* thisArg.returnEvaluator(value);
  },
};
