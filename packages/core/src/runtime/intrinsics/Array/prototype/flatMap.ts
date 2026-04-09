import { Completion } from "../../../../evaluator/completions/Completion.js";
import toObject from "../../../algorithms/to-object.js";

import { isStaticJsArray, MAX_ARRAY_LENGTH_INCLUSIVE } from "../../../types/StaticJsArray.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";
import arraySpeciesCreate from "../../../algorithms/array-species-create.js";
import { get } from "../../../algorithms/get.js";
import call from "../../../algorithms/call.js";
import { isCallable } from "../../../algorithms/is-callable.js";

const arrayProtoFlatMapDeclaration: IntrinsicPropertyDeclaration = {
  key: "flatMap",
  *func(realm, thisArg = realm.types.undefined, callback) {
    const thisObj = yield* toObject(thisArg);

    if (!callback) {
      callback = realm.types.undefined;
    }
    if (!isCallable(callback)) {
      // Yes, this error message is different from all the others!
      throw Completion.Throw("TypeError", "flatMap mapper function is not callable");
    }

    const length = yield* lengthOfArrayLike(thisObj);

    const A = yield* arraySpeciesCreate(thisObj, 0, realm);
    let n = 0;

    for (let i = 0; i < length; i++) {
      const hasProperty = yield* thisObj.hasPropertyEvaluator(String(i));
      // flatMap ignores missing items.
      if (!hasProperty) {
        continue;
      }

      const currentItem = yield* get(thisObj, String(i));
      const result = yield* call(callback, thisObj, [currentItem, realm.types.number(i), thisObj]);
      // flatMap does not flatten non-array array-likes.
      if (isStaticJsArray(result)) {
        const len = yield* lengthOfArrayLike(result);
        if (n + len > MAX_ARRAY_LENGTH_INCLUSIVE) {
          throw Completion.Throw("TypeError", "Maximum array size exceeded");
        }

        for (let k = 0; k < len; k++) {
          const exists = yield* result.hasPropertyEvaluator(String(k));
          if (!exists) {
            continue;
          }

          const value = yield* get(result, String(k));
          yield* A.defineOwnPropertyEvaluator(String(n), {
            value: value,
            writable: true,
            enumerable: true,
            configurable: true,
          });
          n++;
        }
      } else {
        if (n > MAX_ARRAY_LENGTH_INCLUSIVE) {
          throw Completion.Throw("TypeError", "Maximum array size exceeded");
        }

        yield* A.defineOwnPropertyEvaluator(String(n), {
          value: result,
          writable: true,
          enumerable: true,
          configurable: true,
        });
        n++;
      }
    }

    return A;
  },
};

export default arrayProtoFlatMapDeclaration;
