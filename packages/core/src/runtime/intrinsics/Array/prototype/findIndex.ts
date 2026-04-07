import { Completion } from "../../../../evaluator/completions/Completion.js";
import toBoolean from "../../../algorithms/to-boolean.js";
import toObject from "../../../algorithms/to-object.js";

import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";
import { get } from "../../../algorithms/get.js";
import call from "../../../algorithms/call.js";
import toString from "../../../algorithms/to-string.js";

const arrayProtoFindIndexDeclaration: IntrinsicPropertyDeclaration = {
  key: "findIndex",
  *func(realm, thisArg = realm.types.undefined, callback) {
    const thisObj = yield* toObject(thisArg);

    if (callback == null) {
      callback = realm.types.undefined;
    }

    if (!isStaticJsFunction(callback)) {
      const callbackStr = yield* toString.js(callback);
      throw Completion.Throw("TypeError", `${callbackStr} is not a function`);
    }

    const length = yield* lengthOfArrayLike(thisObj);

    for (let i = 0; i < length; i++) {
      const value = yield* get(thisObj, String(i));
      const resultValue = yield* call(callback, thisObj, [value, realm.types.number(i), thisObj]);
      const condition = yield* toBoolean.js(resultValue);
      if (condition) {
        return realm.types.number(i);
      }
    }

    return realm.types.number(-1);
  },
};

export default arrayProtoFindIndexDeclaration;
