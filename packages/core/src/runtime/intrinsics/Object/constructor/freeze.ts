import { NormalCompletion } from "../../../../evaluator/internal.js";
import { isStaticJsNull, isStaticJsUndefined } from "../../../types/index.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorFreezeDeclaration: IntrinsicPropertyDeclaration = {
  name: "freeze",
  *func(realm, thisArg, targetValue) {
    if (!targetValue) {
      targetValue = realm.types.undefined;
    }
    if (isStaticJsNull(targetValue) || isStaticJsUndefined(targetValue)) {
      return NormalCompletion(targetValue);
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

    return NormalCompletion(targetValue);
  },
};

export default objectCtorFreezeDeclaration;
