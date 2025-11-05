import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import toBoolean from "../../../algorithms/to-boolean.js";
import toObject from "../../../algorithms/to-object.js";

import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";

const arrayProtoFindLastDeclaration: IntrinsicPropertyDeclaration = {
  key: "findLast",
  *func(realm, thisArg, callback) {
    const thisObj = yield* toObject(thisArg ?? realm.types.undefined, realm);

    if (callback == null) {
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

    for (let i = length - 1; i >= 0; i--) {
      const value = yield* thisObj.getPropertyEvaluator(String(i));
      const resultValue = yield* callback.callEvaluator(
        thisObj,
        value,
        realm.types.number(i),
        thisObj,
      );
      const condition = yield* toBoolean.js(resultValue, realm);
      if (condition) {
        return value;
      }
    }

    return realm.types.undefined;
  },
};

export default arrayProtoFindLastDeclaration;
