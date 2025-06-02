import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import toObject from "../../../algorithms/to-object.js";

import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import getLength from "./utils/get-length.js";

const arrayProtoForEachDeclaration: IntrinsicPropertyDeclaration = {
  name: "forEach",
  *func(realm, thisArg, callback, providedThisArg) {
    const thisObj = yield* toObject(thisArg ?? realm.types.undefined, realm);

    if (!callback) {
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
      const property = String(i);
      const hasProperty = yield* thisObj.hasPropertyEvaluator(property);
      if (!hasProperty) {
        continue;
      }

      const elementValue = yield* thisObj.getPropertyEvaluator(property);
      yield* callback.callEvaluator(
        providedThisArg ?? thisObj,
        elementValue,
        realm.types.number(i),
        thisObj,
      );
    }

    return realm.types.undefined;
  },
};

export default arrayProtoForEachDeclaration;
