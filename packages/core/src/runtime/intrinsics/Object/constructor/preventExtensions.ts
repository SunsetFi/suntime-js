import toObject from "../../../algorithms/to-object.js";
import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorPreventExtensionsDeclaration: IntrinsicPropertyDeclaration = {
  name: "preventExtensions",
  *func(realm, thisArg, targetValue) {
    if (!targetValue) {
      targetValue = realm.types.undefined;
    }
    if (isStaticJsNull(targetValue) || isStaticJsUndefined(targetValue)) {
      return targetValue;
    }

    const obj = yield* toObject(targetValue, realm);
    yield* obj.preventExtensionsEvaluator();

    return targetValue;
  },
};

export default objectCtorPreventExtensionsDeclaration;
