import { Completion } from "../../../../evaluator/completions/Completion.js";

import { createIteratorResultObject } from "../../../iterators/create-iterator-result-object.js";

import { isStaticJsObjectLike } from "../../../types/StaticJsObjectLike.js";

import StaticJsArrayIteratorImpl from "../../../types/implementation/StaticJsArrayIteratorImpl.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoNextDeclaration: IntrinsicPropertyDeclaration = {
  key: "next",
  *func(realm, thisArg) {
    const O = thisArg;
    if (!isStaticJsObjectLike(O)) {
      throw Completion.Throw(
        realm.types.error("TypeError", "Array Iterator.prototype.next called on non-object"),
      );
    }

    // FIXME: Won't work if this is in the prototype chain.
    if (O instanceof StaticJsArrayIteratorImpl === false) {
      throw Completion.Throw(
        realm.types.error(
          "TypeError",
          "Array Iterator.prototype.next called on incompatible receiver",
        ),
      );
    }

    const result = yield* O.nextEvaluator();
    return yield* createIteratorResultObject(result.value, result.done, realm);
  },
};

export default arrayProtoNextDeclaration;
