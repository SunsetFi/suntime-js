import { Completion } from "../../../../evaluator/completions/Completion.js";
import { call } from "../../../algorithms/call.js";
import { get } from "../../../algorithms/get.js";
import { isCallable } from "../../../algorithms/is-callable.js";
import { lengthOfArrayLike } from "../../../algorithms/length-of-array-like.js";
import { toObject } from "../../../algorithms/to-object.js";
import { toString } from "../../../algorithms/to-string.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoForEachDeclaration: IntrinsicPropertyDeclaration = {
  key: "forEach",
  length: 1,
  *func(realm, thisArg = realm.types.undefined, callback, providedThisArg) {
    const thisObj = yield* toObject(thisArg);

    if (!callback) {
      callback = realm.types.undefined;
    }

    if (!isCallable(callback)) {
      const callbackStr = yield* toString.js(callback);
      throw Completion.Throw("TypeError", `${callbackStr} is not a function`);
    }

    const length = yield* lengthOfArrayLike(thisObj);

    for (let i = 0; i < length; i++) {
      const property = String(i);
      const hasProperty = yield* thisObj.hasPropertyEvaluator(property);
      if (!hasProperty) {
        continue;
      }

      const elementValue = yield* get(thisObj, property);
      yield* call(callback, providedThisArg ?? thisObj, [
        elementValue,
        realm.types.number(i),
        thisObj,
      ]);
    }

    return realm.types.undefined;
  },
};

export default arrayProtoForEachDeclaration;
