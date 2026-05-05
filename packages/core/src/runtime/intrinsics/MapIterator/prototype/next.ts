import { Completion } from "../../../../evaluator/completions/Completion.js";
import { createIteratorResultObject } from "../../../iterators/create-iterator-result-object.js";
import { StaticJsMapIteratorImpl } from "../../../types/implementation/objects/StaticJsMapIteratorImpl.js";
import { isStaticJsObject } from "../../../types/StaticJsObject.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

export const mapIteratorProtoNextDeclaration: IntrinsicPropertyDeclaration = {
  key: "next",
  *func(realm, thisArg) {
    const O = thisArg;
    if (!isStaticJsObject(O)) {
      throw Completion.Throw("TypeError", "Map Iterator.prototype.next called on non-object");
    }

    if (O instanceof StaticJsMapIteratorImpl === false) {
      throw Completion.Throw(
        "TypeError",
        "Map Iterator.prototype.next called on incompatible receiver",
      );
    }

    const result = yield* O.nextEvaluator();
    return yield* createIteratorResultObject(result.value, result.done, realm);
  },
};
