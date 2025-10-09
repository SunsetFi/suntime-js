import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import toObject from "../../../algorithms/to-object.js";

import {
  isStaticJsArray,
  MAX_ARRAY_LENGTH_INCLUSIVE,
} from "../../../types/StaticJsArray.js";
import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";
import arraySpeciesCreate from "../../../algorithms/array-species-create.js";

const arrayProtoFlatMapDeclaration: IntrinsicPropertyDeclaration = {
  key: "flatMap",
  *func(realm, thisArg, callback) {
    const thisObj = yield* toObject(thisArg ?? realm.types.undefined, realm);

    if (!callback) {
      callback = realm.types.undefined;
    }
    if (!isStaticJsFunction(callback)) {
      // Yes, this error message is different from all the others!
      throw new ThrowCompletion(
        realm.types.error(
          "TypeError",
          "flatMap mapper function is not callable",
        ),
      );
    }

    const length = yield* lengthOfArrayLike(thisObj, realm);

    const A = yield* arraySpeciesCreate(thisObj, 0, realm);
    let n = 0;

    for (let i = 0; i < length; i++) {
      const hasProperty = yield* thisObj.hasPropertyEvaluator(String(i));
      // flatMap ignores missing items.
      if (!hasProperty) {
        continue;
      }

      const currentItem = yield* thisObj.getPropertyEvaluator(String(i));
      const result = yield* callback.callEvaluator(
        thisObj,
        currentItem,
        realm.types.number(i),
        thisObj,
      );
      // flatMap does not flatten non-array array-likes.
      if (isStaticJsArray(result)) {
        const len = yield* lengthOfArrayLike(result, realm);
        if (n + len > MAX_ARRAY_LENGTH_INCLUSIVE) {
          throw new ThrowCompletion(
            realm.types.error("TypeError", "Maximum array size exceeded"),
          );
        }

        for (let k = 0; k < len; k++) {
          const exists = yield* result.hasPropertyEvaluator(String(k));
          if (!exists) {
            continue;
          }

          const value = yield* result.getPropertyEvaluator(String(k));
          yield* A.definePropertyEvaluator(String(n), {
            value: value,
            writable: true,
            enumerable: true,
            configurable: true,
          });
          n++;
        }
      } else {
        if (n > MAX_ARRAY_LENGTH_INCLUSIVE) {
          throw new ThrowCompletion(
            realm.types.error("TypeError", "Maximum array size exceeded"),
          );
        }

        yield* A.definePropertyEvaluator(String(n), {
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
