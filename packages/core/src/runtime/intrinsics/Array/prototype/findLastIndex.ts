import { Completion } from "../../../../evaluator/completions/Completion.js";
import toBoolean from "../../../algorithms/to-boolean.js";
import toObject from "../../../algorithms/to-object.js";

import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";
import { get } from "../../../algorithms/get.js";

const arrayProtoFindLastIndexDeclaration: IntrinsicPropertyDeclaration = {
  key: "findLastIndex",
  *func(realm, thisArg = realm.types.undefined, callback) {
    const thisObj = yield* toObject(thisArg);

    if (callback == null) {
      callback = realm.types.undefined;
    }

    if (!isStaticJsFunction(callback)) {
      throw Completion.Throw("TypeError", `${callback.toStringSync()} is not a function`);
    }

    const length = yield* lengthOfArrayLike(thisObj);

    for (let i = length - 1; i >= 0; i--) {
      const value = yield* get(thisObj, String(i));
      const resultValue = yield* callback.callEvaluator(thisObj, [
        value,
        realm.types.number(i),
        thisObj,
      ]);
      const condition = yield* toBoolean.js(resultValue);
      if (condition) {
        return realm.types.number(i);
      }
    }

    return realm.types.number(-1);
  },
};

export default arrayProtoFindLastIndexDeclaration;
