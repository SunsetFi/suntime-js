import { Completion } from "../../../../evaluator/completions/Completion.js";
import toBoolean from "../../../algorithms/to-boolean.js";
import toObject from "../../../algorithms/to-object.js";

import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";

const arrayProtoFindIndexDeclaration: IntrinsicPropertyDeclaration = {
  key: "findIndex",
  *func(realm, thisArg, callback) {
    const thisObj = yield* toObject(thisArg ?? realm.types.undefined, realm);

    if (callback == null) {
      callback = realm.types.undefined;
    }

    if (!isStaticJsFunction(callback)) {
      throw Completion.Throw(
        realm.types.error(
          "TypeError",
          `${callback.toStringSync()} is not a function`,
        ),
      );
    }

    const length = yield* lengthOfArrayLike(thisObj, realm);

    for (let i = 0; i < length; i++) {
      const value = yield* thisObj.getEvaluator(String(i));
      const resultValue = yield* callback.callEvaluator(thisObj, [
        value,
        realm.types.number(i),
        thisObj,
      ]);
      const condition = yield* toBoolean.js(resultValue, realm);
      if (condition) {
        return realm.types.number(i);
      }
    }

    return realm.types.number(-1);
  },
};

export default arrayProtoFindIndexDeclaration;
