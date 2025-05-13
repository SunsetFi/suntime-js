import ReturnCompletion from "../../../../evaluator/completions/ReturnCompletion.js";

import { isStaticJsNull, isStaticJsUndefined } from "../../../types/index.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorSealDeclaration: IntrinsicPropertyDeclaration = {
  name: "seal",
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
        configurable: false,
      });
    }

    yield* obj.preventExtensionsEvaluator();

    return ReturnCompletion(targetValue);
  },
};

export default objectCtorSealDeclaration;
