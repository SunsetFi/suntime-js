import { Completion } from "../../../evaluator/completions/Completion.js";
import { createIteratorResultObject } from "../../iterators/create-iterator-result-object.js";
import { StaticJsSetIteratorImpl } from "../../types/implementation/objects/StaticJsSetIteratorImpl.js";
import { isStaticJsObject } from "../../types/StaticJsObject.js";
import type { IntrinsicPropertyDeclaration } from "../apply-intrinsic-properties.js";

export const setIteratorProtoNextDeclaration: IntrinsicPropertyDeclaration = {
  key: "next",
  *func(realm, thisArg) {
    const O = thisArg;
    if (!isStaticJsObject(O)) {
      throw Completion.Throw("TypeError", "Set Iterator.prototype.next called on non-object");
    }

    if (O instanceof StaticJsSetIteratorImpl === false) {
      throw Completion.Throw(
        "TypeError",
        "Set Iterator.prototype.next called on incompatible receiver",
      );
    }

    const result = yield* O.nextEvaluator();
    return yield* createIteratorResultObject(result.value, result.done, realm);
  },
};
