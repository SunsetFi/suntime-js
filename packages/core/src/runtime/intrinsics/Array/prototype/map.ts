import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";
import arraySpeciesCreate from "../../../algorithms/array-species-create.js";
import call from "../../../algorithms/call.js";
import { get } from "../../../algorithms/get.js";
import { isCallable } from "../../../algorithms/is-callable.js";
import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";
import toObject from "../../../algorithms/to-object.js";
import toString from "../../../algorithms/to-string.js";
import { isStaticJsArray } from "../../../types/StaticJsArray.js";

const arrayProtoMapDeclaration: IntrinsicPropertyDeclaration = {
  key: "map",
  *func(realm, thisArg = realm.types.undefined, callback, providedThisArg) {
    const thisObj = yield* toObject(thisArg);

    if (!isStaticJsArray(thisArg)) {
      // Seems to do nothing in NodeJs.
      return realm.types.undefined;
    }

    if (!callback) {
      callback = realm.types.undefined;
    }

    if (!isCallable(callback)) {
      const callbackStr = yield* toString.js(callback);
      throw Completion.Throw("TypeError", `${callbackStr} is not a function`);
    }

    const length = yield* lengthOfArrayLike(thisObj);

    const A = yield* arraySpeciesCreate(thisObj, length, realm);
    for (let i = 0; i < length; i++) {
      const property = String(i);
      const hasProperty = yield* thisObj.hasPropertyEvaluator(property);
      if (!hasProperty) {
        // map does not invoke for, and preserves, empties.
        continue;
      }

      const elementValue = yield* get(thisArg, property);
      const result = yield* call(callback, providedThisArg ?? thisArg, [
        elementValue,
        realm.types.number(i),
        thisArg,
      ]);

      yield* A.defineOwnPropertyEvaluator(property, {
        value: result,
        writable: true,
        enumerable: true,
        configurable: true,
      });
    }

    return A;
  },
};

export default arrayProtoMapDeclaration;
