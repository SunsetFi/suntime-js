import { Completion } from "../../../../evaluator/completions/Completion.js";
import toBoolean from "../../../algorithms/to-boolean.js";
import toObject from "../../../algorithms/to-object.js";

import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";
import { get } from "../../../algorithms/get.js";
import call from "../../../algorithms/call.js";

const arrayProtoEveryDeclaration: IntrinsicPropertyDeclaration = {
  key: "every",
  *func(realm, thisArg = realm.types.undefined, callback) {
    const thisObj = yield* toObject(thisArg);

    if (!callback) {
      callback = realm.types.undefined;
    }

    if (!isStaticJsFunction(callback)) {
      // FIXME: NodeJs is doing something aside from casting it to string.
      // Object appears as "#<Object>"
      throw Completion.Throw("TypeError", `${callback.toStringSync()} is not a function`);
    }

    const length = yield* lengthOfArrayLike(thisObj);

    for (let i = 0; i < length; i++) {
      const property = String(i);
      const hasProperty = yield* thisObj.hasPropertyEvaluator(property);
      if (!hasProperty) {
        continue;
      }

      const elementValue = yield* get(thisObj, property);

      const resultValue = yield* call(callback, thisObj, [
        elementValue,
        realm.types.number(i),
        thisObj,
      ]);
      const condition = yield* toBoolean.js(resultValue);
      if (!condition) {
        return realm.types.false;
      }
    }

    return realm.types.true;
  },
};

export default arrayProtoEveryDeclaration;
