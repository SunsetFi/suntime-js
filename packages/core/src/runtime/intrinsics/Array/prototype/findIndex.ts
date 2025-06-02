import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import toBoolean from "../../../algorithms/to-boolean.js";
import toObject from "../../../algorithms/to-object.js";

import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import getLength from "./utils/get-length.js";

const arrayProtoFindIndexDeclaration: IntrinsicPropertyDeclaration = {
  name: "findIndex",
  *func(realm, thisArg, callback) {
    const thisObj = yield* toObject(thisArg ?? realm.types.undefined, realm);

    if (callback == null) {
      callback = realm.types.undefined;
    }

    if (!isStaticJsFunction(callback)) {
      throw new ThrowCompletion(
        realm.types.error(
          "TypeError",
          `${callback.toString()} is not a function`,
        ),
      );
    }

    const length = yield* getLength(realm, thisObj);

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
        return realm.types.number(i);
      }
    }

    return realm.types.number(-1);
  },
};

export default arrayProtoFindIndexDeclaration;
