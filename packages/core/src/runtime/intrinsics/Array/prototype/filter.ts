import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";

import toBoolean from "../../../algorithms/to-boolean.js";
import toObject from "../../../algorithms/to-object.js";
import arraySpeciesCreate from "../../../algorithms/array-species-create.js";

import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";

const arrayProtoFilterDeclaration: IntrinsicPropertyDeclaration = {
  key: "filter",
  *func(realm, thisArg, callback) {
    const thisObj = yield* toObject(thisArg ?? realm.types.undefined, realm);

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

    const target = yield* arraySpeciesCreate(thisObj, 0, realm);
    let to = 0;

    for (let i = 0; i < length; i++) {
      const property = String(i);
      const hasProperty = yield* thisObj.hasPropertyEvaluator(property);
      if (!hasProperty) {
        continue;
      }

      const elementValue = yield* thisObj.getEvaluator(property);
      const resultValue = yield* callback.callEvaluator(thisObj, [
        elementValue,
        realm.types.number(i),
        thisObj,
      ]);
      const condition = yield* toBoolean.js(resultValue, realm);
      if (!condition) {
        continue;
      }

      // Needs to be define, not set, for spec compliance.
      // This is only relevant for crazy things like a subclass of array
      // with setter props for index values.
      yield* target.definePropertyEvaluator(String(to), {
        value: elementValue,
        writable: true,
        enumerable: true,
        configurable: true,
      });
      to++;
    }

    return target;
  },
};

export default arrayProtoFilterDeclaration;
