import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import toObject from "../../../algorithms/to-object.js";
import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

const objectCtorSealDeclaration: IntrinsicPropertyDeclaration = {
  key: "seal",
  *func(realm, _thisArg, targetValue) {
    if (!targetValue) {
      targetValue = realm.types.undefined;
    }
    if (isStaticJsNull(targetValue) || isStaticJsUndefined(targetValue)) {
      return targetValue;
    }

    const obj = yield* toObject(targetValue);

    const keys = yield* obj.ownPropertyKeysEvaluator();
    for (const key of keys) {
      yield* obj.defineOwnPropertyEvaluator(key, {
        configurable: false,
      });
    }

    yield* obj.preventExtensionsEvaluator();

    return targetValue;
  },
};

export default objectCtorSealDeclaration;
