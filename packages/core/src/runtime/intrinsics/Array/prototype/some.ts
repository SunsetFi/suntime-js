import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import toBoolean from "../../../algorithms/to-boolean.js";
import toObject from "../../../algorithms/to-object.js";

import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";

const arrayProtoSomeDeclaration: IntrinsicPropertyDeclaration = {
  key: "some",
  *func(realm, thisArg, callback) {
    const thisObj = yield* toObject(thisArg ?? realm.types.undefined, realm);

    if (!callback) {
      callback = realm.types.undefined;
    }
    if (!isStaticJsFunction(callback)) {
      // FIXME: NodeJs is doing something aside from casting it to string.
      // Object appears as "#<Object>"
      throw new ThrowCompletion(
        realm.types.error(
          "TypeError",
          `${callback.toStringSync()} is not a function`,
        ),
      );
    }

    const length = yield* lengthOfArrayLike(thisObj, realm);

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
      if (condition) {
        return realm.types.true;
      }
    }

    return realm.types.false;
  },
};

export default arrayProtoSomeDeclaration;
