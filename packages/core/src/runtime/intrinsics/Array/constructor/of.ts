import type { StaticJsFunction } from "../../../types/StaticJsFunction.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";
import { arrayCreate } from "../../../algorithms/array-create.js";
import isConstructor from "../../../algorithms/is-constructor.js";
import { set } from "../../../algorithms/set.js";
import { isStaticJsObject, type StaticJsObject } from "../../../types/StaticJsObject.js";

const arrayCtorIsArrayDeclarationOfDeclaration: IntrinsicPropertyDeclaration = {
  key: "of",
  *func(realm, thisArg, ...items) {
    const len = realm.types.number(items.length);
    let A: StaticJsObject;
    if (isConstructor(thisArg)) {
      const constructed = yield* (thisArg as StaticJsFunction).constructEvaluator([len]);
      // FIXME: Not spec complaint.  The spec should throw trying to define the property, not ahead of time
      if (!isStaticJsObject(constructed)) {
        throw Completion.Throw("TypeError", "Constructor did not produce an object");
      }

      A = constructed;
    } else {
      A = yield* arrayCreate(len.value);
    }

    let k = 0;

    while (k < items.length) {
      // Per spec, must be defineProperty
      yield* A.defineOwnPropertyEvaluator(String(k), {
        value: items[k]!,
        writable: true,
        enumerable: true,
        configurable: true,
      });
      k++;
    }

    // Per spec, must be set
    // Does not invoke setters; array ctor uses define to create length.
    yield* set(A, "length", len, true);

    return A;
  },
};

export default arrayCtorIsArrayDeclarationOfDeclaration;
