import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import toBoolean from "../../../algorithms/to-boolean.js";
import toObject from "../../../algorithms/to-object.js";

import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import getLength from "./utils/get-length.js";

const arrayProtoEveryDeclaration: IntrinsicPropertyDeclaration = {
  name: "every",
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
          `${callback.toString()} is not a function`,
        ),
      );
    }

    const length = yield* getLength(realm, thisObj);

    if (length === 0) {
      return realm.types.false;
    }

    for (let i = 0; i < length; i++) {
      const property = String(i);
      const hasProperty = yield* thisObj.hasPropertyEvaluator(property);
      if (!hasProperty) {
        continue;
      }

      const elementValue = yield* thisObj.getPropertyEvaluator(property);

      let result = yield* callback.callEvaluator(
        thisObj,
        elementValue,
        realm.types.number(i),
        thisObj,
      );
      result = yield* toBoolean(result, realm);
      if (!result.value) {
        return realm.types.false;
      }
    }

    return realm.types.true;
  },
};

export default arrayProtoEveryDeclaration;
