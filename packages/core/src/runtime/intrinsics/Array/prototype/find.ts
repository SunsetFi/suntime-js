import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import toBoolean from "../../../algorithms/to-boolean.js";
import toObject from "../../../algorithms/to-object.js";

import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";

const arrayProtoFindDeclaration: IntrinsicPropertyDeclaration = {
  key: "find",
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

    for (let i = 0; i < length; i++) {
      const value = yield* thisObj.getPropertyEvaluator(String(i));
      let result = yield* callback.callEvaluator(
        thisObj,
        value,
        realm.types.number(i),
        thisObj,
      );
      result = yield* toBoolean(result, realm);

      if (result.value) {
        return value;
      }
    }

    return realm.types.undefined;
  },
};

export default arrayProtoFindDeclaration;
