import { Completion } from "../../../../evaluator/completions/Completion.js";
import toObject from "../../../algorithms/to-object.js";

import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";

const arrayProtoForEachDeclaration: IntrinsicPropertyDeclaration = {
  key: "forEach",
  *func(realm, thisArg, callback, providedThisArg) {
    const thisObj = yield* toObject(thisArg ?? realm.types.undefined, realm);

    if (!callback) {
      callback = realm.types.undefined;
    }

    if (!isStaticJsFunction(callback)) {
      throw Completion.Throw(
        realm.types.error("TypeError", `${callback.toStringSync()} is not a function`),
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
      yield* callback.callEvaluator(providedThisArg ?? thisObj, [
        elementValue,
        realm.types.number(i),
        thisObj,
      ]);
    }

    return realm.types.undefined;
  },
};

export default arrayProtoForEachDeclaration;
