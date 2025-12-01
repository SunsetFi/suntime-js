import toObject from "../../../algorithms/to-object.js";
import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorFreezeDeclaration: IntrinsicPropertyDeclaration = {
  key: "freeze",
  *func(realm, thisArg, targetValue) {
    if (!targetValue) {
      targetValue = realm.types.undefined;
    }
    if (isStaticJsNull(targetValue) || isStaticJsUndefined(targetValue)) {
      return targetValue;
    }

    const obj = yield* toObject(targetValue, realm);

    const keys = yield* obj.ownPropertyKeysEvaluator();
    for (const key of keys) {
      yield* obj.definePropertyEvaluator(key, {
        writable: false,
        configurable: false,
      });
    }

    yield* obj.preventExtensionsEvaluator();

    return targetValue;
  },
};

export default objectCtorFreezeDeclaration;
