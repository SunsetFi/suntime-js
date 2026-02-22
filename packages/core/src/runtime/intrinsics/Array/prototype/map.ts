import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import toObject from "../../../algorithms/to-object.js";

import { isStaticJsArray } from "../../../types/StaticJsArray.js";
import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";
import arraySpeciesCreate from "../../../algorithms/array-species-create.js";

const arrayProtoMapDeclaration: IntrinsicPropertyDeclaration = {
  key: "map",
  *func(realm, thisArg, callback, providedThisArg) {
    const thisObj = yield* toObject(thisArg ?? realm.types.undefined, realm);

    if (!isStaticJsArray(thisArg)) {
      // Seems to do nothing in NodeJs.
      return realm.types.undefined;
    }

    if (!callback) {
      callback = realm.types.undefined;
    }

    if (!isStaticJsFunction(callback)) {
      throw new ThrowCompletion(
        realm.types.error(
          "TypeError",
          `${callback.toStringSync()} is not a function`,
        ),
      );
    }

    const length = yield* lengthOfArrayLike(thisObj, realm);

    const A = yield* arraySpeciesCreate(thisObj, length, realm);
    for (let i = 0; i < length; i++) {
      const property = String(i);
      const hasProperty = yield* thisObj.hasPropertyEvaluator(property);
      if (!hasProperty) {
        // map does not invoke for, and preserves, empties.
        continue;
      }

      const elementValue = yield* thisArg.getEvaluator(property);
      const result = yield* callback.callEvaluator(providedThisArg ?? thisArg, [
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
