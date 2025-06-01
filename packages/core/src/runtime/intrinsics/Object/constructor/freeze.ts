import { ReturnCompletion } from "../../../../evaluator/completions/ReturnCompletion.js";

import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

import { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorFreezeDeclaration: IntrinsicPropertyDeclaration = {
  name: "freeze",
  *func(realm, thisArg, targetValue) {
    if (!targetValue) {
      targetValue = realm.types.undefined;
    }
    if (isStaticJsNull(targetValue) || isStaticJsUndefined(targetValue)) {
      return ReturnCompletion(targetValue);
    }

    const obj = targetValue.toObject();

    const keys = yield* obj.getOwnKeysEvaluator();
    for (const key of keys) {
      yield* obj.definePropertyEvaluator(key, {
        writable: false,
        configurable: false,
      });
    }

    yield* obj.preventExtensionsEvaluator();

    return ReturnCompletion(targetValue);
  },
};

export default objectCtorFreezeDeclaration;
