import { Completion } from "../../../../evaluator/completions/Completion.js";

import isConstructor from "../../../algorithms/is-constructor.js";

import StaticJsArrayImpl from "../../../types/implementation/StaticJsArrayImpl.js";

import {
  isStaticJsObjectLike,
  type StaticJsObjectLike,
} from "../../../types/StaticJsObjectLike.js";
import type { StaticJsFunction } from "../../../types/StaticJsFunction.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayCtorIsArrayDeclarationOfDeclaration: IntrinsicPropertyDeclaration = {
  key: "of",
  *func(realm, thisArg, ...items) {
    const thisIsConstructor = yield* isConstructor(thisArg, realm);
    const len = realm.types.number(items.length);
    let A: StaticJsObjectLike;
    if (thisIsConstructor) {
      const constructed = yield* (
        thisArg as StaticJsFunction
      ).constructEvaluator([len]);
      // FIXME: Not spec complaint.  The spec should throw trying to define the property, not ahead of time
      if (!isStaticJsObjectLike(constructed)) {
        throw Completion.Throw(
          realm.types.error(
            "TypeError",
            "Constructor did not produce an object",
          ),
        );
      }

      A = constructed;
    } else {
      A = yield* StaticJsArrayImpl.create(realm, items.length);
    }

    let k = 0;

    while (k < items.length) {
      // Per spec, must be defineProperty
      yield* A.defineOwnPropertyEvaluator(String(k), {
        value: items[k],
        writable: true,
        enumerable: true,
        configurable: true,
      });
      k++;
    }

    // Per spec, must be set
    // Does not invoke setters; array ctor uses define to create length.
    yield* A.setEvaluator("length", len, true);

    return A;
  },
};

export default arrayCtorIsArrayDeclarationOfDeclaration;
